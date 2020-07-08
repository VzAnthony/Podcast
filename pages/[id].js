import Layout from '../components/Layout' //Elimintar console.log cuando temines aqui
import Banner from '../components/Banner'
import ClipGrid from '../components/ClipGrid'


const channel = (props) => {
  const { channel, clips } = props
  console.log(clips)
  return (
    <Layout title={channel.title}>
      <Banner bannerImg={channel.urls.banner_image.original} logoImg={channel.urls.logo_image.original} />
      <h1 className='titleChannel'>{channel.title}</h1>
      <ClipGrid clips={clips} />

      <style jsx>{`
        .titleChannel{
          text-align:center;
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