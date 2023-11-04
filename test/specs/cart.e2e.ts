import { expect } from "@wdio/globals";
import SearchPage from "../pageobjects/search.page.ts";
import CommonPage from "../pageobjects/common.page.ts";
import CartPage from "../pageobjects/cart.page.ts";
import ProductPage from "../pageobjects/product.page.ts";
const commonPage = new CommonPage();

describe("Test cart screen", () => {
  describe("Test cart adding product", () => {
    before(async () => {
      await commonPage.tapPolandRegion();
      await commonPage.tapNavbarCart();
    });

    after(async () => {
      await commonPage.restartApp();
    });

    it("should test empty cart", async () => {
      await CartPage.verifyCartIsEmptyTextDisplayed();

      await CartPage.tapPrzegladajProduktyButton();
      await SearchPage.verifySearchBarDisplayed();
    });

    it("should add any product to cart", async () => {
      await SearchPage.tapSearchTabKobietaSideMenu();

      await SearchPage.tapFiltrujButton();
      await SearchPage.setFilterSizeL();
      await SearchPage.tapPokazWszystkieProduktyButton();
      await SearchPage.tapFirstProductTile();
      await SearchPage.performSwipeDown(1, 2000);

      await SearchPage.tapRozmiarLButton();

      await ProductPage.tapAddToCartButton();
      await commonPage.restartApp();

      await commonPage.taNavbarCartActive();
      await CartPage.verifyDoKasyButtonDisplayed();
    });

    it("should test doubling product in cart doubles price", async () => {
      await CartPage.checkIfDoublingProductDoublesPrice();
    });

    it("should test tap on 'Do kasy' button", async () => {
      await CartPage.tapDoKasyButton();
      await commonPage.verifyZalogujButtonDisplayed();

      await browser.back();
    });

    it("should test move product to favorites from cart", async () => {
      await CartPage.tapThreeDotsButton();
      await CartPage.tapPrzeniesButton();

      await commonPage.verifyZalogujButtonDisplayed();
      await browser.back();
    });

    it("should test delete product from cart", async () => {
      await CartPage.tapThreeDotsButton();
      await CartPage.tapUsunButton();

      await CartPage.verifyCartIsEmptyTextDisplayed();
    });
  });
});
