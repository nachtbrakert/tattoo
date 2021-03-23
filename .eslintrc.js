module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb", "prettier"],
  plugins: ["react", "prettier"],
  rules: { "react/prop-types": 0 },
}
