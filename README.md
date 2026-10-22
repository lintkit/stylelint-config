# LintKit: Stylelint Config

## Installation

Install the dependency

```
npm i --dev @lintkit/stylelint-config --save
```

Add the cache file to your `.gitignore`

```
# Linting
.cache
```

Add the scripts to your `package.json`

```json
"scripts": {
    "stylelint:dry-run": "stylelint app/**/*.scss --color --cache --config node_modules/@lintkit/stylelint-config/stylelint.config.js --ignore-path node_modules/@lintkit/stylelint-config/.stylelintignore --cache-location .cache/ --cache-strategy content",
    "stylelint:fix": "npm run stylelint:dry-run -- --fix",
}
```

## GitLab CI

The GitLab formatter is installed with this package. It prints the usual output in the job log and writes a [Code Quality](https://docs.gitlab.com/ci/testing/code_quality/) report, so problems show up in the merge request widget and the diff.

```yaml
stylelint:
  script:
    - npm ci
    - npm run stylelint:dry-run -- --custom-formatter=@studiometa/stylelint-formatter-gitlab
  artifacts:
    when: always
    reports:
      codequality: gl-codequality.json
```

The report path is read from the `codequality` artifact in `.gitlab-ci.yml`. Set `STYLELINT_CODE_QUALITY_REPORT` to write it somewhere else.

## Local Override

If you need to override some of the config (but keep LintKit defaults), place a file in the root of your project `stylelint.config.js` (or `stylelint.config.mjs` if required)

Update the `script` to use your local `stylelint.config.js` file instead of the LintKit one.

You can then include the LintKit config and add customisations where required.

```js
import config from '@lintkit/stylelint-config/config.js';

config.rules = {
	...config.rules,
	'color-no-hex': null,
};

config.overrides.push({
	files: ['**/legacy/**/*.scss'],
	rules: {
		'max-nesting-depth': null,
	},
});

export default config;
```

## Upgrading to v2

- Any references to `node_modules/@lintkit/stylelint-config/stylelint.config.mjs` should be corrected to `node_modules/@lintkit/stylelint-config/stylelint.config.js`
- Requires Stylelint 17 and Node.js 20.19 or later
