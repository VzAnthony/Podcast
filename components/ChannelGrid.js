import Link from 'next/link'
import slug from '../helpers/slug';

const ChannelGrid = (props) => {
  const { channels } = props
  return (
    <>
      <div className="channelList">
        {channels.map((channel, index) => (
          < Link href={'/[id]'} as={`${slug(channel.title)}.${channel.id}`} key={index}>
            <a className="channelList__item">
              <div className="chanelList__item--imgContainer">
                <img src={channel.urls.logo_image.original} alt="" />
              </div>
              <p className="channelList__item--title">{channel.title}</p>
            </a>
          </Link>
        ))}
      </div>

      <style jsx>{`
    .channelList {
      display:grid;
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
      grid-gap: 30px;
      padding: 15px;
    }
    .channelList__item{
      display:grid;
      text-decoration:none;
      background-color:#ffffff;
      border: 1px solid #84a9ac;
      border-radius:15px;
      -webkit-box-shadow: 0px 4px 8px 0px rgba(132,169,172,1);
      -moz-box-shadow: 0px 4px 8px 0px rgba(132,169,172,1);
      box-shadow: 0px 4px 8px 0px rgba(132,169,172,1);
    }
    .channelList__item:hover{
      text-decoration:underline;
    }
    .chanelList__item--imgContainer img{
      width:100%;
      border-bottom:1px solid #84a9ac;
      border-top-left-radius:15px;
      border-top-right-radius:15px;
    }
    .channelList__item--title {
      text-align: center;
      color:black;
    }
    `}</style>
    </>
  )
}

export default ChannelGrid