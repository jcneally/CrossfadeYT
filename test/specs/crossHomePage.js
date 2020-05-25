const SELECTORS={
  //key: value = key pair
  logoButton: '.logo',
  howToButton: '.how-to-use',
  infoButton: '.info',
  addSongButton: '.main-button',
  idInput: '.song-id',
  startInput: '.start-time',
  endInput: '.end-time',
  addedSongs: '.song-detail',
  removeButton: '.remove-song',
  songNumberInList: '.song_number',
  songID: '.song_id'
}

class crossHomePage{
  open(){
    browser.url('/');
  }

//Get a single element by the key from SELECTORS
getElement(selectorName) {
  return browser.$(SELECTORS[selectorName]);
}

//Get all elements in an array by the key from SELECTORS
getElements(selectorName){
  return browser.$$(SELECTORS[selectorName]);
}

//Get the song element at position (starts at 0)
getSongAtIndex(index) {
  return this.getElements('addedSongs')[index];
}

clickLogoButton(){
  this.getElement('logoButton').click();
}

clickHowToUseButton(){
  this.getElement('howToButton').click();
}

clickInfoButton(){
  this.getElement('infoButton').click();
}

addSong(youtubeID, start, end){
  const songInput = this.getElement('idInput');
  songInput.addValue(youtubeID);

  const startTime = this.getElement('startInput');
  startTime.addValue(start);

  const endTime = this.getElement('endInput');
  endTime.addValue(end);

  this.getElement('addSongButton').click();
}

//set index array a default parameter = 0, since 0 is the first song
removeSong(songIndexes = [0]){
  if (typeof(songIndexes) == 'number'){
    songIndexes = [songIndexes]
  }

  const myObj = this;

  songIndexes.forEach(function(index){
    myObj.getSongAtIndex(index).click();
  });

  this.getElement('removeButton').click();
}


songIndex(index){
  //get a song(all details) at position(index) e.g. song #5
  const songElement = this.getSongAtIndex(index);

  //search only in children of songElement for the element with the song number (#5)
  const songIndex = songElement.$(SELECTORS['songNumberInList']);

  //return the text with the number e.g. '5'
  return songIndex.getText();
}

getID(index){
  const songElement = this.getSongAtIndex(index);
  const song_ID = songElement.$(SELECTORS['songID']);
  return song_ID.getText();
}

}


module.exports = crossHomePage;
