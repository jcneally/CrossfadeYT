const crossHomePage = require('./crossHomePage'); //importing Page Objects

describe('CrossfadeYT test cases for remove button', function(){
  it('should remove a song when clicking on remove song button', function(){
    const crossfadeYT = new crossHomePage();

    crossfadeYT.open(); //open crossfadeyt home page
    crossfadeYT.addSong('rYEDA3JcQqw', '10', '100'); //add a song
    crossfadeYT.removeSong(); //remove a song

    const listOfSongs = crossfadeYT.getElement('addedSongs');
    expect(listOfSongs.isDisplayed()).to.equal(false); //check if a song was removed
  })

  it('should remove the last song when clicking on remove song button', function(){
    const crossfadeYT = new crossHomePage();

    crossfadeYT.open(); //open crossfadeyt home page
    crossfadeYT.addSong(['rYEDA3JcQqw', '10', '100']); //add a song
    crossfadeYT.addSong('MSFjYe54uv4', '50', '100'); //add a song
    crossfadeYT.addSong('E07s5ZYygMg', '40', '120'); //add a song
    crossfadeYT.removeSong([2]); //remove the last song

    const indexOfLastSong = crossfadeYT.getSongAtIndex(2);
    expect(indexOfLastSong).to.be.undefined;
  })

  it('should remove the first song when clicking on remove song button', function(){
    const crossfadeYT = new crossHomePage();

    crossfadeYT.open(); //open crossfadeyt home page
    crossfadeYT.addSong('rYEDA3JcQqw', '10', '100'); //add a song
    crossfadeYT.addSong('MSFjYe54uv4', '50', '100'); //add a song
    crossfadeYT.addSong('E07s5ZYygMg', '40', '120'); //add a song

    crossfadeYT.removeSong(0); //remove the first song

    const allSongs = crossfadeYT.getElements('addedSongs')
    expect(allSongs).to.have.lengthOf(2);

    const songID_0 = crossfadeYT.getID(0);
    expect(songID_0).to.equal('MSFjYe54uv4')

    const songID_1 = crossfadeYT.getID(1);
    expect(songID_1).to.equal('E07s5ZYygMg')

  })

  it('should remove the middle song when clicking on remove song button', function(){
    const crossfadeYT = new crossHomePage();

    crossfadeYT.open(); //open crossfadeyt home page
    crossfadeYT.addSong('rYEDA3JcQqw', '10', '100'); //add a song
    crossfadeYT.addSong('MSFjYe54uv4', '50', '100'); //add a song
    crossfadeYT.addSong('E07s5ZYygMg', '40', '120'); //add a song
    crossfadeYT.removeSong(1); //remove the first song

    const allSongs = crossfadeYT.getElements('addedSongs')
    expect(allSongs).to.have.lengthOf(2);

    const songID_0 = crossfadeYT.getID(0);
    expect(songID_0).to.equal('rYEDA3JcQqw')

    const songID_1 = crossfadeYT.getID(1);
    expect(songID_1).to.equal('E07s5ZYygMg')
  })

  it('shouldnt remove when there are no songs', function(){
    const crossfadeYT = new crossHomePage();

    crossfadeYT.open(); //open crossfadeyt home page
    crossfadeYT.getElement('removeButton').click(); //remove a song

    const listOfSongs = crossfadeYT.getElement('addedSongs');
    expect(listOfSongs.isDisplayed()).to.equal(false);
  })

  it('should remove multiple songs', function(){
    const crossfadeYT = new crossHomePage();

    crossfadeYT.open(); //open crossfadeyt home page
    crossfadeYT.addSong('rYEDA3JcQqw', '10', '100'); //add a song
    crossfadeYT.addSong('MSFjYe54uv4', '50', '100'); //add a song
    crossfadeYT.addSong('E07s5ZYygMg', '40', '120'); //add a song
    crossfadeYT.removeSong(0); //remove the first song
    crossfadeYT.removeSong(1);

    const listOfSongs = crossfadeYT.getElements('addedSongs')
    expect(listOfSongs).to.have.lengthOf(1);
  })

  //FUTURE FEATURE: CROSS-21
  it.skip('should remove multiple songs at once', function(){
    const crossfadeYT = new crossHomePage();

    crossfadeYT.open(); //open crossfadeyt home page
    crossfadeYT.addSong('rYEDA3JcQqw', '10', '100'); //add a song
    crossfadeYT.addSong('MSFjYe54uv4', '50', '100'); //add a song
    crossfadeYT.addSong('E07s5ZYygMg', '40', '120'); //add a song
    crossfadeYT.removeSong([0,1,2]); //remove all songs at once

    const listOfSongs = crossfadeYT.getElement('addedSongs');
    expect(listOfSongs.isDisplayed()).to.equal(false);
  })

})

