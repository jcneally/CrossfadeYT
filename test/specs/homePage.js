const crossHomePage = require('./crossHomePage'); //importing Page Objects

describe('CrossfadeYT test cases for navigating to other pages', function(){
  it('should click on crossfade logo to return home page', function(){

    const crossfadeYT = new crossHomePage();

    crossfadeYT.open(); //open crossfadeyt home page
    crossfadeYT.clickLogoButton(); //click on logo
    browser.switchWindow('http://localhost:3000/'); //switch to new home page
    expect(browser).toHaveUrl('http://localhost:3000/'); //check if it is on home page

  })
})

