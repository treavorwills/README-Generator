// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

const licenseBadge = () => {
  if (this.license != '') {
    console.log(this.license);
    return this.license;
  }
};

// function generateSections(data) {
//   let sections = {
//     title: `# ${data.title}`,
//   },
//   sections.description = {
//     description: `## Description
//     ${data.description}`,
//   },
// }

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
  sections.license = `## License
${data.license}`;
  sections.badge = `## Badge
${data.badge}`;
  sections.features = `## Features
${data.features}`;


  const markdown = 
  `${data.title ? sections.title : ''}
${data.username ? sections.username : ''}
${data.description ? sections.description : ''}
${data.link ? sections.link : ''}
${data.installation ? sections.installation : ''}
${data.usage ? sections.usage : ''}
${data.hasScreenshot === 'Yes' ? sections.screenshot : ''}
${data.credits ? sections.credits : ''}
${data.license ? sections.license : ''}
${data.badge ? sections.badge : ''}
${data.features ? sections.features : ''}`;

  return markdown;
};

module.exports = generateMarkdown;
