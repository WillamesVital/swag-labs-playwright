// pages/login.page.ts

import { Page } from '@playwright/test';
import { LoginLocators } from '../locators/loginLocators.ts';

export class LoginPage {
  constructor(private page: Page) {}

  async openSite() {
    await this.page.goto(`${process.env.SITE_URL}`);
  }

  async fillUsername(username: string) {
    await this.page.locator(LoginLocators.usernameInput).fill(username);
  }

  async fillPassword(password: string) {
    await this.page.locator(LoginLocators.passwordInput).fill(password);
  }

  async submitLogin() {
    await this.page.locator(LoginLocators.loginButton).click();
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }

  async getErrorMessage(): Promise<string> {
    return this.page.locator(LoginLocators.errorMessage).innerText();
  }
}
