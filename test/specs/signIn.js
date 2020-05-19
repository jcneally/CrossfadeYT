describe('amazon.com sign in', function(){
	it('it should desmonstrate sign in action', function() {
		const AmazonHomepage = require('./AmazonHomepage');
		const amazonPage = new AmazonHomepage();

		amazonPage.open();
		amazonPage.signIn('put your email', 'put your password');
	})
})