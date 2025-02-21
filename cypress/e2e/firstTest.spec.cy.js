import {timeout} from 'rxjs';
import {homePage} from '../support/page_objects/homePage';
import {loginPage} from '../support/page_objects/loginPage';
import {navigateTo} from '../support/page_objects/navigation';

describe('template spec', () => {
  beforeEach('Go to Homepage', () => {
    navigateTo.homepage();
  });

  it('passes', () => {
    homePage.clickLoginButton();

    loginPage.enterUsername('mtran3');
    loginPage.enterPassword('12345678aA@');
    loginPage.clickLogin();

    cy.get('#nwwc-panel-lhs__content', {timeout: 10000})
      .should('be.visible')
      .then((panel) => {
        cy.pause();
        cy.wrap(panel).find('[button-fab-text="Add Account or Property"]', {timeout: 10000}).shadow().find('nwwc-button').should('be.visible').click();
        cy.pause();
      });

    cy.contains('Add property', {timeout: 10000}).click({force: true});
    // cy.wait('@addAccountOrProperty');
  });
});
