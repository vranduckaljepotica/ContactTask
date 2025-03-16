describe("API Smoke Tests - Contact List", () => {
  let authToken;
  let contactId;

  before(() => {
    /**cy.request("POST", "https://thinking-tester-contact-list.herokuapp.com/users", {
      firstName: "Test",
      lastName: "User",
      email: "matthewjohnsonjr@fake.com",
      password: "password123",
    }).then((response) => {
      expect(response.status).to.eq(201);
      authToken = response.body.token; // Save token for authentication
    });*/
  });

  it("Should fetch contact list", () => {
    cy.request({
      method: "GET",
      url: "https://thinking-tester-contact-list.herokuapp.com/contactList",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Should create a new contact", () => {
    cy.request({
      method: "POST",
      url: "https://thinking-tester-contact-list.herokuapp.com/contactList",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: {
        firstName: "John",
        lastName: "Doe",
        birthdate: "1990-01-01",
        email: "john.doe@example.com",
        phone: "123-456-7890",
        street1: "123 Main St",
        city: "New York",
        stateProvince: "NY",
        postalCode: "10001",
        country: "USA",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      contactId = response.body._id; // Save the contact ID
    });
  });

  it("Should update an existing contact", () => {
    cy.request({
      method: "PUT",
      url: `https://thinking-tester-contact-list.herokuapp.com/contactList/${contactId}`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: {
        firstName: "Updated John",
        lastName: "Doe",
        birthdate: "1990-01-01",
        email: "john.doe@example.com",
        phone: "123-456-7890",
        street1: "123 Updated St",
        city: "Los Angeles",
        stateProvince: "CA",
        postalCode: "90001",
        country: "USA",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.firstName).to.eq("Updated John");
    });
  });

  it("Should delete the contact", () => {
    cy.request({
      method: "DELETE",
      url: `https://thinking-tester-contact-list.herokuapp.com/contactList/${contactId}`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
