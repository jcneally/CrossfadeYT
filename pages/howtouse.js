import React from 'react';
import Head from 'next/head';

const HowToUse = (props) => (
  <div class="container">

      <div class="main-page">

        <a class="logo" href="/">CROSSFADEYT</a>

        <div class="top-nav">
        <a class="how-to-use" href="/how-to-use">HOW TO USE</a>
        <a class="info" href="/info">INFO</a>
        </div>

      </div>

      <h2>TIPS FOR MAKING PLAYLISTS</h2>
      <ul>
        <li><span style="color:#c63d3d">CrossFaderYT does not work in YouTube's native Fullscreen mode.</span> When viewing your created playlist, use your browser's fullscreen mode (F11 on Windows, View -> Fullscreen on Mac OSX)</li>
        <li>YouTube song IDs come from the end of URL of your video. <span style="color:#c63d3d">Use the Sample Playlist button to see how this works</span>. You can click on ID to open the video.</li>
        <li>Start time and end times are in <span style="color:#c63d3d">seconds</span>. Leave this blank to use the entire video.</li>
      </ul>

      <div class="footer">
        Custom Crossfading Music Video Playlists on YouTube
        <a target="_blank" href="https://github.com/jcneally/CrossfadeYT">
        <img src="./gh.png" class="gh-img"/>
        </a>
      </div>

    </div>
)

HowToUse.getInitialProps = async ({ req }) => {
  return {};
}

export default HowToUse;