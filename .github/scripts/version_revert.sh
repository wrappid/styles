# Specify the dependency to revert
DEPENDENCY="version"
VERSION_TYPE=patch
# Specify the paths to the package.json files
PACKAGE_JSON_PATHS=("package.json" "package/package.json")

for PACKAGE_JSON_PATH in "${PACKAGE_JSON_PATHS[@]}"; do

  # Get the current version of the dependency
  CURRENT_VERSION=$(cat "$PACKAGE_JSON_PATH" | grep $DEPENDENCY | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[[:space:]]')

  # Decrement the specified version type
  if [ "$VERSION_TYPE" == "major" ]; then
    NEW_VERSION=$(echo $CURRENT_VERSION | awk -F. '{$1 = $1 - 1; $2 = 0; $3 = 0;} 1' | sed 's/ /./g')
  elif [ "$VERSION_TYPE" == "minor" ]; then
    NEW_VERSION=$(echo $CURRENT_VERSION | awk -F. '{$2 = $2 - 1; $3 = 0;} 1' | sed 's/ /./g')
  else
    NEW_VERSION=$(echo $CURRENT_VERSION | awk -F. '{$NF = $NF - 1;} 1' | sed 's/ /./g')
  fi

  # Check if the new version is valid (not negative)
#   if [[ "$NEW_VERSION" == *-* ]]; then
#     #echo "Error: Cannot revert version below 0"
#     break
#  else
#     continue
#   fi

  # Update the version in package.json
  sed -i "s|\"$DEPENDENCY\": \"$CURRENT_VERSION\"|\"$DEPENDENCY\": \"$NEW_VERSION\"|" "$PACKAGE_JSON_PATH"

done
echo "$VERSION_TYPE version reverted $DEPENDENCY from $CURRENT_VERSION to $NEW_VERSION"