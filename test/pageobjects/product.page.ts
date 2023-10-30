import { $ } from "@wdio/globals";
import CommonPage from "./common.page.js";

class ProductPage extends CommonPage {
  public get flashAlert() {
    return $("#flash");
  }
}

export default new ProductPage();
