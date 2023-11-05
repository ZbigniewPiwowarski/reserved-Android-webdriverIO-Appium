import CommonPage from "../pageobjects/common.page.ts";
import ProfilePage from "../pageobjects/profile.page.ts";
const commonPage = new CommonPage();

describe("Test profile screen", () => {
  before(async () => {
    await commonPage.tapPolandRegion();
    await commonPage.tapNavbarProfile();
  });

  afterEach(async () => {
    await browser.back();
  });

  it("should test zaloz konto button", async () => {
    await commonPage.tapZalozKontoButton();
    await commonPage.verifyZalozKontoButtonDisplayed();
    await ProfilePage.verifyEmailAddressTextDisplayed();
    await browser.back();
  });

  it("should test zaloguj button", async () => {
    await commonPage.tapZalogujButton();
    await commonPage.verifyZalogujButtonDisplayed();
    await ProfilePage.verifyEmailAddressTextDisplayed();
  });

  it("should test ustawienia apliakcji button", async () => {
    await ProfilePage.tapUstawieniaAplikacjiButton();
    await ProfilePage.verifyPowiadomieniaZgodyTextDisplayed();
  });

  it("should test ocen aplikacje button", async () => {
    await ProfilePage.tapOcenAplikacjeButton();
    await ProfilePage.verifyJakOceniaszAplikacjeTextDisplayed();
  });

  it("should test pomoc i kontakt button", async () => {
    await ProfilePage.tapPomocButton();
    await ProfilePage.verifyJakMozemyPomocTextDisplayed();
  });

  it("should test informacje prawne button", async () => {
    await ProfilePage.tapInformacjePrawneButton();
    await ProfilePage.verifyPolitykaPrywatnosciTextDisplayed();
  });
});
