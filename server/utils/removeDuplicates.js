//need to fix this to compare object ids
function removeDuplicates(arr) {
    return arr.filter((item, index, originArr) => {
        const howManyInstances = originArr.filter((originItem) => item.id === originItem.id);
        const firstInstance = arr.indexOf(howManyInstances[0]);
        //check if item is first instance of item.id in array (two "different" objects can hold the exact same data, this is taken into account)
        return (firstInstance === index);
    });
};

module.exports = removeDuplicates;