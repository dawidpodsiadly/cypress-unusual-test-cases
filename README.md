# Unusual Test Cases with Cypress

This project contains a collection of implemented tests covering **unusual or edge-case scenarios** from [The Internet – Herokuapp](http://the-internet.herokuapp.com/). The tests focus on specific cases that are less common in typical automation, such as Drag and Drop, iFrames or Hovers on elements.

The test cases are intentionally simple and self-contained — they do **not rely on page object models** or advanced setups, which makes them easy to run, understand, and modify.

I chose **Cypress** for this project to explore both its **capabilities and limitations** as a testing tool. A total of **40 test cases** have been implemented to evaluate how Cypress handles non-standard web elements and behaviors.

---

## How to Run

To execute the tests, follow these steps:

1. Install the necessary dependencies:

   ```
   npm install
   ```

2. Open Cypress:

   ```
   npx cypress open
   ```

3. Choose the browser (e.g., Electron or Chrome) and run the tests. The test cases will automatically appear in the Cypress interface.
