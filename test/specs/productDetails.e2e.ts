import { expect } from "@wdio/globals";
import SearchPage from "../pageobjects/search.page.ts";
import CommonPage from "../pageobjects/common.page.ts";
import CartPage from "../pageobjects/cart.page.ts";
import ProductPage from "../pageobjects/product.page.ts";
const commonPage = new CommonPage();

describe("Test product details screen", () => {
  before(async () => {
    await commonPage.tapPolandRegion();
    await commonPage.tapNavbarSearch();
  });

  it("should go to product details screen", async () => {
    SearchPage.tapSearchTabKobietaSideMenu();
    SearchPage.tapFirstProductTile();
  });

  it("should test add to favorites button", async () => {
    await ProductPage.tapFavoriteIcon();
    await commonPage.verifyZalogujButtonDisplayed();
    await browser.back();
  });

  it("should test tap on cart icon", async () => {
    await ProductPage.tapCartIcon();
    await CartPage.verifyCartIsEmptyTextDisplayed();
  });
});
