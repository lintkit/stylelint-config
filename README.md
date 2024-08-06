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
	"lint:scss:stylelint": "stylelint app/**/*.scss --color --cache --config node_modules/@lintkit/stylelint-config/stylelint.config.mjs --ignore-path node_modules/@lintkit/stylelint-config/.stylelintignore --cache-location .cache/ --cache-strategy content",
    "lint:scss:stylelint:fix": "npm run lint:scss:stylelint -- --fix",
}
```
