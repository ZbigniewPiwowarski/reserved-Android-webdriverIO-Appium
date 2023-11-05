import { $ } from "@wdio/globals";
import CommonPage from "./common.page.js";

class ProfilePage extends CommonPage {
  private get emailAddressText() {
    return $("//android.widget.TextView[@text='Adres e-mail']");
  }

  private get ustawieniaAplikacjiButton() {
    return $("//android.widget.TextView[@text='Ustawienia aplikacji']");
  }

  private get znajdzSklepButton() {
    return $("//android.widget.TextView[@text='Znajdź sklep Reserved']");
  }

  private get ocenAplikacjeButton() {
    return $("//android.widget.TextView[@text='Oceń aplikację']");
  }

  private get pomocButton() {
    return $("//android.widget.TextView[@text='Pomoc i kontakt']");
  }

  private get informacjePrawneButton() {
    return $("//android.widget.TextView[@text='Informacje prawne']");
  }

  private get powiadomieniaZgodyText() {
    return $("//android.widget.TextView[@text='Powiadomienia i zgody']");
  }

  private get miastoLubAdresText() {
    return $(
      "//android.widget.TextView[@text='Miasto, adres lub nazwa punktu']"
    );
  }

  private get jakOceniaszAplikacjeText() {
    return $(
      "//android.widget.TextView[@text='Jak oceniasz aplikację Reserved?']"
    );
  }

  private get jakMozemyPomocText() {
    return $("//android.widget.TextView[@text='Jak możemy Ci pomóc?']");
  }

  private get politykaPrywatnosciText() {
    return $("//android.widget.TextView[@text='Polityka prywatności']");
  }

  public async tapUstawieniaAplikacjiButton() {
    await this.ustawieniaAplikacjiButton.click();
  }

  public async tapZnajdzSklepButton() {
    await this.znajdzSklepButton.click();
  }

  public async tapOcenAplikacjeButton() {
    await this.ocenAplikacjeButton.click();
  }

  public async tapPomocButton() {
    await this.pomocButton.click();
  }

  public async tapInformacjePrawneButton() {
    await this.informacjePrawneButton.click();
  }

  public async verifyEmailAddressTextDisplayed() {
    await this.emailAddressText.waitForDisplayed({
      timeoutMsg: "Email address text is not displayed",
    });
  }

  public async verifyUstawieniaAplikacjiButtonDisplayed() {
    await this.ustawieniaAplikacjiButton.waitForDisplayed({
      timeoutMsg: "Ustawienia aplikacji text is not displayed",
    });
  }

  public async verifyZnajdzSklepButtonDisplayed() {
    await this.znajdzSklepButton.waitForDisplayed({
      timeoutMsg: "Znajdz sklep text is not displayed",
    });
  }

  public async verifyOcenAplikacjeButtonDisplayed() {
    await this.ocenAplikacjeButton.waitForDisplayed({
      timeoutMsg: "Ocen aplikacje text is not displayed",
    });
  }

  public async verifyPomocButtonDisplayed() {
    await this.pomocButton.waitForDisplayed({
      timeoutMsg: "Pomoc text is not displayed",
    });
  }

  public async verifyInformacjePrawneButtonDisplayed() {
    await this.informacjePrawneButton.waitForDisplayed({
      timeoutMsg: "Informacje prawne text is not displayed",
    });
  }

  public async verifyPowiadomieniaZgodyTextDisplayed() {
    await this.powiadomieniaZgodyText.waitForDisplayed({
      timeoutMsg: "Powiadomienia zgody text is not displayed",
    });
  }

  public async verifyMiastoLubAdresTextDisplayed() {
    await this.miastoLubAdresText.waitForDisplayed({
      timeoutMsg: "Miasto lub adres text is not displayed",
    });
  }

  public async verifyJakOceniaszAplikacjeTextDisplayed() {
    await this.jakOceniaszAplikacjeText.waitForDisplayed({
      timeoutMsg: "Jak oceniasz aplikacje text is not displayed",
    });
  }

  public async verifyJakMozemyPomocTextDisplayed() {
    await this.jakMozemyPomocText.waitForDisplayed({
      timeoutMsg: "Jak mozemy pomoc text is not displayed",
    });
  }

  public async verifyPolitykaPrywatnosciTextDisplayed() {
    await this.politykaPrywatnosciText.waitForDisplayed({
      timeoutMsg: "Polityka prywatnosci text is not displayed",
    });
  }
}

export default new ProfilePage();
