const crossHomePage = require('./crossHomePage'); //importing Page Objects

describe('CrossfadeYT test cases for adding and removing songs', function(){
  it('should add a song when clicking on add song button', function(){
    const crossfadeYT = new crossHomePage();

    crossfadeYT.open();
    crossfadeYT.addSong('rYEDA3JcQqw', '10', '100');
    browser.pause(1000);

    const addedSong = $('.song-detail');
    expect(addedSong).toBeDisplayed();
  })

  it('should remove a song when clicking on remove song button', function(){
    const crossfadeYT = new crossHomePage();

    crossfadeYT.open();
    crossfadeYT.addSong('rYEDA3JcQqw', '10', '100');
    crossfadeYT.removeSong();

    const selectedSong = $('.song-detail');
    expect(selectedSong).not.toBeDisplayed();
  })


})

