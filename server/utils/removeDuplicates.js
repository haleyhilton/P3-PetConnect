//need to fix this to compare object ids
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
};

const arr1 = [{"hi": 3, "hello": "scary terry"}, {"hi": 3, "hello": "scarry terry"}];

console.log(removeDuplicates(arr1));

module.exports = removeDuplicates;