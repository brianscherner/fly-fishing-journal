import React from 'react';

function WelcomeVideo() {
  return (
    <div className='welcome-video-bg'>
      <video className='welcome-video' autoPlay loop muted>
        <source src="/videos/cast-tracker-welcome-vid.mp4" type='video/mp4'/>
      </video>
    </div>
  );
}

export default WelcomeVideo;