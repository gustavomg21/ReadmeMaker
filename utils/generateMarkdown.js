
function renderLicenseBadge(license) {
  let badgeLabel = license.replace(" ", "&ensp;");
  return `
  [![Generic badge](https://img.shields.io/badge/License-${badgeLabel}-green.svg)](${renderLicenseLink(license)})
  `
};


function renderLicenseLink(license) {
  const linkUrl = encodeURIComponent(license);
  return `https://choosealicense.com/licenses/${linkUrl}/.`;
}


function renderLicenseSection(license) {

  if (license === "None") {
    return "";
  } else {

    return `
  ### Licensing 
  ${license}
  ${renderLicenseBadge(license)}
  `
}
};


function renderLinkSection(siteLink) {

  if (!siteLink) {
    return "";
  } else {

    return `
  ### Live Site 
  [Click to see the live site!](${siteLink})
  `
}
};


function renderDemo(demoLink) {

  if (!demoLink) {
    return "";
  } else {

    return `
  ### Demo 
  ![Demo](${demoLink})
  `
}
};



function generateMarkdown({ github, licenseChoice, confirmLiveLink, liveSiteLink, siteDemoLink, projectTitle, description, installationInstructions, usageInstructions, previewLink, contributionInstructions, testInstructions, questionsEmail }) {
  return `
# ${projectTitle}

## Table of Contents
- [Description](#project-description)
- [Installation](#installation)
- [Usage](#usage)
- [Preview](#preview)
- [Contribution](#contribution)
- [Testing](#testing)
- [Questions](#questions)

## Project Description
${description}
${renderLicenseSection(licenseChoice)} 
${renderLinkSection(liveSiteLink)}
${renderDemo(siteDemoLink)}

## Installation 
${installationInstructions}

## Usage 
${usageInstructions}

## Preview
![Preview](${previewLink})

## Contribution
${contributionInstructions}

## Testing
${testInstructions}

## Questions
Reach out to the repo owner, [${github}](https://github.com/${github}) at ${questionsEmail}.
`;
}

module.exports = generateMarkdown;


