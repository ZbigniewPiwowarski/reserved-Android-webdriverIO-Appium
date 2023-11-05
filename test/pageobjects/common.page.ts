import { browser } from "@wdio/globals";

export default class CommonPage {
  protected get polandRegion() {
    return $("//android.view.View[@index='1']");
  }

  protected get mezczyznaTab() {
    return $("//android.widget.TextView[@text='Mężczyzna']");
  }

  protected get kobietaTab() {
    return $("//android.widget.TextView[@text='Kobieta']");
  }

  protected get dziewczynkaTab() {
    return $("//android.widget.TextView[@text='Dziewczynka']");
  }

  protected get homeTab() {
    return $("//android.widget.TextView[@text='Home']");
  }

  protected get chlopiecTab() {
    return $("//android.widget.TextView[@text='Chłopiec']");
  }

  protected get homeFirstTile() {
    return $(
      "//android.view.View[2]/android.view.View/android.view.View/android.view.View[1]"
    );
  }

  protected get navbarHome() {
    return $("//android.view.View[3]/android.view.View/android.view.View[1]");
  }

  protected get navbarHomeV2() {
    return $("//android.view.View[4]/android.view.View/android.view.View[1]");
  }

  protected get navbarSearch() {
    return $("//android.view.View[3]/android.view.View/android.view.View[2]");
  }

  protected get navbarSearchV2() {
    return $("//android.view.View[4]/android.view.View/android.view.View[2]");
  }

  protected get navbarCart() {
    return $("//android.view.View[3]/android.view.View/android.view.View[3]");
  }

  protected get navbarCartV2() {
    return $("//android.view.View[4]/android.view.View/android.view.View[3]");
  }

  protected get navbarCartV3() {
    return $(
      "//android.view.View[3]/android.view.View/android.view.View[3]/android.view.View[2]"
    );
  }

  protected get navbarFavorite() {
    return $("//android.view.View[3]/android.view.View/android.view.View[4]");
  }

  protected get navbarFavoriteV2() {
    return $("//android.view.View[4]/android.view.View/android.view.View[4]");
  }

  protected get navbarProfile() {
    return $("//android.view.View[3]/android.view.View/android.view.View[5]");
  }

  protected get navbarProfileV2() {
    return $("//android.view.View[4]/android.view.View/android.view.View[5]");
  }

  protected get zalogujButton() {
    return $("//android.widget.TextView[@text='Zaloguj się']");
  }

  protected get pricesPln() {
    return $$("//android.widget.TextView[contains(@text, 'PLN')]");
  }

  protected get pricePln() {
    return $("//android.widget.TextView[contains(@text, 'PLN')]");
  }

  public async tapPolandRegion() {
    await this.polandRegion.click();
  }

  public async tapMezczyznaTab() {
    await this.mezczyznaTab.click();
  }

  public async tapKobietaTab() {
    await this.kobietaTab.click();
  }

  public async tapDziewczynkaTab() {
    await this.dziewczynkaTab.click();
  }

  public async tapHomeTab() {
    await this.homeTab.click();
  }

  public async tapChlopiecTab() {
    await this.chlopiecTab.click();
  }

  public async tapHomeFirstTile() {
    await this.homeFirstTile.click();
  }

  public async tapNavbarHome() {
    try {
      await this.navbarHome.waitForDisplayed({ timeout: 5000 });
      this.navbarHome.click();
    } catch (error) {
      this.navbarHomeV2.click();
    }
  }

  public async tapNavbarSearch() {
    try {
      await this.navbarSearch.waitForDisplayed({ timeout: 5000 });
      this.navbarSearch.click();
    } catch (error) {
      this.navbarSearchV2.click();
    }
  }

  public async tapNavbarCart() {
    try {
      await this.navbarCart.waitForDisplayed({ timeout: 5000 });
      this.navbarCart.click();
    } catch (error) {
      this.navbarCartV2.click();
    }
  }

  public async taNavbarCartActive() {
    await this.navbarCartV3.click();
  }

  public async tapNavbarFavorite() {
    try {
      await this.navbarFavorite.waitForDisplayed({ timeout: 5000 });
      this.navbarFavorite.click();
    } catch (error) {
      this.navbarFavoriteV2.click();
    }
  }

  public async verifyZalogujButtonDisplayed() {
    await this.zalogujButton.waitForDisplayed({
      timeoutMsg: "Zaloguj button is not displayed",
    });
  }

  public async tapNavbarProfile() {
    try {
      await this.navbarProfile.waitForDisplayed({ timeout: 5000 });
      this.navbarProfile.click();
    } catch (error) {
      this.navbarProfileV2.click();
    }
  }

  public async sendKeys(text: string[]) {
    await driver.sendKeys(text);
  }

  public async keys(text: string[]) {
    try {
      await driver.keys(text);
    } catch (error) {}
  }

  async performSwipeDown(count: number, pause: number): Promise<void> {
    await browser.pause(pause);
    for (let i = 0; i < count; i++) {
      const { width, height } = await browser.getWindowSize();
      const startPoint = { x: width / 2, y: height / 2 };
      const endPoint = { x: width / 2, y: height * 0.2 };

      await browser.touchAction([
        { action: "longPress", ...startPoint },
        { action: "moveTo", ...endPoint },
        "release",
      ]);
    }
  }

  public async restartApp() {
    await driver.terminateApp("com.lppsa.app.reserved");
    await driver.activateApp("com.lppsa.app.reserved");
  }

  private async getSingleFirstPriceTextFromSearchResults() {
    await this.pricePln.waitForDisplayed();
    return this.pricePln.getText();
  }

  private async getPricesTextFromSearchResults() {
    await this.pricePln.waitForDisplayed();
    const prices = await this.pricesPln;
    const pricesText = [];

    for (let i = 0; i < prices.length; i++) {
      pricesText.push(await prices[i].getText());
    }

    return pricesText;
  }

  protected async getPricesFromSearchResults(): Promise<number[]> {
    const prices = await this.getPricesTextFromSearchResults();
    const pricesNumber: number[] = [];

    for (let i = 0; i < prices.length; i++) {
      const price = prices[i].split(" ");
      const priceNumber = parseFloat(price[0].replace(",", "."));
      pricesNumber.push(priceNumber);
    }

    await console.log(pricesNumber);
    return pricesNumber;
  }

  protected async getFirstSinglePriceFromSearchResults(): Promise<number> {
    const price = await this.getSingleFirstPriceTextFromSearchResults();
    const priceNumber = parseFloat(price.split(" ")[0].replace(",", "."));
    await console.log(priceNumber);
    return priceNumber;
  }
}
