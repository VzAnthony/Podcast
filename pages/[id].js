import 'isomorphic-fetch';

const channel = (props) => {
  console.log(props.idChannel)
  return <h1>Channel</h1>
}


export async function getServerSideProps({ params }) {
  const idChannel = params
  // const req = await fetch(`https://api.audioboom.com/channels/${idChannel}`)
  // const dataChannel = await req.json();
  // const channel = dataChannel.body.channel
  return { props: { idChannel } }
}

export default channel