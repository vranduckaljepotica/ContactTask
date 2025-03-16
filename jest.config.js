module.exports = {
    testEnvironment: 'node',
    testTimeout: 30000,  // API tests might need longer timeouts
    verbose: true,
    // jest.setup.js
    globals: {
        BASE_URL : 'https://thinking-tester-contact-list.herokuapp.com'
    }
    
  };