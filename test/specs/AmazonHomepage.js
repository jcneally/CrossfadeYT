const SELECTORS = {
 menuButton: '#nav-hamburger-menu',
 searchInput: '#twotabsearchtextbox',
 searchBar: '#nav-search > form > div.nav-right > div > input',
 cart: '#nav-cart',
 accountLists: '#nav-link-accountList',
 signInButton: '#nav-flyout-ya-signin > a > span',
 email: '#ap_email',
 continueLogIn: '#continue',
 password: '#ap_password',
 signInSubmit: '#signInSubmit',
};

class AmazonHomepage {
 open() {
  browser.url('https://amazon.com');
 }

 // Take a selector name like ‘signIn’
 // and return the browser element
 getElement(selectorName) {
  return browser.$(SELECTORS[selectorName]);
 }

 // Click on menu button
 menu() {
  this.getElement('menuButton').click();
 }

 search(valueToSearch){
    const input = this.getElement('searchInput');

    input.setValue(valueToSearch);

    console.log(input.getValue());

    this.getElement('searchBar').click();
}

 cart(){
 	this.getElement('cart').click();

 }

 signIn(inputEmail, inputPassword){
 	this.getElement('accountLists').moveTo(); //to show account menu when it is hovering 
 	this.getElement('signInButton').click(); //clicking on sign in button

 	const addEmail = this.getElement('email'); 
 	addEmail.setValue(inputEmail); //adding email on login
 	console.log(addEmail.getValue());

 	this.getElement('continueLogIn').click(); //clicking on continue button

 	const addPassword = this.getElement('password');
 	addPassword.setValue(inputPassword); //adding password
 	console.log(addPassword.getValue());

 	this.getElement('signInSubmit').click(); //clicking on sign in button to acess account

 }

}

module.exports = AmazonHomepage;