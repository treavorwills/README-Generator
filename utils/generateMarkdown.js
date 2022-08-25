// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(data.license) {};

const licenseBadge = (license) => {
  let allBadgesSelected = '';
  if (license != '') {
    if (license.includes('MIT')) allBadgesSelected = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    if (license.includes('Apache 2.0')) allBadgesSelected += '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    if (license.includes('GNU GPLv3')) allBadgesSelected += '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
    return allBadgesSelected;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let sections = {
    title: `# ${data.title}`,
  };
  sections.username = `### [ GitHub: ${data.username} ]( https://github.com/${data.username} )`;
  sections.description =`## Description
${data.description}`;
  sections.installation = `## Installation
${data.installation}`;
  sections.link = `## Link
[ ${data.link} ]( ${data.link} )`;
  sections.usage = `## Usage
${data.usage}`;
  if (data.hasScreenshot === 'Yes') {
    sections.screenshot = `### Screenshot
![alt text](../assets/images/screenshot.png)`
  };
  sections.credit = `## Credits
${data.credits}`;
  sections.license = `${licenseBadge(data.license)}`;
  sections.features = `## Features
${data.features}`;


  const markdown = 
  `${data.title ? sections.title : ''}
  ${data.license ? sections.license : ''}
${data.username ? sections.username : ''}
${data.description ? sections.description : ''}
${data.link ? sections.link : ''}
${data.installation ? sections.installation : ''}
${data.usage ? sections.usage : ''}
${data.hasScreenshot === 'Yes' ? sections.screenshot : ''}
${data.credits ? sections.credits : ''}
${data.features ? sections.features : ''}`;

  return markdown;
};

module.exports = generateMarkdown;
