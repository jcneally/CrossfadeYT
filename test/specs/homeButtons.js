const crossHomePage = require('./crossHomePage'); //importing Page Objects

describe('CrossfadeYT test cases for navigating to other pages', function(){
  it('should click on crossfade logo to return home page', function(){

    const crossfadeYT = new crossHomePage();

    crossfadeYT.open(); //open crossfadeyt home page
    crossfadeYT.clickLogoButton(); //click on logo
    browser.switchWindow('http://localhost:3000/'); //switch to new home page
    expect(browser.getUrl()).to.equal('http://localhost:3000/'); //check if it is on home page

  })

  it('should click on how to page button to return how to use page', function(){

    const crossfadeYT = new crossHomePage();

    crossfadeYT.open(); //open crossfadeyt home page
    crossfadeYT.clickHowToUseButton(); //click on how to use button
    browser.switchWindow('http://localhost:3000/how-to-use'); //switch to new how to use page
    expect(browser.getUrl()).to.equal('http://localhost:3000/how-to-use'); //check if it is on how to use page

  })

  it('should click on info button to return info page', function(){

    const crossfadeYT = new crossHomePage();

    crossfadeYT.open(); //open crossfadeyt home page
    crossfadeYT.clickInfoButton(); //click on info button
    browser.switchWindow('http://localhost:3000/info'); //switch to new info page
    expect(browser.getUrl()).to.equal('http://localhost:3000/info'); //check if it is on info page

  })

})

