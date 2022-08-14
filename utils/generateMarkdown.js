// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

const licenseBadge = () => {
  if (this.license != '') {
    console.log(this.license);
    return this.license;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.description}

## Link
  ${data.link}

## Screenshot

## License
  ${data.license}
`;
}

module.exports = generateMarkdown;
