import SearchPage from "../pageobjects/search.page.ts";
import CommonPage from "../pageobjects/common.page.ts";
const commonPage = new CommonPage();

describe("Test search screen", () => {
  describe("Test side tabs", () => {
    before(async () => {
      await commonPage.tapPolandRegion();
      await commonPage.tapNavbarSearch();
    });

    afterEach(async () => {
      await SearchPage.tapBackArrow();
    });

    after(async () => {
      await commonPage.restartApp();
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
    before(async () => {
      await commonPage.tapPolandRegion();
      await commonPage.tapNavbarSearch();
    });

    after(async () => {
      await commonPage.restartApp();
    });

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
    before(async () => {
      await commonPage.tapPolandRegion();
      await commonPage.tapNavbarSearch();
    });

    after(async () => {
      await commonPage.restartApp();
    });

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

  describe("Test sorting", () => {
    before(async () => {
      await commonPage.tapPolandRegion();
      await commonPage.tapNavbarSearch();
    });

    after(async () => {
      await commonPage.restartApp();
    });

    it("should test sorting by cheapest price", async () => {
      await SearchPage.tapSearchTabKobietaSideMenu();
      await SearchPage.verifySortingFromLowestPrice();
    });

    it("should test sorting by most expensive price", async () => {
      await SearchPage.tapBackArrow();
      await SearchPage.tapSearchTabKobietaSideMenu();
      await SearchPage.verifySortingFromHighestPrice();
    });
  });

  describe("Test filter", () => {
    before(async () => {
      await commonPage.tapPolandRegion();
      await commonPage.tapNavbarSearch();
    });

    after(async () => {
      await commonPage.restartApp();
    });

    it("should test filtering by black color and L size", async () => {
      await SearchPage.tapSearchTabKobietaSideMenu();
      await SearchPage.tapFiltrujButton();

      await SearchPage.setFilterBlackColor();
      await SearchPage.setFilterSizeL();
      await SearchPage.tapPokazWszystkieProduktyButton();

      await SearchPage.tapFirstProductTile();
      await SearchPage.performSwipeDown(1, 2000);

      await SearchPage.verifyProductHasBlackColor();
      await SearchPage.verifyProductHasSizeL();
    });
  });
});
