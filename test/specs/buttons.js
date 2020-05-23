const crossHomePage = require('./crossHomePage'); //importing Page Objects

describe('CrossfadeYT test cases for adding and removing songs', function(){
  it('should add a song when clicking on add song button', function(){
    const crossfadeYT = new crossHomePage();

    crossfadeYT.open(); //open crossfadeyt home page
    crossfadeYT.addSong('rYEDA3JcQqw', '10', '100'); //add a song

    const addedSong = $('.song-detail');
    expect(addedSong).toBeDisplayed(); //check if a song is added
  })

  it('should remove a song when clicking on remove song button', function(){
    const crossfadeYT = new crossHomePage();

    crossfadeYT.open(); //open crossfadeyt home page
    crossfadeYT.addSong('rYEDA3JcQqw', '10', '100'); //add a song
    crossfadeYT.removeSong(); //remove a song

    const selectedSong = $('.song-detail');
    expect(selectedSong).not.toBeDisplayed(); //check if a song is removed
  })


})

