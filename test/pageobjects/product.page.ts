import { $ } from "@wdio/globals";
import CommonPage from "./common.page.js";

class ProductPage extends CommonPage {
  private get cartIcon() {
    return $("//android.widget.Button[@index='2']");
  }

  private get addToCartButton() {
    return $(
      "//android.widget.TextView[contains(@text, 'Do koszyka')]/parent::*"
    );
  }

  private get anyView() {
    return $$("//android.view.View");
  }

  private async getXYAddCartButtonCoordinates() {
    return {
      x: await this.addToCartButton.getLocation("x"),
      y: await this.addToCartButton.getLocation("y"),
    };
  }

  // because of lack od proper selectors this is workaround
  // Add to cart button has the same Y coordinates as cart icon
  private async findFavouriteIcon() {
    const { x, y } = await this.getXYAddCartButtonCoordinates();
    return this.anyView.find(
      async (view) =>
        (await view.getLocation("y")) === y &&
        (await view.getLocation("x")) !== x
    );
  }

  public async tapFavoriteIcon() {
    const anyViewWithYCoordinateOfCartButton = await this.findFavouriteIcon();
    return (anyViewWithYCoordinateOfCartButton as WebdriverIO.Element).click();
  }

  public async tapAddToCartButton() {
    await this.addToCartButton.click();
  }

  public async tapCartIcon() {
    await this.cartIcon.click();
  }
}

export default new ProductPage();
