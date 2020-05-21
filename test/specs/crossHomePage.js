const SELECTORS={
  logoButton: '.logo',
  howToButton: '.how-to-use',
  infoButton: '.info',
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

}

module.exports = crossHomePage;
