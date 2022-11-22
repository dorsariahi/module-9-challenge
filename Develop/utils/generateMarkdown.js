// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if(data.license=="MIT"){
    return "[![License:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
  }
  if(data.license=="Apache"){
    return "[![License:Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]"
  }
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data)}
#description
${data.description}
#installation
${data.installation}
#usageinfo
${data.usage}
#license
This app is covered under the ${data.license} license.
#contribution guidelines
${data.contributing}
#test instructions
${data.tests}
#questions
if you have any questions you can contact me at my email, ${data.email}
  take a look at my most recent projects at www.github.com/${data.questions}
`;
}

module.exports = generateMarkdown;
