describe('crossfadeYT Music Video', function(){
  it('should click on info button to return info page', function(){
    const crossHomePage = require('./crossHomePage'); //importing Page Objects

    const crossfadeYT = new crossHomePage();

    crossfadeYT.open();
    crossfadeYT.info_page();

    browser.url('http://localhost:3000/info');
    expect(browser).toHaveUrl('http://localhost:3000/info');

  })
})

