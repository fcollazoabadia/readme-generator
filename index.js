const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ title, description, installation, usage, credits, license, tests, github, email}) =>
  `# ${title}

  ## ${description}

  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Github](#github)
  - [Email](#email)
  - [Tests](#tests)

  ## Installation
  
  ${installation}
  
  ## Usage
  
  ${usage}
  
  ## Credits
  
  ${credits}

  ## License
  
  ${license}
  
  ---

  ##Questions

  My GitHub profile: ${github}

  Reach me at ${email} for any additional questions.

  ---
  
  ## Tests

  ${tests}`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Project Title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use. Include screenshots as needed.',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Project Licenses?',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Other credits?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are some tests for your project?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'GitHub Link:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Email address:',
    },
  ])
  .then((answers) => {
    const READMEPageContent = generateREADME(answers);

    fs.writeFile('README.md', READMEPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully generated README.md!')
    );
  });
