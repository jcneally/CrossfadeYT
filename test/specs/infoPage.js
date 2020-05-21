const crossHomePage = require('./crossHomePage'); //importing Page Objects

describe('CrossfadeYT test cases for navigating to other pages', function(){
  it('should click on info button to return info page', function(){

    const crossfadeYT = new crossHomePage();

    crossfadeYT.open(); //open crossfadeyt home page
    crossfadeYT.clickInfoButton(); //click on info button
    browser.switchWindow('http://localhost:3000/info'); //switch to new info page
    expect(browser).toHaveUrl('http://localhost:3000/info'); //check if it is on info page

  })
})

