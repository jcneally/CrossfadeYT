const SELECTORS={
  logoLink: 'body > div > div.main-page > div.left-side > a',
  howToLink: 'body > div > div.main-page > div.right-side > div.top-nav > a.how-to-use',
  infoLink: 'body > div > div.main-page > div.right-side > div.top-nav > a.info',
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
