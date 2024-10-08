export default {
	extends: [
		"stylelint-config-standard-scss"
	],
	plugins: [
		"@stylistic/stylelint-plugin"
	],
	rules: {
		"alpha-value-notation": "number",
		"at-rule-disallowed-list": [],
		"at-rule-empty-line-before": [
			"always",
			{
				except: [
					"blockless-after-same-name-blockless",
					"blockless-after-blockless",
					"first-nested"
				],
				ignoreAtRules: ["else"]
			}
		],
		"at-rule-no-unknown": null,
		"at-rule-no-vendor-prefix": true,
		"at-rule-property-required-list": {
			"font-face": [
				"font-family",
				"font-style"
			]
		},
		"block-no-empty": true,
		"color-function-notation": null,
		"color-named": [
			"never",
			{
				ignore: [
					"inside-function"
				]
			}
		],
		"color-no-hex": true,
		"color-no-invalid-hex": true,
		"custom-property-pattern": null,
		"declaration-block-no-duplicate-properties": true,
		"declaration-block-no-redundant-longhand-properties": [
			true,
			{
				ignoreShorthands: [
					"flex",
					"flex-flow",
					"font",
					"inset",
					"grid",
					"grid-area",
					"grid-column",
					"grid-gap",
					"grid-row",
					"grid-template"
				]
			}
		],
		"declaration-block-single-line-max-declarations": 1,
		"declaration-empty-line-before": "never",
		"declaration-property-value-disallowed-list": {
			"border": [
				"none"
			],
			"border-bottom": [
				"none"
			],
			"border-left": [
				"none"
			],
			"border-right": [
				"none"
			],
			"border-top": [
				"none"
			]
		},
		"font-family-name-quotes": "always-unless-keyword",
		"function-url-quotes": "always",
		"keyframes-name-pattern": null,
		"length-zero-no-unit": true,
		"max-nesting-depth": [
			4,
			{
				ignoreAtRules: [
					"include",
					"media",
					"supports"
				]
			}
		],
		"no-descending-specificity": null,
		"no-duplicate-selectors": true,
		"property-no-unknown": [
			true,
			{
				ignoreProperties: [
					"content-visibility",
					"font-path"
				]
			}
		],
		"property-no-vendor-prefix": true,
		"scss/at-extend-no-missing-placeholder": true,
		"scss/at-else-closing-brace-newline-after": "always-last-in-chain",
		"scss/at-else-closing-brace-space-after": "always-intermediate",
		"scss/at-else-empty-line-before": "never",
		"scss/at-if-closing-brace-newline-after": "always-last-in-chain",
		"scss/at-if-closing-brace-space-after": "always-intermediate",
		"scss/percent-placeholder-pattern": "^[a-z][a-zA-Z0-9]+$",
		"scss/load-no-partial-leading-underscore": true,
		"scss/at-import-partial-extension-disallowed-list": [
			"scss"
		],
		"scss/at-mixin-pattern": null,
		"scss/at-rule-no-unknown": true,
		"scss/dollar-variable-colon-space-after": "always",
		"scss/dollar-variable-colon-space-before": "never",
		"scss/dollar-variable-pattern": null,
		"scss/selector-no-redundant-nesting-selector": true,
		"selector-attribute-quotes": "always",
		"selector-class-pattern": null,
		"selector-id-pattern": null,
		"selector-max-compound-selectors": 10,
		"selector-max-id": 3,
		"selector-no-vendor-prefix": true,
		"selector-not-notation": "simple",
		"selector-pseudo-element-colon-notation": "double",
		"selector-pseudo-element-no-unknown": true,
		"shorthand-property-no-redundant-values": true,
		"@stylistic/block-opening-brace-space-before": "always",
		"@stylistic/declaration-bang-space-after": "never",
		"@stylistic/declaration-bang-space-before": "always",
		"@stylistic/declaration-block-semicolon-newline-after": "always",
		"@stylistic/declaration-block-semicolon-space-before": "never",
		"@stylistic/declaration-block-trailing-semicolon": "always",
		"@stylistic/declaration-colon-space-after": "always",
		"@stylistic/declaration-colon-space-before": "never",
		"@stylistic/function-comma-space-after": "always-single-line",
		"@stylistic/function-parentheses-space-inside": "never-single-line",
		"@stylistic/indentation": "tab",
		"@stylistic/media-feature-parentheses-space-inside": "never",
		"@stylistic/no-eol-whitespace": [
			true,
			{
				severity: "warning"
			}
		],
		"@stylistic/declaration-colon-newline-after": null,
		"@stylistic/number-leading-zero": "always",
		"@stylistic/number-no-trailing-zeros": true,
		"@stylistic/selector-max-empty-lines": 8,
		"@stylistic/selector-list-comma-newline-after": "always",
		"@stylistic/string-quotes": "single",
		"unit-allowed-list": [
			"%",
			"deg",
			"dpi",
			"em",
			"fr",
			"ms",
			"rem",
			"s",
			"turn",
			"vh",
			"vmax",
			"vmin",
			"vw",
			"dvh",
			"dvw"
		],
		"value-keyword-case": null,
		"value-no-vendor-prefix": true
	}
};
