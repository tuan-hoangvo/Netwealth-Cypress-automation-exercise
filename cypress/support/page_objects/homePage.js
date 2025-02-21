export class HomePage {
  get primaryNav() {
    return cy.get('#nw-primary-nav');
  }

  get headerButtons() {
    return cy.get('#nwHeaderButtons');
  }

  get logo() {
    return cy.get('#LeftNavLogo').find('a');
  }

  get adviserTab() {
    return this.primaryNav.contains('Adviser');
  }

  get personalTab() {
    return this.primaryNav.contains('Personal');
  }

  get whatWeDoTab() {
    return this.primaryNav.contains('What we do');
  }

  get insightsTab() {
    return this.primaryNav.contains('Insights');
  }

  get aboutUsTab() {
    return this.primaryNav.contains('About us');
  }

  get supportTab() {
    return this.primaryNav.contains('Support');
  }

  get contactTab() {
    return this.primaryNav.should('exist').contains('Contact');
  }

  get searchTab() {
    return this.primaryNav.find('#mobileSearchTrigger-0');
  }

  get openAccountButton() {
    return cy.get('#Register');
  }

  get loginButton() {
    return cy.get('#Login');
  }

  clickLoginButton() {
    this.loginButton.click();
  }
}

export const homePage = new HomePage();
