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
  sections.description =`## Description
${data.description ? data.description : ''}`;
  sections.link = `## Link
${data.link ? '[' + data.link + ']('+ data.link + ')' : ''}`

  const markdown = 
  `${sections.title}
  ${sections.description}
  ${sections.link}`;

  return markdown;
//   `# ${data.title}
//   ${data.description}

// ## Link
//   ${data.link}

// ## Screenshot

// ## License
//   ${data.license}
// `
}

module.exports = generateMarkdown;
