import { $ } from "@wdio/globals";
import CommonPage from "./common.page.js";
import { expect } from "chai";

class CartPage extends CommonPage {
  private get yourCartIsEmptyText() {
    return $("//android.widget.TextView[@text='Twój koszyk jest pusty']");
  }

  private get przegladajProduktyButton() {
    return $("//android.widget.TextView[@text='Przeglądaj produkty']");
  }

  private get doKasyButton() {
    return $("//android.widget.TextView[contains(@text, 'Do kasy')]");
  }

  private get selectListOption1() {
    return $("//android.widget.TextView[@text='1']");
  }

  private get selectListOption2() {
    return $("//android.widget.Button[@text='2']");
  }
  private get okButton() {
    return $("//android.view.View[@index='3']");
  }

  private get threeDotsButton() {
    return $("//android.widget.Button[@index='3']");
  }

  private get usunButton() {
    return $("//android.widget.TextView[@text='Usuń']");
  }

  private get przeniesButton() {
    return $("//android.widget.TextView[@text='Przenieś']");
  }

  public async tapPrzegladajProduktyButton() {
    await this.przegladajProduktyButton.click();
  }

  public async tapDoKasyButton() {
    await this.doKasyButton.click();
  }

  public async tapSelectListOption1() {
    await this.selectListOption1.click();
  }

  public async tapSelectListOption2() {
    await this.selectListOption2.click();
  }

  public async tapOkButton() {
    await this.okButton.click();
  }

  public async tapThreeDotsButton() {
    await this.threeDotsButton.click();
  }

  public async tapUsunButton() {
    await this.usunButton.click();
  }

  public async tapPrzeniesButton() {
    await this.przeniesButton.click();
  }

  public async verifyCartIsEmptyTextDisplayed() {
    await this.yourCartIsEmptyText.waitForDisplayed({
      timeoutMsg: "Cart is not empty",
    });
  }

  public async verifyDoKasyButtonDisplayed() {
    await this.doKasyButton.waitForDisplayed({
      timeoutMsg: "Do kasy button is not displayed",
    });
  }

  public async choose2FromSelectList() {
    await this.tapSelectListOption1();
    await this.tapSelectListOption2();
    await this.tapOkButton();
  }

  public async checkIfDoublingProductDoublesPrice() {
    const pricesBeforeDoubling =
      await this.getFirstSinglePriceFromSearchResults();
    await this.choose2FromSelectList();
    const pricesAfterDoubling =
      await this.getFirstSinglePriceFromSearchResults();
    await browser.pause(3000);
    expect(pricesAfterDoubling).to.equal(
      pricesBeforeDoubling * 2,
      "Prices are not doubled"
    );
  }
}

export default new CartPage();
