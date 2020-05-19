/* PAGE OBJECTS EXAMPLE

const SELECTORS = {
 signInButton: '#sign-in',
 menuButton: '#nav-hamburger-menu',
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

 // Click on menu button
 menu() {
  this.getElement('menuButton').click();
 }

} */

describe('amazon.com menu', function() {
    it('make sure menu is visible', function(){
        //const amazonPage = new AmazonHomepage() //page objects example

        const AmazonHomepage = require('./AmazonHomepage'); //import_export

        const amazonPage = new AmazonHomepage();

        amazonPage.open(); //to open amazon website
        amazonPage.menu(); //to click on menu button

        const menuVisible = browser.$('#hmenu-content > ul.hmenu.hmenu-visible');

        //to show menu
        expect(menuVisible).toBeVisible();

    })
  //it('clicking the menu button should open the menu', function() {
    //to open the site
    //browser.url('https://amazon.com')
    //browser.pause(5000)
    //const menu_hamburger_button = browser.$('#nav-hamburger-menu')
    //to click on menu button
    //menu_hamburger_button.click() 
    //expect(menu_hamburger_button).toBeVisible()
    //const menu_visible = browser.$('#hmenu-content > ul.hmenu.hmenu-visible')
    //browser.pause(10000)
    //to check the menu is visible
    //expect(menu_visible).toBeVisible()
  //})
})