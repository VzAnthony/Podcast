import 'isomorphic-fetch';
import Layout from '../components/Layout'
import ChannelGrid from '../components/ChannelGrid'

const Home = (props) => {
  const { channels } = props
  return (
    <Layout title='Podcast'>
      <ChannelGrid channels={channels} />
    </Layout>
  )
}

export async function getServerSideProps({ res }) {
  try {
    const req = await fetch('https://api.audioboom.com/channels/recommended')
    const { body: channels } = await req.json()
    return { props: { channels, statusCode: 200 } }
  } catch (e) {
    res.statusCode = 503
    return { props: { channels: null, statusCode: 503 } }
  }
}

export default Home