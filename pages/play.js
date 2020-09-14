import React, { useEffect } from 'react';
import Head from 'next/head';

function Play(props) {
  
  useEffect(() => {
    // When debug is on, the videos appear stacked instead of on top of eachother, for easier viewing of the transitions
    const DEBUG = false;

    const urlParams = new URLSearchParams(window.location.search);
    const storedPlaylist = urlParams.get('songList');
    let songs;
    if (storedPlaylist) {
      songs = JSON.parse(storedPlaylist);
    }

    const fadeOutDuration = 10;
    let currentSong = 0;
    const videoPlayers = [];
    const playerStyle = (DEBUG) ? '' : `style="position: absolute;left:0;"`;

    // create the divs for the iframes
    for(let j = 0; j < songs.length; j++) {
      $('body').append(`<div id="player${j}" ${playerStyle}></div>`);
    }

    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    // var player;
    function onYouTubeIframeAPIReady() {
      // Instantiate the first two songs
      instantiateYTPlayer(0);
      instantiateYTPlayer(1);

      // Main loop for switching songs
      setInterval(checkPlayerStatus, 1000);
    }

    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

    function instantiateYTPlayer(songIndex) {
      // hit end of song list
      if (!songs[songIndex]) {
        return;
      }

      var events = {
        'onReady': function(event) {
          event.target.setPlaybackQuality('hd720');
        }
      };
      if (songIndex == 0) {
        events = {
          'onReady': function(event) {
            event.target.setPlaybackQuality('highres');
            startVideo(event.target, songs[0].startTime, false);
            fadeIn(event.target);
            $(event.target.getIframe()).css('z-index', 100);
          }
        }
      }

      const newPlayer = new YT.Player(`player${songIndex}`, {
        height: '100%',
        width: '100%',
        videoId: songs[songIndex].id,
        vq: 'hd720',
        playerVars: {
          'rel': 0
        },
        events
      });
      videoPlayers.push(newPlayer);
    }

    function checkPlayerStatus() {
      const currentPlayer = videoPlayers[currentSong];
      if (!currentPlayer || !(typeof currentPlayer.getDuration === 'function')) {
        return;
      }

      const songDuration = currentPlayer.getDuration();
      const currentTime = currentPlayer.getCurrentTime();

      // Extra 20 seconds is to avoid the annoying recommended video UI they show at the end
      const endOfSong = songDuration - fadeOutDuration - 20;
      if (songs[currentSong].endTime) {
        endOfSong = songs[currentSong].endTime - fadeOutDuration;
      }

      // console.log('current time ' + currentTime);
      // console.log('ending at ' + endOfSong);

      if (currentTime >= endOfSong) {
        fadeBetweenPlayers(currentPlayer, videoPlayers[currentSong + 1]);
      }
    }

    function fadeBetweenPlayers(player1, player2) {
      const loadDelay = 3000; // Autoplaying a video will load it, doesn't happen instantly
      // We want to start the new song so it will load, but delay the fade in until it's loaded enough
      currentSong++;

      // Instantiate the video coming up next
      instantiateYTPlayer(currentSong + 1);

      // Start video for the next song
      startVideo(player2, songs[currentSong].startTime);
      $(player1.getIframe()).css('z-index', 0);
      $(player2.getIframe()).css('z-index', 100);

      // Lower the quality of current video because of double videos playing
      player1.setPlaybackQuality('hd720');

      setTimeout(function() {
        fadeIn(player2);
        fadeOut(player1);

        setTimeout(function() {
          stopVideo(player1);
        }, fadeOutDuration * 1000);
      }, loadDelay);
    }

    function fadeOutAudio(player) {
      const fadeoutTimer = function() {
        const currentVolume = player.getVolume();
        if (!player || currentVolume <= 0) {
          console.log('done fading audio');
          return;
        } else {
          player.setVolume(currentVolume - 1);
          setTimeout(fadeoutTimer, 100);
        }
      };
      fadeoutTimer();
    }

    function fadeInAudio(player) {
      const fadeinTimer = function() {
        const currentVolume = player.getVolume();
        if (!player || currentVolume >= 100) {
          console.log('done fading audio');
          player.setPlaybackQuality('hd1080');
          return;
        } else {
          player.setVolume(currentVolume + 1);
          setTimeout(fadeinTimer, 100);
        }
      };
      fadeinTimer();
    }

    function stopVideo(player) {
      player.stopVideo();
      //$(player.getIframe()).remove();
      // There is an error if you try to remove the element.
    }

    function startVideo(player, seconds, setVolume = true) {
      if (seconds) {
        player.seekTo(seconds);
      } else {
        player.playVideo();
      }

      if (setVolume) {
        // Set starting video audio volume to 0
        player.setVolume(0);
      }
    }

    function fadeIn(player) {
      $(player.getIframe()).addClass('fadeIn');
      fadeInAudio(player);
    }
    function fadeOut(player) {
      $(player.getIframe()).addClass('fadeOut');
      fadeOutAudio(player);
    }
  }, []);

  return (
    <>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <div id="player"></div>
  </>);
};

Play.getInitialProps = async ({ req }) => {
  return {};
}

export default Play;