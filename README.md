# Qubika - Contact Form Automation with Cypress

This project contains automated end-to-end tests for the Contact Us form on [Qubika's official website](https://www.qubika.com), using Cypress as the testing framework.

---

## About the Test

The goal was to simulate user interactions with the contact form and validate its behavior in different scenarios.

### Covered workflow:

- Open the homepage and verify the correct URL and logo visibility.
- Open the Contact Us form and confirm that all required fields are displayed.
- Submit the form without filling out any fields and check that all mandatory fields show validation errors.
- Fill out only the "First Name" field and validate that the rest of the required fields still show errors.
- Close the form and ensure it disappears from the view.
- Reopen the form and confirm that the "First Name" field retains its value and that the other fields remain invalid.

---

## Tools & Technologies

- **Cypress** for end-to-end automation.
- **JavaScript (ES6)**.
- Fixed viewport set to **1920x1080** to simulate desktop behavior.
- Centralized locators for cleaner and more maintainable code.

---

## How to Run the Tests

1. Clone the repository:

```bash
git clone https://github.com/jmanuelpat/qubika.com_cypress.git
cd qubika.com_cypress
```

2. Install the dependencies:

```bash
npm install
```

3. Launch Cypress in interactive mode:

```bash
npx cypress open
```

4. In the Cypress Test Runner, select `contactForm.cy.js` and run the tests.

---

## Improvements

- Test steps are clearly separated and descriptive for better readability.
- All validations are done based on visibility and actual content.
- Centralized selectors (`locators.js`) make the code easier to update and maintain.
- The test simulates a real user interaction from start to finish, including opening, submitting, and reopening the form.

---
