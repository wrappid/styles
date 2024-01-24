#!/usr/bin/env node
/* eslint-disable import/order */
/* eslint-disable no-console */
// eslint-disable-next-line no-undef
const path = require("path");

// eslint-disable-next-line no-undef
const licenseChecker = require("license-checker");

// eslint-disable-next-line no-undef, no-var
const fileSystem = require("fs");

/**
 * @todo
 * 
 * need to use content directly without the below command
 * license-checker --json --out attributions.json
 * 
<details>
<summary>packageName@version</summary>

#### Basic details about the package
>|Key|Value|
>|:--|:--|
>|**Name**|packageName|
>|**Version**|0.0.402|
>|**Repository**|https://github.com/wrappid/core|
>|**Licenses**|MIT|
>|**Publisher**|Wrappid Framework|
>|**Contact**|wrappid.framework@gmail.com|
>|**Homepage**|https://github.com/wrappid|

#### Use this package in your project
```bash
npm i @wrappid/core
```
</details>
 */

/**
 * @todo
 * 1. get license of the used package using license-checker
 * 2. convert the content to .md
 */

try {
  // eslint-disable-next-line no-undef
  let packagePath = path.join(__dirname, "./../");
  // eslint-disable-next-line no-undef
  let attributionMdPath = path.join(__dirname, "./../ATTRIBUTIONS.md");

  licenseChecker.init({ start: packagePath }, function(err, packages) {
    if (err) {
      //Handle error
      throw err;
    } else {
      // eslint-disable-next-line no-console
      // console.log(packages);
      
      /**
       * @todo
       * 1. convert to markdown
       */
      let markdownContent = "";

      markdownContent += Object.keys(packages).map((packageKey) => {
        return convertJsonToMDFormat(packageKey, packages[packageKey]);
      }).join("\n");
      // eslint-disable-next-line etc/no-commented-out-code
      console.log(markdownContent);
      fileSystem.writeFileSync(attributionMdPath, markdownContent);
    }
  });
} catch (error) {
  // eslint-disable-next-line no-console
  console.error("Something went wrong, please re-run `npm run attributions:gen`");
  // eslint-disable-next-line no-console
  console.error(error);
}

/**
 * 
 * @param {*} attributionJSON 
 * @returns 
 */
const convertJsonToMDFormat = (packageName, packageInfo) => {
  let mdContent = "";

  let {
    licenses,
    repository,
    publisher,
    url,
    // path,
    licenseFile,
    email
  } = packageInfo;

  const extractedNumbers = packageName.match(/[0-9.]+/g);
  let packageVersion = "";

  if (extractedNumbers) {
    packageVersion = extractedNumbers.join("");

    // eslint-disable-next-line etc/no-commented-out-code
    // console.log(packageVersion);
  }

  mdContent = `<details>
  <summary>${packageName}</summary>
  
  #### Basic details about the package
  >|Key|Value|
  >|:--|:--|
  >|**Name**|${packageName || "NA"}|
  >|**Version**|${"@" + packageVersion || "NA"}|
  >|**Repository**|${repository || "NA"}|
  >|**Licenses**|${licenses || "NA"}|
  >|**Publisher**|${publisher || "NA"}|
  >|**Contact**|${email || "NA"}|
  >|**Homepage**|${url || "NA"}|
  
  #### Use this package in your project
  \`\`\`bash
  npm i ${packageName}
  \`\`\`
  </details>`;

  return mdContent;
}; 