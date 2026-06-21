const stringUtils = require("./stringUtils");

console.log(stringUtils.capitalize("hello"));
console.log(stringUtils.capitalize("launchcode"));

console.log(stringUtils.reverse("hello"));
console.log(stringUtils.reverse("javascript"));

console.log(stringUtils.contains("LaunchCode", "Code"));
console.log(stringUtils.contains("LaunchCode", "Python"));

// edge case
console.log("===============================")
console.log(stringUtils.capitalize(""));
console.log(stringUtils.reverse(""));
console.log(stringUtils.contains("", "abc"));

console.log(stringUtils.capitalize(undefined));
console.log(stringUtils.reverse(undefined));
console.log(stringUtils.contains(undefined, "abc"));