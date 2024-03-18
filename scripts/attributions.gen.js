#!/usr/bin/env node
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

// eslint-disable-next-line @typescript-eslint/no-var-requires
const licenseChecker = require("license-checker");

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require("../package.json");

/**
 * Generate ATTRIBUTIONS.md file listing third-party dependencies and their licenses.
 */

try {
  // eslint-disable-next-line no-undef
  const packagePath = path.join(__dirname, "./../");
  // eslint-disable-next-line no-undef
  const attributionMdPath = path.join(__dirname, "./../ATTRIBUTIONS.md");

  // Attribution header
  const attributionHeader = `
## ATTRIBUTIONS

This file lists the third-party libraries, frameworks, and other components used in the ${packageJson?.name} repository,
along with their respective licenses.   
It is important to comply with the licensing terms of these components when using the code
\n`;

  licenseChecker.init({ start: packagePath }, function(err, packages) {
    if (err) {
      throw err;
    } else {
      let markdownContent = attributionHeader + generateMarkdown(packages);

      fs.writeFileSync(attributionMdPath, markdownContent);
      console.log("ATTRIBUTIONS.md file generated successfully.");
    }
  });
} catch (error) {
  console.error("An error occurred while generating ATTRIBUTIONS.md file.");
  console.error(error);
}

/**
 * Convert JSON data to markdown format.
 * @param {object} packages - JSON object containing package information.
 * @returns {string} Markdown content.
 */
function generateMarkdown(packages) {
  let markdownContent = "";

  Object.keys(packages).forEach(packageName => {
    markdownContent += convertJsonToMDFormat(packageName, packages[packageName]);
  });

  return markdownContent;
}

/**
 * Convert package information to markdown format.
 * @param {string} packageName - Name of the package.
 * @param {object} packageInfo - Information about the package.
 * @returns {string} Markdown content.
 */
function convertJsonToMDFormat(packageName, packageInfo) {
  const {
    licenses, repository, publisher, url, licenseFile, email 
  } = packageInfo;

  const packageVersion = packageName.match(/[0-9.]+/g)?.join("") || "NA";

  const extractPackageName = packageName => packageName.substring(0, packageName.lastIndexOf("@")).replace("@", "");

  return `
<details>
<summary>${packageName}</summary>

#### Basic details about the package
>| Key | Value |
>| --- | --- |
>| **Name** | ${extractPackageName(packageName) || "NA"} |
>| **Version** | ${packageVersion} |
>| **Repository** | ${repository || "NA"} |
>| **Licenses** | [${licenses || "NA"}](${licenseFile}) |
>| **Publisher** | ${publisher || "NA"} |
>| **Contact** | ${email || "NA"} |
>| **Homepage** | ${url || "NA"} |

#### Use this package in your project
\`\`\`bash
npm i ${packageName}
\`\`\`
</details>
`;
}