# ContactTask
This document provides instructions on how to set up and run Cypress tests for our project.
Prerequisites
Before running Cypress tests, ensure you have the following installed:

Node.js (v14 or higher)
npm (v6 or higher)
Git

Setup

Clone the repository:
bashCopygit clone <repository-url>
cd <project-directory>

Install dependencies:
bashCopynpm install

Install Cypress (if not included in project dependencies):
bashCopynpm install cypress --save-dev


Configuration
The Cypress configuration is located in cypress.config.js in the root directory. This file contains settings for:

Base URL
Test timeout values
Environment variables
Plugin configurations

Make sure to update any environment-specific configurations before running tests.
Running Tests
Open Cypress Test Runner
To open the Cypress Test Runner UI:
bashCopynpm run cypress:open
or
bashCopynpx cypress open
This will open the Cypress Test Runner, where you can select and run individual tests.
Run Tests Headlessly
To run all tests headlessly in the command line:
bashCopynpm run cypress:run
or
bashCopynpx cypress run
