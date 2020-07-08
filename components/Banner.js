const Banner = (props) => {
  const { bannerImg, logoImg } = props
  return (
    <>
      <div className='bannerContainer'>
        {bannerImg ?
          <img className='bannerContainer__banner' src={bannerImg} alt="BannerChannel" />
          :
          <img className='bannerContainer__logo' src={logoImg} alt="BannerChannel" />}

      </div>

      <style jsx>{`
        .bannerContainer__banner{
          width:100%;
          max-height:200px;
        }
        .bannerContainer__logo{
          width:100%;
          max-height:200px;
          object-fit:cover;
        }
        `}</style>
    </>
  )
}

export default Banner