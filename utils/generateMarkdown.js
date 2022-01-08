const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');




// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'GNU') {
    badge = 'https://img.shields.io/badge/license-GNU-blue'
  } else if (license === 'Apache') {
    badge = 'https://img.shields.io/badge/license-Apache-blue'
  } else if (license === 'MIT') {
    badge = 'https://img.shields.io/badge/license-MIT-blue'
  } else {
    ''
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'GNU') {
    licenseLink = 'https://choosealicense.com/licenses/agpl-3.0/'
  } else if (license === 'Apache') {
    licenseLink = 'https://choosealicense.com/licenses/apache-2.0/'
  } else if (license === 'MIT') {
    licenseLink = 'https://choosealicense.com/licenses/mit/'
  } else {
    licenseLink = ''
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if (license === 'None') {
    licenseSection = ''
  } else {
    licenseSection = `License: ${license}`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

## Table of contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Description](#Description)
* [Contribution](#Contribution)
* [Test](#Test)
* [AskMe](#AskMe)
* [Email](#Email)

## License

${renderLicenseSection(data.License)} 

![license](${renderLicenseBadge(data.License)})

${renderLicenseLink(data.License)}

## Installation

Follow instructions to install:
${data.Installation}

## Usage
${data.Usage}

## Contribution
${data.Contribution}

## Test
Follow instructions to rn a test
${data.Test}

## Ask Me
Ways of contact:
GitHub: https://github.com/${data.AskMe}
Email Address: ${data.Email}
`;
}

module.exports = generateMarkdown;
