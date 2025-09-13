describe("Features dropdown tests", () => {
  const getFeaturesDropdownInitiator = () =>
    cy.get('[data-cy="features-dropdown-initiator"]');
  const getFeaturesDropdown = () => cy.get('[data-cy="features-dropdown"]');

  beforeEach(() => {
    cy.visit("http://localhost:5501");
  });

  it("Features dropdown is visible after clicking on dropdown initiator", () => {
    getFeaturesDropdownInitiator().click();
    getFeaturesDropdown().should("be.visible");
  });

  it("Features dropdown is hiding after clicking dropdown initiator with active dropdown", () => {
    getFeaturesDropdownInitiator().click();
    getFeaturesDropdown().should("be.visible");
    getFeaturesDropdownInitiator().click();
    getFeaturesDropdown().should("not.be.visible");
  });

  it("Features dropdown is not opened after just hovering dropdown initiator", () => {
    getFeaturesDropdownInitiator().trigger("mouseover");
    getFeaturesDropdown().should("not.be.visible");
  });
});

describe("Mobile design tests", () => {
  const getNavMenuList = () => cy.get('[data-cy="nav-menu-list"]');
  const getLoginSection = () => cy.get('[data-cy="login-section"]');
  const getHamburgerBtn = () => cy.get('[data-cy="hamburger-btn"]');
  const getOverlay = () => cy.get('[data-cy="overlay"]');

  beforeEach(() => {
    cy.visit("http://localhost:5501");
    cy.viewport(900, 1200);
  });

  it("Nav menu list is hidden", () => {
    getNavMenuList().should("not.be.visible");
  });

  it("Login section is hidden", () => {
    getLoginSection().should("not.be.visible");
  });

  it("Hamburger button is visible", () => {
    getHamburgerBtn().should("be.visible");
  });

  it("Clicking hamburger button causes the mobile navigation is opened", () => {
    getHamburgerBtn().click();
    getNavMenuList().should("be.visible");
  });

  it("Clicking hamburger button activates overlay", () => {
    getHamburgerBtn().click();
  });

  it("Clicking hamburger button with opened mobile navigation causes the mobile navigation is hiding", () => {
    getHamburgerBtn().click();
    getNavMenuList().should("be.visible");
    getHamburgerBtn().click();
    getNavMenuList().should("not.be.visible");
  });

  it("Clicking hamburger button causes overlay is active", () => {
    getHamburgerBtn().click();
    getOverlay().should("have.class", "active");
  });

  it("Closing mobile navigation causes overlay is no more active", () => {
    getHamburgerBtn().click();
    getOverlay().should("have.class", "active");
    getHamburgerBtn().click();
    getOverlay().should("not.have.class", "active");
  });
});
