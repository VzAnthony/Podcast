const PodcastMedia = (props) => {
  const { modal, setModal } = props

  const handleClickClose = () => {
    setModal({ open: false })
  }

  return <div className="modal">
    <button className='btn' onClick={handleClickClose} >{'<'} Volver</button>
    <div className="podcastContainer">
      <img src={modal.podcast.urls.image} alt="" />
      <p>{modal.podcast.title}</p>
      <audio src={modal.podcast.urls.high_mp3} controls autoplay></audio>
    </div>
    <style jsx>{`
        .btn{
          width:100px;
          height:50px;
          margin: 20px 0 20px 30px;
          font-size:15px;
          border:1px solid #e4e3e3;
          border-radius: 20px;
          background-color: #393e46;
          color:#fff;
          cursor:pointer;
        }
        .btn:hover{
          text-decoration:underline;
        }
        .modal{
          position:fixed;
          top:0;
          right:0;
          bottom:0;
          left:0;
          z-index:9;
          background-color:rgba(32, 64, 81, .7)
        }
        .podcastContainer{
          display:grid;
          justify-content:center;
          grid-template-columns: minmax(300px, 500px);
          grid-template-rows: 3fr .5fr .5fr;
        }
        .podcastContainer img{
          width:100%;
        }
        .podcastContainer p{
          text-align:center;
          color:white;
          font-size:30px;
        }
        .podcastContainer audio{
          width:100%;
        }
      `}</style>
  </div>
}

export default PodcastMedia