import React from 'react';
import Head from 'next/head';

const Info = (props) => (
  <div class="container">

      <div class="main-page">

        <a class="logo" href="/">CROSSFADEYT</a>

        <div class="top-nav">
          <a class="how-to-use" href="/how-to-use">HOW TO USE</a>
          <a class="info" href="/info">INFO</a>
        </div>

      </div>

      <h2>ABOUT THE SITE</h2>

      <div class="about">
        CrossFadeYT is meant to be a simple solution to a simple problem: play a selection of YouTube videos, one after the other, crossfading inbetween them.
        This code and the website is fully open source and available on GitHub for all to use, reuse, and modify
      </div>

      <div class="footer">
        Custom Crossfading Music Video Playlists on YouTube
        <a target="_blank" href="https://github.com/jcneally/CrossfadeYT">
        <img src="./gh.png" class="gh-img"/>
      </a>
      </div>

    </div>
)

Info.getInitialProps = async ({ req }) => {
  return {};
}

export default Info;