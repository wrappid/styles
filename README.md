## Wrappid styles package [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/wrappid/styles/blob/main/LICENSE) ![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fwrappid%2Fstyles%2Freleases%2Flatest&query=tag_name&label=%40wrappid%2Fstyles) [![Release - CI](https://github.com/wrappid/styles/actions/workflows/create-release.yml/badge.svg?branch=development)](https://github.com/wrappid/styles/actions/workflows/create-release.yml)   

This repository deals with the primary styling package, @wrappid/styles, of the wrappid framework.

The @wrappid/styles package primarily has the following:

* Utility styles  
* StyledComponent styles  
* Themes  
* Some common features and functionalities

Before we jump into the details of each of the above, we must get aware of the philosophy behind the @wrappid/styles package.

## The Philosophy behind

The philosophy behind the @wrappid/styles package:

* Styling in wrappid follows a smallest screen first approach, which in other words is also known as mobile first approach  
* Styling in wrappid is segregated over different areas  
  * @wrappid/styles supports 5 areas, Module, App, Core, StyledComponent (used for Native layer) and Utility (built primarily inspired from Bootstrap); Note: this package only contains the Utility and StyledComponent styles  
* Writing styles is distributed over several screen sizes  
  * @wrappid/styles supports 6 screen sizes, Default (xs), Small (sm), Medium (md), Large (lg), XLarge (xl) and XXLarge (xxl)  
* Styling is built in an incremental manner of screen sizes, which means,  
  * Common styles for any component are written in the smallest screen size file; generally known as xs (extra-small), Default in case of @wrappid/styles  
  * Screen size specific styles for any component are written in the screen size specific files, namely, SmallUtilityStyles, MediumUtilityStyles, \<size\>UtilityStyles…  
* All styles are identified by “class” with unique classnames and are maintained in \<area\>Classess files as constants

## The Files involved

Every area of styling has 7 files involved. We will take the case of Utility styles as an example to understand the files involved.

Below are the files involved:

1. UtilityClasses \- Contains CONSTANTS for the classname(s)  
2. DefaultUtilityStyles \- Contains styles belonging to smallest (xs) screen size  
3. SmallUtilityStyles \- Contains styles belonging to small (sm) screen size  
4. MediumUtilityStyles \- Contains styles belonging to medium (md) screen size  
5. LargeUtilityStyles \- Contains styles belonging to large (lg) screen size  
6. XLargeUtilityStyles \- Contains styles belonging to xlarge (xl) screen size  
7. XXLargeUtilityStyles \- Contains styles belonging to xxlarge (xxl) screen size

We will have the same set of 7 files for all other areas.

## Understanding the Naming

A simple pictorial explanation of the naming convention.
![image](https://github.com/user-attachments/assets/a513a530-de3b-4a2f-b1fb-2b314732f7cb)
