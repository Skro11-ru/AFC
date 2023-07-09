module.exports = {
	extends: [
		// 'stylelint-config-recommended',
		'stylelint-config-standard-scss',
		// 'stylelint-prettier/recommended',
		// 'stylelint-config-html/svelte',
	],

	plugins: [
		'stylelint-order',
		// 'stylelint-scss',
		'stylelint-prettier',
	],
	rules: {
		'order/order': [
			'custom-properties',
			'dollar-variables',
			{
				type: 'at-rule',
				name: 'include',
				hasBlock: false,
			},
			'declarations',
			{
				type: 'rule',
				selector: '&::before',
			},
			{
				type: 'rule',
				selector: '&::after',
			},
			'rules',
			{
				type: 'rule',
				selector: '&:link',
			},
			{
				type: 'rule',
				selector: '&:visited',
			},
			{
				type: 'rule',
				selector: '&:focus',
			},
			{
				type: 'rule',
				selector: '&:hover',
			},
			{
				type: 'rule',
				selector: '&:active',
			},
			{
				type: 'rule',
				selector: '&:disabled',
			},
			{
				type: 'rule',
				selector: '&:first-child',
			},
			{
				type: 'rule',
				selector: '&:last-child',
			},
			{
				type: 'rule',
				selector: '&:nth-child.+',
			},
			{
				type: 'rule',
				selector: '&\\[[^\\[\\]]+\\]',
			},
			{
				type: 'rule',
				selector: '&\\..+',
			},
			{
				type: 'rule',
				selector: '&--.+',
			},
			{
				type: 'rule',
				selector: '.* &',
			},
			{
				type: 'at-rule',
				name: 'include',
				hasBlock: true,
			},
			'at-rules',
		],
		'order/properties-alphabetical-order': null,
		'order/properties-order': [
			[
				{
					order: 'First',
					emptyLineBefore: 'threshold',
					properties: ['all'],
				},
				{
					order: 'Positioning',
					emptyLineBefore: 'threshold',
					properties: ['position', 'top', 'right', 'bottom', 'left', 'z-index'],
				},
				{
					order: 'BoxModel',
					emptyLineBefore: 'threshold',
					properties: [
						'display',
						'flex',
						'flex-basis',
						'flex-direction',
						'flex-flow',
						'flex-grow',
						'flex-shrink',
						'flex-wrap',
						'grid',
						'grid-area',
						'grid-auto-rows',
						'grid-auto-columns',
						'grid-auto-flow',
						'grid-gap',
						'grid-row',
						'grid-row-start',
						'grid-row-end',
						'grid-row-gap',
						'grid-column',
						'grid-column-start',
						'grid-column-end',
						'grid-column-gap',
						'grid-template',
						'grid-template-areas',
						'grid-template-rows',
						'grid-template-columns',
						'gap',
						'align-content',
						'align-items',
						'align-self',
						'justify-content',
						'justify-items',
						'justify-self',
						'order',
						'float',
						'clear',
						'box-sizing',
						'width',
						'min-width',
						'max-width',
						'height',
						'min-height',
						'max-height',
						'margin',
						'margin-top',
						'margin-right',
						'margin-bottom',
						'margin-left',
						'padding',
						'padding-top',
						'padding-right',
						'padding-bottom',
						'padding-left',
						'object-fit',
						'object-position',
						'overflow',
						'overflow-x',
						'overflow-y',
					],
				},
				{
					order: 'Typography',
					emptyLineBefore: 'threshold',
					properties: [
						'color',
						'font',
						'font-weight',
						'font-size',
						'font-family',
						'font-style',
						'font-variant',
						'font-size-adjust',
						'font-stretch',
						'font-effect',
						'font-emphasize',
						'font-emphasize-position',
						'font-emphasize-style',
						'font-smooth',
						'line-height',
						'direction',
						'letter-spacing',
						'white-space',
						'text-align',
						'text-align-last',
						'text-transform',
						'text-decoration',
						'text-emphasis',
						'text-emphasis-color',
						'text-emphasis-style',
						'text-emphasis-position',
						'text-indent',
						'text-justify',
						'text-outline',
						'text-wrap',
						'text-overflow',
						'text-overflow-ellipsis',
						'text-overflow-mode',
						'text-orientation',
						'text-shadow',
						'vertical-align',
						'word-wrap',
						'word-break',
						'word-spacing',
						'overflow-wrap',
						'tab-size',
						'hyphens',
						'unicode-bidi',
						'columns',
						'column-count',
						'column-fill',
						'column-gap',
						'column-rule',
						'column-rule-color',
						'column-rule-style',
						'column-rule-width',
						'column-span',
						'column-width',
						'page-break-after',
						'page-break-before',
						'page-break-inside',
						'src',
					],
				},
				{
					order: 'Visual',
					emptyLineBefore: 'threshold',
					properties: [
						'list-style',
						'list-style-position',
						'list-style-type',
						'list-style-image',
						'table-layout',
						'empty-cells',
						'caption-side',
						'background',
						'background-color',
						'background-image',
						'background-repeat',
						'background-position',
						'background-position-x',
						'background-position-y',
						'background-size',
						'background-clip',
						'background-origin',
						'background-attachment',
						'background-blend-mode',
						'border',
						'border-color',
						'border-style',
						'border-width',
						'border-top',
						'border-top-color',
						'border-top-width',
						'border-top-style',
						'border-right',
						'border-right-color',
						'border-right-width',
						'border-right-style',
						'border-bottom',
						'border-bottom-color',
						'border-bottom-width',
						'border-bottom-style',
						'border-left',
						'border-left-color',
						'border-left-width',
						'border-left-style',
						'border-radius',
						'border-top-left-radius',
						'border-top-right-radius',
						'border-bottom-right-radius',
						'border-bottom-left-radius',
						'border-image',
						'border-image-source',
						'border-image-slice',
						'border-image-width',
						'border-image-outset',
						'border-image-repeat',
						'border-collapse',
						'border-spacing',
						'outline',
						'outline-width',
						'outline-style',
						'outline-color',
						'outline-offset',
						'box-shadow',
						'box-decoration-break',
						'transform',
						'transform-origin',
						'transform-style',
						'backface-visibility',
						'perspective',
						'perspective-origin',
						'visibility',
						'cursor',
						'opacity',
						'filter',
						'isolation',
						'backdrop-filter',
						'mix-blend-mode',
					],
				},
				{
					order: 'Animation',
					emptyLineBefore: 'threshold',
					properties: [
						'transition',
						'transition-delay',
						'transition-timing-function',
						'transition-duration',
						'transition-property',
						'animation',
						'animation-name',
						'animation-duration',
						'animation-play-state',
						'animation-timing-function',
						'animation-delay',
						'animation-iteration-count',
						'animation-direction',
						'animation-fill-mode',
					],
				},
				{
					order: 'Misc',
					emptyLineBefore: 'threshold',
					properties: [
						'appearance',
						'content',
						'clip',
						'clip-path',
						'counter-reset',
						'counter-increment',
						'resize',
						'user-select',
						'nav-index',
						'nav-up',
						'nav-right',
						'nav-down',
						'nav-left',
						'pointer-events',
						'quotes',
						'touch-action',
						'will-change',
						'zoom',
						'fill',
						'fill-rule',
						'clip-rule',
						'stroke',
					],
				},
			],
			{
				emptyLineBeforeUnspecified: 'threshold',
				emptyLineMinimumPropertyThreshold: 10,
			},
		],

		'at-rule-empty-line-before': [
			'always',
			{
				except: ['blockless-after-same-name-blockless', 'first-nested'],
				ignore: ['after-comment'],
				ignoreAtRules: ['else'],
			},
		],
		'at-rule-no-unknown': null,
		'at-rule-no-vendor-prefix': true,

		'block-no-empty': [
			true,
			{
				severity: 'warning',
			},
		],
		'color-hex-length': 'short',
		'color-named': 'never',
		'color-no-hex': null,
		'color-no-invalid-hex': true,
		'comment-empty-line-before': [
			'always',
			{
				except: ['first-nested'],
				ignore: ['after-comment', 'stylelint-commands'],
			},
		],
		'comment-no-empty': null,
		'comment-whitespace-inside': 'always',
		'custom-media-pattern': null,
		'custom-property-empty-line-before': [
			'always',
			{
				except: ['after-custom-property', 'first-nested'],
				ignore: ['after-comment', 'inside-single-line-block'],
			},
		],
		'custom-property-pattern': null,
		'declaration-block-no-duplicate-properties': true,
		'declaration-block-no-redundant-longhand-properties': true,
		'declaration-block-no-shorthand-property-overrides': true,
		'declaration-block-single-line-max-declarations': 0,
		'declaration-empty-line-before': [
			'always',
			{
				except: ['first-nested'],
				ignore: [
					'after-declaration',
					'after-comment',
					'inside-single-line-block',
				],
			},
		],
		'declaration-no-important': [
			true,
			{
				severity: 'warning',
			},
		],
		'font-family-name-quotes': 'always-unless-keyword',
		'font-family-no-duplicate-names': true,
		'font-weight-notation': 'numeric',
		'function-calc-no-unspaced-operator': true,
		'function-linear-gradient-no-nonstandard-direction': true,
		'function-name-case': 'lower',
		'function-url-no-scheme-relative': true,
		'function-url-quotes': 'always',
		'keyframe-declaration-no-important': true,
		'length-zero-no-unit': true,
		'max-nesting-depth': null,
		'media-feature-name-no-unknown': true,
		'media-feature-name-no-vendor-prefix': true,
		// 'no-descending-specificity': null,
		'no-duplicate-selectors': true,
		'no-empty-source': [
			true,
			{
				severity: 'warning',
			},
		],
		'no-invalid-double-slash-comments': true,
		'no-unknown-animations': true,
		'number-max-precision': 5,
		'property-no-unknown': [
			true,
			{
				checkPrefixed: true,
			},
		],
		'property-no-vendor-prefix': null,
		'rule-empty-line-before': [
			'always-multi-line',
			{
				except: ['first-nested'],
				ignore: ['after-comment'],
			},
		],
		'selector-attribute-quotes': 'always',
		'selector-class-pattern': null,
		'selector-id-pattern': null,
		'selector-max-attribute': null,
		'selector-max-class': null,
		'selector-max-combinators': null,
		'selector-max-compound-selectors': null,
		'selector-max-id': 1,
		'selector-max-specificity': null,
		'selector-max-type': null,
		'selector-max-universal': null,
		'selector-nested-pattern': null,
		'selector-no-qualifying-type': null,
		'selector-no-vendor-prefix': true,

		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: ['global'],
			},
		],
		'selector-pseudo-element-colon-notation': 'double',
		'selector-pseudo-element-no-unknown': true,
		'selector-type-case': 'lower',
		'selector-type-no-unknown': true,
		'shorthand-property-no-redundant-values': true,
		'string-no-newline': true,
		'time-min-milliseconds': 10,
		'unit-no-unknown': true,
		'value-keyword-case': 'lower',
		'value-list-comma-newline-after': null,
		'value-list-comma-newline-before': 'never-multi-line',
		'value-list-comma-space-after': 'always-single-line',
		'value-list-comma-space-before': 'never',
		'value-list-max-empty-lines': 0,
		'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
		'scss/at-else-closing-brace-space-after': 'always-intermediate',
		'scss/at-else-empty-line-before': 'never',
		'scss/at-else-if-parentheses-space-before': 'always',
		'scss/at-extend-no-missing-placeholder': null,
		'scss/at-function-parentheses-space-before': 'never',
		'scss/at-function-pattern': null,
		'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
		'scss/at-if-closing-brace-space-after': 'always-intermediate',
		'scss/at-import-no-partial-leading-underscore': true,
		'scss/at-import-partial-extension-blacklist': null,
		'scss/at-mixin-argumentless-call-parentheses': 'never',
		'scss/at-mixin-parentheses-space-before': 'never',
		'scss/at-mixin-pattern': null,
		'scss/at-rule-no-unknown': true,
		'scss/declaration-nested-properties': 'never',
		'scss/declaration-nested-properties-no-divided-groups': null,
		'scss/dollar-variable-colon-newline-after': 'always-multi-line',
		'scss/dollar-variable-colon-space-after': 'always-single-line',
		'scss/dollar-variable-colon-space-before': 'never',
		'scss/dollar-variable-empty-line-before': [
			'always',
			{
				except: ['after-dollar-variable', 'first-nested'],
				ignore: ['after-comment', 'inside-single-line-block'],
			},
		],
		'scss/dollar-variable-no-missing-interpolation': null,
		'scss/dollar-variable-pattern': null,
		'scss/double-slash-comment-empty-line-before': [
			'always',
			{
				except: ['first-nested'],
				ignore: ['between-comments', 'stylelint-commands'],
			},
		],
		'scss/double-slash-comment-inline': null,
		'scss/double-slash-comment-whitespace-inside': 'always',
		'scss/media-feature-value-dollar-variable': null,
		'scss/no-global-function-names': null,
		'scss/operator-no-newline-after': null,
		'scss/operator-no-newline-before': null,
		'scss/operator-no-unspaced': true,
		'scss/partial-no-import': null,
		'scss/percent-placeholder-pattern': null,
		'scss/selector-no-redundant-nesting-selector': true,
	},
};
