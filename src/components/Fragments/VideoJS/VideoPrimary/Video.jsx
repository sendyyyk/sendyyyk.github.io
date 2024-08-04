import React, { Fragment, useEffect, useCallback, useState } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

class FullscreenButton extends videojs.getComponent('Button') {
  constructor(player, options) {
      super(player, options);
      this.controlText('Fullscreen');
      this.el_.className += ' vjs-fullscreen-button vjs-control';

      this.iconContainer = document.createElement('div');
      this.iconContainer.className = 'vjs-icon-placeholder';
      this.el_.appendChild(this.iconContainer);

      this.defaultIcon = `
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 2C2.89543 2 2 2.89543 2 4V8C2 8.55228 2.44772 9 3 9C3.55228 9 4 8.55228 4 8V4H8C8.55228 4 9 3.55228 9 3C9 2.44772 8.55228 2 8 2H4Z" fill="#fff"></path>
              <path d="M20 2C21.1046 2 22 2.89543 22 4V8C22 8.55228 21.5523 9 21 9C20.4477 9 20 8.55228 20 8V4H16C15.44772 4 15 3.55228 15 3C15 2.44772 15.4477 2 16 2H20Z" fill="#fff"></path>
              <path d="M20 22C21.1046 22 22 21.1046 22 20V16C22 15.4477 21.5523 15 21 15C20.4477 15 20 15.4477 20 16V20H16C15.4477 20 15 20.4477 15 21C15 21.5523 15.4477 22 16 22H20Z" fill="#fff"></path>
              <path d="M2 20C2 21.1046 2.89543 22 4 22H8C8.55228 22 9 21.5523 9 21C9 20.4477 8.55228 20 8 20H4V16C4 15.4477 3.55228 15 3 15C2.44772 15 2 15.4477 2 16V20Z" fill="#fff"></path>
          </svg>
      `;

      this.fullscreenIcon = `
          <svg width="100%" height="100%" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#fff" class="bi bi-fullscreen-exit" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z"></path> </g></svg>
      `;

      this.iconContainer.innerHTML = this.defaultIcon;
  }

  handleClick() {
      const videoElement = this.player_.el();
      const primaryMobileElement = document.querySelector('.vjs-primary-mobile');

      if (!document.fullscreenElement) {
          videoElement.requestFullscreen().then(() => {
              if (screen.orientation && screen.orientation.lock) {
                  screen.orientation.lock('landscape');
              }
              if (primaryMobileElement) {
                  primaryMobileElement.classList.add('fullscreen-active');
              }
              this.iconContainer.innerHTML = this.fullscreenIcon;
          }).catch(err => {
              console.error(`Error attempting to enable fullscreen mode: ${err.message}`);
          });
      } else {
          document.exitFullscreen().then(() => {
              if (screen.orientation && screen.orientation.unlock) {
                  screen.orientation.unlock();
              }
              if (primaryMobileElement) {
                  primaryMobileElement.classList.remove('fullscreen-active');
              }
              this.iconContainer.innerHTML = this.defaultIcon;
          }).catch(err => {
              console.error(`Error attempting to exit fullscreen mode: ${err.message}`);
          });
      }
  }

  buildCSSClass() {
      return `vjs-fullscreen-button ${super.buildCSSClass()}`;
  }
}

videojs.registerComponent('FullscreenButton', FullscreenButton);

// Custom Button Component
class ResizeButton extends videojs.getComponent('Button') {
    constructor(player, options) {
        super(player, options);
        this.controlText('Resize');
        this.el_.className += ' vjs-resize-button vjs-control';
    }

    handleClick() {
        const videoElement = document.querySelector("video");
      
        if (videoElement) {
            videoElement.classList.toggle('object-contain');
            videoElement.classList.toggle('!object-cover');
            
            const currentClass = videoElement.classList.contains('!object-cover') ? '!object-cover' : 'object-contain';
            sessionStorage.setItem('videoClass', currentClass);
        }
    }

    buildCSSClass() {
        return `vjs-resize-button ${super.buildCSSClass()}`;
    }
}

videojs.registerComponent('ResizeButton', ResizeButton);

class ElapsedTimeDisplay extends videojs.getComponent('Component') {
    constructor(player, options) {
        super(player, options);
        this.el_.className += ' vjs-elapsed-time vjs-time-control vjs-control';

        player.on('timeupdate', () => {
          this.updateElapsedTime();
        });

        player.on('loadedmetadata', () => {
          this.updateTotalDuration();
        });
    }

    updateElapsedTime() {
        const elapsedTime = this.player_.currentTime();
        const formattedTime = this.formatTime(elapsedTime);
        this.el_.innerHTML = `${formattedTime} / ${this.totalDuration || '0:00'}`;
    }

    updateTotalDuration() {
        const totalDuration = this.player_.duration();
        this.totalDuration = this.formatTime(totalDuration);
        this.updateElapsedTime();
    }

    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    createEl() {
        return videojs.dom.createEl('div', {
            className: 'vjs-elapsed-time vjs-control',
            innerHTML: '0:00 / 0:00'
        });
    }
}

videojs.registerComponent('ElapsedTimeDisplay', ElapsedTimeDisplay);

const VideoJSprimary = ({ src, poster, styleVideo, muted, loop, autoPlay }) => {
  const [player, setPlayer] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const initializePlayer = useCallback((node) => {
      if (node) {
          const playerInstance = videojs(node, {
              controls: true,
              autoplay: autoPlay,
              muted: muted,
              loop: loop,
              sources: [{ src: `${src}`, type: 'video/mp4' }],
              poster: `${poster}`,
          });

          playerInstance.ready(function() {
              const controlBar = playerInstance.getChild('controlBar');

              // Add Elapsed Time Display
              const elapsedTimeDisplay = controlBar.addChild('ElapsedTimeDisplay', {});
              controlBar.el().insertBefore(elapsedTimeDisplay.el(), controlBar.getChild('timeDivider').el().nextSibling);

              // Add Resize Button
              const resizeButton = controlBar.addChild('ResizeButton', {});
              controlBar.el().appendChild(resizeButton.el());

              // Add Fullscreen Button
              const fullscreenButton = controlBar.addChild('FullscreenButton', {});
              controlBar.el().appendChild(fullscreenButton.el());

              // Handle Fullscreen Change
              playerInstance.on('fullscreenchange', () => {
                  if (playerInstance.isFullscreen()) {
                      resizeButton.hide();
                  } else {
                      resizeButton.show();
                  }
              });
          });

          setPlayer(playerInstance);
      }
  }, [src, poster, autoPlay, muted, loop]);

  useEffect(() => {
      return () => {
          if (player) {
              player.dispose();
          }
      };
  }, [player]);

  useEffect(() => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileDevices = /iphone|ipod|ipad|android|blackberry|bb|playbook|windows phone|symbian|iemobile|mobile|tablet|kindle|silk|opera mini/i;
      setIsMobile(mobileDevices.test(userAgent));
  }, []);

  return (
      <Fragment>
          {!isMobile ? (
              <div className='vjs-primary w-full h-full'>
                  <div data-vjs-player className="w-full h-full object-cover">
                      <video ref={initializePlayer} className={`video-js ${styleVideo}`}></video>
                  </div>
              </div>
          ) : (
              <div className='vjs-primary-mobile vjs-primary-mobile w-full h-full'>
                  <div data-vjs-player className="w-full h-full object-cover">
                      <video ref={initializePlayer} className={`video-js ${styleVideo}`}></video>
                  </div>
              </div>
          )}
      </Fragment>
  );
};

export default VideoJSprimary;

