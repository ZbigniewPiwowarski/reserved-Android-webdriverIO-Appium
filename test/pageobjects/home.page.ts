import { $ } from "@wdio/globals";
import CommonPage from "./common.page.js";

class HomePage extends CommonPage {
  public get inputUsername() {
    return $("#username");
  }

  public get inputPassword() {
    return $("#password");
  }

  public get btnSubmit() {
    return $('button[type="submit"]');
  }
}

export default new HomePage();
