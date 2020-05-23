const SELECTORS={
  logoButton: '.logo',
  howToButton: '.how-to-use',
  infoButton: '.info',
  addSongButton: '.main-button',
  idInput: '.song-id',
  startInput: '.start-time',
  endInput: '.end-time',
  addedSong: '.song-detail',
  removeButton: '.remove-song',
}

class crossHomePage{
  open(){
    browser.url('/');
  }

 getElement(selectorName) {
  return browser.$(SELECTORS[selectorName]);
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

removeSong(){
  const selectedSong = this.getElement('addedSong').click();
  //this.getElement('selectedSong').isSelected();
  this.getElement('removeButton').click();
}

}

module.exports = crossHomePage;
