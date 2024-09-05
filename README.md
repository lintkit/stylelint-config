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
    "stylelint:dry-run": "stylelint app/**/*.scss --color --cache --config node_modules/@lintkit/stylelint-config/stylelint.config.mjs --ignore-path node_modules/@lintkit/stylelint-config/.stylelintignore --cache-location .cache/ --cache-strategy content",
    "stylelint:fix": "npm run stylelint:dry-run -- --fix",
}
```
