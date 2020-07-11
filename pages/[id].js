import Layout from '../components/Layout'
import Banner from '../components/Banner'
import ClipGrid from '../components/ClipGrid'
import Link from 'next/link';
import Error from './_error'


const channel = (props) => {
  const { channel, clips, statusCode } = props
  if (statusCode !== 200) {
    return <Error statusCode={statusCode} />
  }
  return (
    <Layout title={channel.title}>
      <Link href='/'>
        <button className='btn'>{'<'} Volver</button>
      </Link>
      <Banner bannerImg={channel.urls.banner_image.original} logoImg={channel.urls.logo_image.original} />
      <h1 className='titleChannel'>{channel.title}</h1>
      <ClipGrid clips={clips} />

      <style jsx>{`
        .titleChannel{
          text-align:center;
        }
        .btn{
          position:fixed;
          width:100px;
          height:50px;
          margin: -30px 0 20px 30px;
          font-size:15px;
          border:1px solid #e4e3e3;
          border-radius: 20px;
          background-color: #3b6978;
          color:#fff;
          cursor:pointer;
        }
        .btn:hover{
          text-decoration:underline;
        }
        `}</style>
    </Layout>
  )
}


export async function getServerSideProps({ params, res }) {
  const idChannel = params.id.split('.')[1]

  try {
    const [reqChannel, reqClips] = await Promise.all([
      fetch(`https://api.audioboom.com/channels/${idChannel}`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
    ])
    if (reqChannel.status >= 400) {
      res.statusCode = reqChannel.status
      return { props: { channel: null, clips: null, statusCode: reqChannel.status } }
    }

    const [dataChannel, dataClips] = await Promise.all([
      reqChannel.json(),
      reqClips.json()
    ])

    const channel = dataChannel.body.channel
    const clips = dataClips.body.audio_clips
    return { props: { channel, clips, statusCode: 200 } }
  } catch (e) {
    res.statusCode = 503;
    return { props: { channel: null, clips: null, statusCode: 503 } }
  }
}


export default channel