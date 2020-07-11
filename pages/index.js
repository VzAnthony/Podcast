import 'isomorphic-fetch';
import Layout from '../components/Layout'
import ChannelGrid from '../components/ChannelGrid'
import Error from './_error'

const Home = (props) => {
  const { channels, statusCode } = props
  if (statusCode !== 200) {
    return <Error statusCode={statusCode} />
  }
  return (
    <Layout title='Podcast'>
      <ChannelGrid channels={channels} />
    </Layout>
  )
}

export async function getServerSideProps({ res }) {
  try {
    const req = await fetch('https://api.audioboom.com/channels/recommended')
    if (req.status >= 400) {
      res.estatusCode = req.status
      return { props: { channels: null, statusCode: req.status } }
    }
    const { body: channels } = await req.json()
    return { props: { channels, statusCode: 200 } }
  } catch (e) {
    res.statusCode = 503
    return { props: { channels: null, statusCode: 503 } }
  }
}

export default Home