const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');




// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'GNU') {
    badge = 'https://img.shields.io/endpoint?url=<URL>&style<STYLE>'
  } else if (license === 'Apache') {
    badge = 'https://img.shields.io/endpoint?url=<URL>&style<STYLE>'
  } else if (license === 'MIT') {
    badge = 'https://img.shields.io/endpoint?url=<URL>&style<STYLE>'
  } else {
    ''
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink === '';
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
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
