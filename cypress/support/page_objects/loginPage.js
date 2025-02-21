import {args} from 'commander';
import {executeInOrigin} from '../../utils/originHelper';
export class LoginPage {
  constructor(origin = 'https://account.netwealth.com.au') {
    this.origin = origin;
  }

  get loginForm() {
    return {
      usernameInput: () => cy.get('#username'),
      passwordInput: () => cy.get('#password'),
      loginButton: () => cy.get('#loginButton'),

      selectors: {
        usernameInput: '#username',
        passwordInput: '#password',
        loginButton: '#loginButton',
      },
    };
  }

  enterUsername(username) {
    cy.origin(this.origin, {args: {selector: this.loginForm.selectors.usernameInput, value: username}}, ({selector, value}) => {
      cy.get(selector).type(value);
    });
  }

  enterPassword(password) {
    cy.origin(this.origin, {args: {selector: this.loginForm.selectors.passwordInput, value: password}}, ({selector, value}) => {
      cy.get(selector).type(value);
    });
  }

  clickLogin() {
    cy.origin(this.origin, {args: {selector: this.loginForm.selectors.loginButton}}, ({selector}) => {
      cy.get(selector).click();
    });
  }
}

export const loginPage = new LoginPage();
