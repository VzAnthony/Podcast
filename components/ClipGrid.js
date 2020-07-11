import { useState } from 'react'
import PodcastMedia from '../components/PodcastMedia'

const ClipGrid = (props) => {
  const { clips } = props
  const [modal, setModal] = useState({ open: false })

  const handleClick = (podcast) => {
    setModal({ open: true, podcast })
  }

  return <ul className='clipList'>
    {modal.open && <PodcastMedia modal={modal} setModal={setModal} />}
    {clips.map((clip, index) => (
      <li className='clipList__item' onClick={() => handleClick(clip)} key={index}>
        {clip.urls.image ?
          <img src={clip.urls.image} alt="ImagenPodcast" />
          :
          <img src={clip.channel.urls.logo_image.original} alt="ImagenPodcast" />
        }
        <p className='clipList__item__title'>{clip.title}</p>
        <p className='clipList__item__play'>Play</p>
      </li>
    ))}


    <style jsx>{`
      .clipList{
        display:grid;
        height: 100vh;
        justify-content:center;
        grid-template-columns: minmax(200px, 800px);
        grid-template-rows: repeat(auto-fit, 80px );
        grid-auto-rows: 80px;
        padding:0;
      }
      .clipList__item{
        display:grid;
        grid-template-columns:1fr 2fr .5fr;
        width:100%;
        height:100%;
        list-style: none;
        border:1px solid #84a9ac;
        background-color:#fff;
        cursor:pointer;
      }
      .clipList__item:hover{
        text-decoration:underline;
        background-color: rgb(32, 64, 81);
        color:#fff;
      }
      .clipList__item img{
        width:100%;
        height:100%;
        object-fit:cover;
      }
      .clipList__item__title{
        margin:0;
        align-self:center;
        text-align:center;
      }
      .clipList__item__play{
        margin:0;
        justify-self:center;
        align-self:center;
      }
      `}</style>


  </ul>
}

export default ClipGrid;