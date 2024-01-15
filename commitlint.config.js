/**
 * List of commit types allowed in commit messages.
 *
 * @author Ananta Kumar Ghosh <ananta@anantakumarghosh.me>
 */
const types = [
  "build",
  "chore",
  "ci",
  "docs",
  "feat",
  "fix",
  "perf",
  "refactor",
  "revert",
  "style",
  "test"
];

/**
 * List of commit scopes allowed in commit messages.
 */
const scopes = ["config", "core", "global", "utils"];

// eslint-disable-next-line no-undef
module.exports = {
  extends: ["@commitlint/config-conventional"],

  parserPreset: { parserOpts: { issuePrefixes: ["#"] } },

  rules: {
    "body-leading-blank"  : [2, "always"],
    "body-max-line-length": [2, "always", 250],
    "footer-empty"        : [2, "never"],
    "footer-leading-blank": [2, "always"],
    "references-empty"    : [2, "never"],
    "scope-case"          : [2, "always", "camel-case"],
    "scope-empty"         : [0, "always"],
    "scope-enum"          : [2, "always", scopes],
    "type-enum"           : [2, "always", types],
  },
};
