#!/bin/bash

# Get the argument
#echo Enter repo name:
#repo=test1
#echo Specify type- patch, minor. 
VERSION_TYPE=patch


# Specify the dependency to bump
DEPENDENCY="version"

# Specify the paths to the package.json files
PACKAGE_JSON_PATHS=("package.json" "package/package.json")

for PACKAGE_JSON_PATH in "${PACKAGE_JSON_PATHS[@]}"; do
  # Get the current version of the dependency
  CURRENT_VERSION=$(cat "$PACKAGE_JSON_PATH" | grep $DEPENDENCY | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[[:space:]]')

  # Increment the specified version type
  if [ "$VERSION_TYPE" == "major" ]; then
    NEW_VERSION=$(echo $CURRENT_VERSION | awk -F. '{$1 = $1 + 1; $2 = 0; $3 = 0;} 1' | sed 's/ /./g')
  elif [ "$VERSION_TYPE" == "minor" ]; then
    NEW_VERSION=$(echo $CURRENT_VERSION | awk -F. '{$2 = $2 + 1; $3 = 0;} 1' | sed 's/ /./g')
  else
    NEW_VERSION=$(echo $CURRENT_VERSION | awk -F. '{$NF = $NF + 1;} 1' | sed 's/ /./g')
  fi

  # Update the version in package.json
  sed -i "s|\"$DEPENDENCY\": \"$CURRENT_VERSION\"|\"$DEPENDENCY\": \"$NEW_VERSION\"|" "$PACKAGE_JSON_PATH"

  #echo "$VERSION_TYPE bumped $DEPENDENCY from $CURRENT_VERSION to $NEW_VERSION in $PACKAGE_JSON_PATH"
done
echo "$VERSION_TYPE bumped $DEPENDENCY from $CURRENT_VERSION to $NEW_VERSION"
