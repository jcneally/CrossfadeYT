import React, { useState } from 'react';
import Head from 'next/head';
import samplePlaylist from '../src/lib/samplePlaylist';

export default function Home() {
  let startingSongs = [];
  if (typeof window !== 'undefined') {
    startingSongs = JSON.parse(window.localStorage.getItem('songList'));
  }

  const [songList, setSongList] = useState(startingSongs);
  const [songId, setSongId] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [selectedSongIndex, setSelectedSongIndex] = useState(null);

  const songDetail = (songDetail, index) => (
    <div className="song-detail" onClick={() => setSelectedSongIndex(index)}>
      <div className="songNav">
        <div className="song_item song_number"></div>
        <div className="song_item song_id"><a target="_blank" href="https://www.youtube.com/watch?v=${youtubeLink.id}">{songDetail.id}</a></div>
        <div className="song_item song_start">{songDetail.startTime}</div>
        <div className="song_item song_end">{songDetail.endTime}</div>
      </div>
    </div>);

  // add a song to push it onto that array and save the playlist
  function addSong(songDetail) {
    setSongList(songList.concat([songDetail]));
    savePlaylist(); //every time we add a song, we add it to our local list of songs
  }

  function removeButton() {
    //if you dont select any song, so the index isnt a integer, so you do anything, you dont remove anything
    if(typeof(selectedSongIndex) !== "number") {
      return;
    }

    //remove the song from the list
    songList.splice(selectedSongIndex, 1);
    savePlaylist();
    setSelectedSongIndex(null);
  }

  function removeAllButton() {
    //remove the song from the list
    setSongList([]);
    savePlaylist();
    setSelectedSongIndex(null);
  }

  function addSongButton() {
    //if you dont put type anything in id inbox, so it does nothing
    if(songId === ""){
      return;
    }
    //id: songID means at the key “id” put the value of the variable songID

    addSong({id: songId, startTime, endTime});
    setSongId('');
    setStartTime('');
    setEndTime('');
  }

  function savePlaylist() {
    window.localStorage.setItem('songList', JSON.stringify(songList));
  }

  function createSamplePlaylist() {
    setSongList(samplePlaylist);
    savePlaylist();
  }

  function createPlaylist() {
    window.location.href = `/play?songList=${JSON.stringify(songList)}`;
  }

  return (
    <div>
      <Head>
        <title>CrossfadeYT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <div className="main-page">
          <div className="left-side">
            <a className="logo" href="/" target="_blank">CROSSFADEYT</a>
            <div className="add-song-container">
              <button className="main-button add-song-button" onClick={addSongButton}>Add Song</button>
            </div>

            <div className="song-input">
              <input
                type="text"
                placeholder="YouTube Song ID"
                className="song-id"
                name="song-id"
                value={songId}
                onChange={(e) => setSongId(e.target.value)}
              />
              <input
                type="text"
                placeholder="Start Time (sec)"
                className="start-time"
                name="start-time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
              <input
                type="text"
                placeholder="End Time (sec)"
                className="end-time"
                name="end-time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>

            <div className="details">
              TOTAL: {songList.length}
            </div>
        </div>

          <div className="right-side">
            <div className="top-nav">
              <a className="how-to-use" href="/how-to-use" target="_blank">HOW TO USE</a>
              <a className="info" href="/info" target="_blank">INFO</a>
            </div>

            <div className="right-buttons">
              <button className="main-button create-button" onClick={createPlaylist}>Create Playlist</button>
              <button className="main-button remove-song" onClick={removeButton}>remove song</button>
              <button className="main-button sample-playlist-button" onClick={createSamplePlaylist}>Sample Playlist</button>
              <button className="main-button removeAll-button" onClick={removeAllButton}>Remove All Songs</button>
            </div>

            <div className="song-list-container">
              <div className="itemBar">
                <div className="item item_id">Youtube ID</div>
                <div className="item item_start">Start Time</div>
                <div className="item item_end">End Time</div>
              </div>
              <ul className="song-list">
                { songList.map((song, index) => (
                    <li key={song.id + index} className={`${selectedSongIndex === index ? 'selected' : ''}`}>
                    { songDetail(song, index) }
                    </li>
                  )) }
              </ul>
            </div>

          </div>

        </div>

        <div className="footer">
          Custom Crossfading Music Video Playlists on YouTube
          <a target="_blank" href="https://github.com/jcneally/CrossfadeYT">
            <img src="./gh.png" className="gh-img" />
          </a>
        </div>

      </div>
    </div>
  )
}
