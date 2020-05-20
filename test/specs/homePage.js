describe('crossfadeYT Music Video', function(){
  it('should click on crossfade logo to return home page', function(){
    const crossHomePage = require('./crossHomePage'); //importing Page Objects

    const crossfadeYT = new crossHomePage();

    crossfadeYT.open();
    crossfadeYT.logo_page();

    browser.url('http://localhost:3000/');
    expect(browser).toHaveUrl('http://localhost:3000/');

  })
})

