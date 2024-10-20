import React from 'react';

const Header = () => {
    return (
        <header id="video-area" className="header" style={{ margin: 0, padding: 0 }}>
            <div className="ruby-container">
                <div className="video-fullscreen-wrap" style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
                    <div className="video-fullscreen-video" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                        <video
                            playsInline
                            autoPlay
                            loop
                            muted
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        >
                            <source src="./img/acceuil.mp4" type="video/mp4" />
                            <source src="/videos/video.webm" type="video/webm" />
                        </video>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
