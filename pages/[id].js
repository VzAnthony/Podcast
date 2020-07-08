import Layout from '../components/Layout'
import Banner from '../components/Banner'
import ClipGrid from '../components/ClipGrid'
import Link from 'next/link';


const channel = (props) => {
  const { channel, clips } = props
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


export async function getServerSideProps({ params }) {
  const idChannel = params.id.split('.')[1]
  const [reqChannel, reqClips] = await Promise.all([
    fetch(`https://api.audioboom.com/channels/${idChannel}`),
    fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
  ])
  const dataChannel = await reqChannel.json()
  const dataClips = await reqClips.json()
  const channel = dataChannel.body.channel
  const clips = dataClips.body.audio_clips
  return { props: { channel, clips } }
}


export default channel