const crossHomePage = require('./crossHomePage'); //importing Page Objects

describe('CrossfadeYT test cases for add song button', function(){

  it('should add a song when clicking on add song button', function(){
    const crossfadeYT = new crossHomePage();

    crossfadeYT.open(); //open crossfadeyt home page
    crossfadeYT.addSong('rYEDA3JcQqw', '10', '100'); //add a song
    const indexOfSong = crossfadeYT.songIndex(0); //take the positon of first song
    expect(indexOfSong).to.equal('1') //make sure the song #0 is at index 0
    //check specifically if it will say exactly the index is 0 when expecting 0

  })

  it('should add multiple songs when clicking on add song button', function(){
    const crossfadeYT = new crossHomePage();

    crossfadeYT.open(); //open crossfadeyt home page

    crossfadeYT.addSong('rYEDA3JcQqw', '10', '80'); //add a song
    const indexOfSong0 = crossfadeYT.songIndex(0);
    expect(indexOfSong0).to.equal('1');

    crossfadeYT.addSong('MSFjYe54uv4', '50', '100'); //add a song
    const indexOfSong1 = crossfadeYT.songIndex(1);
    expect(indexOfSong1).to.equal('2');

    crossfadeYT.addSong('E07s5ZYygMg', '40', '120'); //add a song
    const indexOfSong2 = crossfadeYT.songIndex(2);
    expect(indexOfSong2).to.equal('3');

  })

  // DEFECT: CROSS-18
  it.skip('shouldnt add a song when adding spaces in the boxes', function(){
    const crossfadeYT = new crossHomePage();

    crossfadeYT.open(); //open crossfadeyt home page
    crossfadeYT.addSong(' ', ' ', ' '); //adding spaces

    const indexOfSong0 = crossfadeYT.getSongAtIndex(0); //get the element in first position
    expect(indexOfSong0.isDisplayed()).to.equal(false);
  })

  it('shouldnt add a song when nothing is input in the boxes', function(){
    const crossfadeYT = new crossHomePage();

    crossfadeYT.open(); //open crossfadeyt home page
    crossfadeYT.addSong('', '', ''); //add nothing

    const indexOfSong0 = crossfadeYT.getElement('addedSongs'); //get the element in first position
    expect(indexOfSong0.isDisplayed()).to.equal(false);

  })

  it('should add a song when nothing is in the start/end', function(){
    const crossfadeYT = new crossHomePage();

    crossfadeYT.open(); //open crossfadeyt home page
    crossfadeYT.addSong('MSFjYe54uv4', '', ''); //add only id

    const indexOfSong0 = crossfadeYT.songIndex(0);
    expect(indexOfSong0).to.equal('1');

  })

  //DEFECT: CROSS-19
  it.skip('shouldnt add a song when the start is not a number', function(){
    const crossfadeYT = new crossHomePage();

    crossfadeYT.open(); //open crossfadeyt home page
    crossfadeYT.addSong('MSFjYe54uv4', 'abc', '');

    const indexOfSong0 = crossfadeYT.getElement('addedSongs');
    expect(indexOfSong0.isDisplayed()).to.equal(false);

  })

  //DEFECT: CROSS-20
  it.skip('shouldnt add a song when the end is not a number', function(){
    const crossfadeYT = new crossHomePage();

    crossfadeYT.open(); //open crossfadeyt home page
    crossfadeYT.addSong('MSFjYe54uv4', '', 'abc');

    const indexOfSong0 = crossfadeYT.getElement('addedSongs');
    expect(indexOfSong0.isDisplayed()).to.equal(false);

  })


})

