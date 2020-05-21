describe('crossfadeYT Music Video', function(){
  it('should click on how to page button to return how to use page', function(){
    const crossHomePage = require('./crossHomePage'); //importing Page Objects

    const crossfadeYT = new crossHomePage();

    crossfadeYT.open();
    crossfadeYT.how_to_use_page();

    browser.url('http://localhost:3000/how-to-use');
    expect(browser).toHaveUrl('http://localhost:3000/how-to-use');

  })
})

