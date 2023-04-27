#!/bin/bash

TOKEN=$1

# Set variables
ORG="wrappid"
PACKAGE_TYPE="npm"
PACKAGE_NAME="styles"
OUTPUT_FILE="package_details.json"

# Set API endpoint
API_ENDPOINT="https://api.github.com/orgs/$ORG/packages/$PACKAGE_TYPE/$PACKAGE_NAME/versions"

# Make API request and save response to file
curl -L -H "Accept: application/vnd.github+json" -H "Authorization: Bearer $TOKEN" -H "X-GitHub-Api-Version: 2022-11-28" $API_ENDPOINT > $OUTPUT_FILE

# -X DELETE      # deletes all versions


is_array=$(jq 'if type == "array" then true else false end' package_details.json)

if [ "$is_array" == "true" ]; then
  # If the JSON file contains an array, extract the id and name of the first object
  id=$(jq '.[0].id' package_details.json)
  name=$(jq -r '.[0].name' package_details.json)
else
  # If the JSON file contains a direct object, extract its id and name
  id=$(jq '.id' package_details.json)
  name=$(jq -r '.name' package_details.json)
fi

# Print the extracted id and name
echo $id > id.txt
echo "id: $id"
echo $name > name.txt
echo "name: $name"
