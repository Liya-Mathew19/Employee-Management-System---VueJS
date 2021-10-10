// .eslintrc.js
module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ["plugin:vue/essential", "@vue/prettier"],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-mixed-spaces-and-tabs": 0, // disable rule
    },
    parserOptions: {
        parser: "babel-eslint"
    }
}
  