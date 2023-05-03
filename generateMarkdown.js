// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0':
      return '<img src="https://img.shields.io/badge/license-Apache%202.0-blue.svg" alt="License: Apache 2.0">' +
        '<br>' +
        '<a href="https://opensource.org/licenses/Apache-2.0">Apache 2.0</a>';
    case 'Boost Software License 1.0':
      return '<img src="https://img.shields.io/badge/license-Boost%201.0-blue.svg" alt="License: Boost Software License 1.0">' +
        '<br>' +
        '<a href="https://www.boost.org/LICENSE_1_0.txt">Boost Software License 1.0</a>';
    case 'BSD 3-Clause License':
      return '<img src="https://img.shields.io/badge/license-BSD%203--Clause-blue.svg" alt="License: BSD 3-Clause License">' +
        '<br>' +
        '<a href="https://opensource.org/licenses/BSD-3-Clause">BSD 3-Clause License</a>';
    default:
      return '';
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
