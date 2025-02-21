export function executeInOrigin(origin, callback) {
  if (Cypress.config('baseUrl') && Cypress.config('baseUrl').includes(origin)) {
    // If already in the expected origin, just run the callback
    callback();
  } else {
    // Otherwise, use cy.origin() to switch
    cy.origin(origin, callback);
  }
}
