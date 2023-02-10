function Ani() {
    return (
        <div className="pt-12 lg:pt-24">
            <video
                className="border-0"
                autoPlay
                loop
                muted
                x5-playsinline
                playsInline
                webkit-playsinline
                x-webkit-airplay
                x5-video-player-fullscreen
                x5-video-player-type="h5"
            >
                <source src="https://assets.monarch.one/videos/logo1536.mp4?v=2" type="video/mp4" />
            </video>
        </div>
    )
}

export default Ani;
