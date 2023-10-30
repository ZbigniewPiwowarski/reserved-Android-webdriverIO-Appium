import { expect } from "@wdio/globals";
import SearchPage from "../pageobjects/search.page.ts";
import CommonPage from "../pageobjects/common.page.ts";
//const CommonPage = require("../pageobjects/common.page.ts");
const commonPage = new CommonPage();

describe("Test search screen", () => {
  before(async () => {
    await commonPage.tapPolandRegion();
    await commonPage.tapNavbarSearch();
  });

  describe("Test side tabs", () => {
    afterEach(async () => {
      await SearchPage.tapBackArrow();
    });

    it("should test kobieta side tab", async () => {
      await SearchPage.tapSearchTabKobietaSideMenu();

      await SearchPage.verifyKobietaTitleDisplayed();
      await SearchPage.verifyFiltrujButtonDisplayed();
    });

    it("should test mężczyzna side tab", async () => {
      await SearchPage.tapSearchTabMezczyznaSideMenu();

      await SearchPage.verifyMezczyznaTitleDisplayed();
      await SearchPage.verifyFiltrujButtonDisplayed();
    });

    it("should test dziewczynka side tab", async () => {
      await SearchPage.tapSearchTabDziewczynkaSideMenu();

      await SearchPage.verifyDziewczynkaTitleDisplayed();
      await SearchPage.verifyFiltrujButtonDisplayed();
    });

    it("should test chłopiec side tab", async () => {
      await SearchPage.tapSearchTabChlopiecSideMenu();

      await SearchPage.verifyChlopiecTitleDisplayed();
      await SearchPage.verifyFiltrujButtonDisplayed();
    });

    it("should test home side tab", async () => {
      await SearchPage.tapSearchTabHomeSideMenu();

      await SearchPage.verifyHomeTitleDisplayed();
      await SearchPage.verifyFiltrujButtonDisplayed();
    });
  });

  describe("Test upper tabs", () => {
    it("should test kobieta upper tab", async () => {
      await SearchPage.tapSearchTabKobietaUpperMenu();

      await SearchPage.verifyBieliznaDisplayed();
    });

    it("should test mężczyzna upper tab", async () => {
      await SearchPage.tapSearchTabMezczyznaUpperMenu();

      await SearchPage.verifyBieliznaAndAkcesoriaDisplayed;
    });

    it("should test dziewczynka upper tab", async () => {
      await SearchPage.tapSearchTabDziewczynkaUpperMenu();

      await SearchPage.verifyDziewczynka_1_5_YearsDisplayed();
    });
  });

  describe("Test search bar", () => {
    it("should test search bar with not existing phrase", async () => {
      await SearchPage.tapSearchBar();

      await commonPage.keys(["aaaaaaaaaaaaaaaa"]);
      await SearchPage.tapSzukajButton();
      await SearchPage.verifyProductsNotFoundDisplayed();

      await SearchPage.tapBackArrow();
      await SearchPage.searchBarClearValue();
    });

    it("should test search bar with existing phrase", async () => {
      await SearchPage.tapSearchBar();

      await commonPage.keys(["kurtka"]);
      await SearchPage.tapSzukajButton();
      await SearchPage.verifyFiltrujButtonDisplayed();
    });
  });
});
