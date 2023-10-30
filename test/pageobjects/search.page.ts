import { $ } from "@wdio/globals";
import CommonPage from "./common.page.js";
import { expect } from "chai";

class SearchPage extends CommonPage {
  private get kobietaTabs() {
    return $$("//android.widget.TextView[@text='Kobieta']");
  }

  private get mężczyznaTabs() {
    return $$("//android.widget.TextView[@text='Mężczyzna']");
  }

  private get dziewczynkaTabs() {
    return $$("//android.widget.TextView[@text='Dziewczynka']");
  }

  private get chlopiecTabs() {
    return $$("//android.widget.TextView[@text='Chłopiec']");
  }

  private get homeTabs() {
    return $$("//android.widget.TextView[@text='Home']");
  }

  private get bieliznaTabs() {
    return $("//android.widget.TextView[@text='Bielizna']");
  }

  private get bieliznaAndAkcesoriaTabs() {
    return $("//android.widget.TextView[@text='Bielizna i akcesoria']");
  }

  private get dziewczynka_1_5_YearsTabs() {
    return $("//android.widget.TextView[@text='Dziewczynka 1-5 lat']");
  }

  private get filtrujButton() {
    return $("//android.widget.TextView[@text='Filtruj']");
  }

  private get backArrow() {
    return $("//android.widget.Button");
  }

  public get searchBar() {
    return $("//android.widget.EditText");
  }

  private get szukajButton() {
    return $("//android.widget.TextView[contains(@text, 'Szukaj')]");
  }

  private get productsNotFound() {
    return $(
      "//android.widget.TextView[contains(@text, 'Nie znaleźliśmy produktów')]"
    );
  }

  private async tapSideSelector(selector: WebdriverIO.Element[]) {
    if (selector.length > 1) {
      const yPoint1 = await selector[0].getLocation("y");
      const yPoint2 = await selector[1].getLocation("y");

      if (yPoint1 > yPoint2) {
        await selector[0].click();
      } else {
        await selector[1].click();
      }
    } else {
      await selector[0].click();
    }
  }

  private async tapUpperSelector(selector: WebdriverIO.ElementArray) {
    if (selector.length > 1) {
      const yPoint1 = await selector[0].getLocation("y");
      const yPoint2 = await selector[1].getLocation("y");

      if (yPoint1 > yPoint2) {
        await selector[1].click();
      } else {
        await selector[0].click();
      }
    } else {
      await selector[0].click();
    }
  }

  public async tapSearchTabKobietaSideMenu() {
    await this.kobietaTab.waitForDisplayed();
    return this.tapSideSelector(await this.kobietaTabs);
  }

  public async tapSearchTabMezczyznaSideMenu() {
    await this.mezczyznaTab.waitForDisplayed();
    return this.tapSideSelector(await this.mężczyznaTabs);
  }

  public async tapSearchTabKobietaUpperMenu() {
    await this.kobietaTab.waitForDisplayed();
    return this.tapUpperSelector(await this.kobietaTabs);
  }

  public async tapSearchTabMezczyznaUpperMenu() {
    await this.mezczyznaTab.waitForDisplayed();
    return this.tapUpperSelector(await this.mężczyznaTabs);
  }

  public async tapSearchTabDziewczynkaSideMenu() {
    await this.dziewczynkaTab.waitForDisplayed();
    return this.tapSideSelector(await this.dziewczynkaTabs);
  }

  public async tapSearchTabChlopiecSideMenu() {
    await this.chlopiecTab.waitForDisplayed();
    return this.tapSideSelector(await this.chlopiecTabs);
  }

  public async tapSearchTabDziewczynkaUpperMenu() {
    await this.dziewczynkaTab.waitForDisplayed();
    return this.tapUpperSelector(await this.dziewczynkaTabs);
  }

  public async tapSearchTabChlopiecUpperMenu() {
    await this.chlopiecTab.waitForDisplayed();
    return this.tapUpperSelector(await this.chlopiecTabs);
  }

  public async tapSearchTabHomeSideMenu() {
    await this.homeTab.waitForDisplayed();
    return this.tapSideSelector(await this.homeTabs);
  }

  public async tapSearchTabHomeUpperMenu() {
    await this.homeTab.waitForDisplayed();
    return this.tapUpperSelector(await this.homeTabs);
  }

  public async tapBackArrow() {
    return this.backArrow.click();
  }

  public async tapSearchBar() {
    return this.searchBar.click();
  }

  public async tapSzukajButton() {
    return this.szukajButton.click();
  }

  public async searchBarClearValue() {
    return this.searchBar.clearValue();
  }

  public async verifyBieliznaDisplayed() {
    return expect(
      await this.bieliznaTabs.isDisplayed(),
      "Bielizna tab is not displayed"
    ).to.be.true;
  }

  public async verifyBieliznaAndAkcesoriaDisplayed() {
    return expect(
      await this.bieliznaAndAkcesoriaTabs.isDisplayed(),
      "Bielizna i akcesoria tab is not displayed"
    ).to.be.true;
  }

  public async verifyDziewczynka_1_5_YearsDisplayed() {
    return expect(
      await this.dziewczynka_1_5_YearsTabs.isDisplayed(),
      "Dziewczynka 1-5 tab is not displayed"
    ).to.be.true;
  }

  public async verifyKobietaTitleDisplayed() {
    return expect(
      await this.kobietaTab.isDisplayed(),
      "Kobieta title is not displayed"
    ).to.be.true;
  }

  public async verifyMezczyznaTitleDisplayed() {
    return expect(
      await this.mezczyznaTab.isDisplayed(),
      "Mężczyzna title is not displayed"
    ).to.be.true;
  }

  public async verifyDziewczynkaTitleDisplayed() {
    return expect(
      await this.dziewczynkaTab.isDisplayed(),
      "Dziewczynka title is not displayed"
    ).to.be.true;
  }

  public async verifyChlopiecTitleDisplayed() {
    return expect(
      await this.chlopiecTab.isDisplayed(),
      "Chłopiec title is not displayed"
    ).to.be.true;
  }

  public async verifyHomeTitleDisplayed() {
    return expect(
      await this.homeTab.isDisplayed(),
      "Home title is not displayed"
    ).to.be.true;
  }

  public async verifyFiltrujButtonDisplayed() {
    await this.filtrujButton.waitForDisplayed({
      timeoutMsg: "Filtruj button is not displayed",
    });
  }

  public async verifyProductsNotFoundDisplayed() {
    await this.productsNotFound.waitForDisplayed({
      timeoutMsg: "Products not found message is not displayed",
    });
  }
}

export default new SearchPage();
