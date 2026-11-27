


# Toolshop Playwright Automation

Automated UI and API testing for the Practice Software Testing Toolshop application using Playwright and TypeScript.

## Test Coverage

- UI Tests
- Homepage title verification.
- Product search functionality (search for pliers).
- Invalid login validation. 
- Product interactions using the Page Object Model (POM).

## API Tests

- Create a cart and add a product.
- Verify that requesting a non-existent cart returns a 404 Not Found response.

## Getting Started

Follow these three steps to set up and run the test suite.

1. Clone the repo and open the folder:

   ```bash
   git clone <repo-url>
   cd qa-bootcamp-week2-starter
   ```

2. Install dependencies and Chromium
```bash
   npm install
   npx playwright install chromium
```


3. Configure environment variables

Copy the example environment file:
```bash
cp .env.example .env
```

4. Run the complete test suite
```bash
npm test
```



## Technologies Used

- Playwright – UI and API automation.
- TypeScript – Test implementation.
- Node.js / npm – Runtime and dependency management.
- Page Object Model – Maintainable UI test structure.



## Running Tests

Run all UI and API tests:
```bash
npm test
```

Run a specific test file:
```bash
npx playwright test tests/api/cart.spec.ts
```

Run tests with a detailed terminal report:
```bash
npx playwright test --reporter=list
```


