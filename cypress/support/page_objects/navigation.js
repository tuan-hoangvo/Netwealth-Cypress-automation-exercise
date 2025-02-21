export class Navigation {
  homepage() {
    cy.visit('/');
  }

  loginPage() {
    cy.visit('https://account.netwealth.com.au/auth/login');
  }
}

export const navigateTo = new Navigation();
