const SELECTORS={
  logoLink: '.logo',
  howToLink: '.how-to-use',
  infoLink: '.info',
}

class crossHomePage{
  open(){
    browser.url('http://localhost:3000/');
  }

 getElement(selectorName) {
  return browser.$(SELECTORS[selectorName]);
 }

logo_page(){
  this.getElement('logoLink').click();
}

how_to_use_page(){
  this.getElement('howToLink').click();
}

info_page(){
  this.getElement('infoLink').click();
}

}

module.exports = crossHomePage;
