const crossHomePage = require('./crossHomePage'); //importing Page Objects

describe('CrossfadeYT test cases for navigating to other pages', function(){
  it('should click on how to page button to return how to use page', function(){

    const crossfadeYT = new crossHomePage();

    crossfadeYT.open(); //open crossfadeyt home page
    crossfadeYT.clickHowToUseButton(); //click on how to use button
    browser.switchWindow('http://localhost:3000/how-to-use'); //switch to new how to use page
    expect(browser).toHaveUrl('http://localhost:3000/how-to-use'); //check if it is on how to use page

  })
})

