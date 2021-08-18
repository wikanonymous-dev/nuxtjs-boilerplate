module.exports = {
  extends: ['stylelint-config-sass-guidelines'],
  plugins: ['stylelint-scss'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules  : {
    'max-nesting-depth'                    : 7,
    'no-descending-specificity'            : null,
    'selector-max-id'                      : null,
    'selector-max-compound-selectors'      : null,
    'property-no-vendor-prefix'            : null,
    'scss/at-extend-no-missing-placeholder': null,
    'selector-no-qualifying-type'          : null,
    'selector-class-pattern'               : null,
    'order/order'                          : null,
  },
}
