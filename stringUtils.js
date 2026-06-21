function capitalize(str){
   if(!str) return "";
   return str.charAt(0).toUpperCase() + str.slice(1);
}

// function reverse(str) {
//     if (!str) {
//         return "";
//     }
//     return str.split("").reverse().join("");

// }

function reverse(str) {
    if (!str || str.length <= 1) {
        return str;
    }
    return reverse(str.slice(1)) + str[0];

}

function contains(str, substr){
    if (typeof str !== "string" || typeof substr !== "string") {
        return false;
    }
    if (!str || !substr) return false;
    return str.includes(substr);
}

module.exports = {capitalize, reverse, contains}