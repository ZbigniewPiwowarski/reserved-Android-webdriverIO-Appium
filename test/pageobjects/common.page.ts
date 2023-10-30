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
    if (await this.navbarHome.isDisplayed()) {
      this.navbarHome.click();
    } else {
      await this.navbarHomeV2.click();
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
    if (await this.navbarCart.isDisplayed()) {
      this.navbarCart.click();
    } else {
      await this.navbarCartV2.click();
    }
  }

  public async tapNavbarFavorite() {
    if (await this.navbarFavorite.isDisplayed()) {
      this.navbarFavorite.click();
    } else {
      await this.navbarFavoriteV2.click();
    }
  }

  public async tapNavbarProfile() {
    if (await this.navbarProfile.isDisplayed()) {
      this.navbarProfile.click();
    } else {
      await this.navbarProfileV2.click();
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
}
