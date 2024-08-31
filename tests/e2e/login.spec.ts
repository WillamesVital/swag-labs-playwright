import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPages.ts';

test.describe('Login', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openSite();
  });

  test('CT01 - Verificar que é possível efetuar login com sucesso', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step('Quando o usuário preenche o nome de usuário com "standard_user" e a senha com "secret_sauce"', async () => {
      await loginPage.fillUsername('standard_user');
      await loginPage.fillPassword('secret_sauce');
    });

    await test.step('Quando o usuário clica no botão de login', async () => {
      await loginPage.submitLogin();
    });

    await test.step('Então o usuário é redirecionado para a página inicial', async () => {
      const title = await loginPage.getTitle();
      expect(title).toBe('Swag Labs');

      await page.waitForTimeout(3000);
    });
  });

  test('CT02 - Verificar que não é possível efetuar login usando credenciais inválidas', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step('Quando o usuário preenche o nome de usuário com "standard_user"', async () => {
      await loginPage.fillUsername('standard_user');
    });

    await test.step('E o usuário preenche a senha com "wrong_password"', async () => {
      await loginPage.fillPassword('wrong_password');
    });

    await test.step('Quando o usuário clica no botão de login', async () => {
      await loginPage.submitLogin();
    });

    await test.step('Então uma mensagem de erro é exibida dizendo "Epic sadface: Username and password do not match any user in this service"', async () => {
      const errorMessage = await loginPage.getErrorMessage();
      expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service');
    })
  })
});
