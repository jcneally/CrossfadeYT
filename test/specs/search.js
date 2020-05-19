/* PAGE OBJECTS EXAMPLE

const SELECTORS = {
 signInButton: '#sign-in',
 menuButton: '#menu',
 searchInput: '#twotabsearchtextbox',
 searchBar: '#nav-search > form > div.nav-right > div > input',
};

class AmazonHomepage {
 open() {
  browser.url('https://amazon.com');
 }

 // Take a selector name like ‘signInButton’
 // and return the browser element
 getElement(selectorName) {
  return browser.$(SELECTORS[selectorName]);
 }

 // Click the sign in button
 signIn() {
  this.getElement('signInButton').click();
 }

 search(valueToSearch){
    const input = this.getElement('searchInput')

    input.setValue(valueToSearch)

    console.log(input.getValue())

    this.getElement('searchBar').click();
} 

}*/

describe('amazon.com menu', function() {
    it('search with pageObjects', function() {
    //const amazonPage = new AmazonHomepage() //page objects example

    const AmazonHomepage = require('./AmazonHomepage'); //import_export example
    
    const amazonPage = new AmazonHomepage();

    amazonPage.open()
    browser.pause(2000)
    
    amazonPage.search('the handmaids tale')
    
    const searchPage = browser.$('#search')

    //to make sure it checks for results
    expect(searchPage).toBeVisible()


    })

    //it('search for something and make sure it checks for results', function() {
    //to open the site
    //browser.url('https://amazon.com')

    //const input = $('#twotabsearchtextbox')

    //to set a value test
    //input.setValue('the handmaids tale')

    //console.log(input.getValue())

    //const searchbar = browser.$('#nav-search > form > div.nav-right > div > input')

    //to click to search
    //searchbar.click()



  //})
})