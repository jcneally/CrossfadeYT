describe('amazon.com cart', function() {
  it('should demonstrate the cart click command', function() {
  	const AmazonHomepage = require('./AmazonHomepage');

  	const amazonPage = new AmazonHomepage();

  	amazonPage.open();
  	amazonPage.cart();

  	browser.url('https://www.amazon.com/gp/cart/view.html?ref_=nav_cart');
    expect(browser).toHaveUrl('https://www.amazon.com/gp/cart/view.html?ref_=nav_cart');

  })
})