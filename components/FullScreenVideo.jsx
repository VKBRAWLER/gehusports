const FullScreenVideo = (params) => {
  return (
    <div className={params.type}><video src={params.link} autoPlay muted loop /></div>
  )
}

export default FullScreenVideo;