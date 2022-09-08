//need this for Search
function reverseSpreader(obj) {
    const vals = Object.values(obj);
    return vals;
};

const testobj = [{"zero1": "test1", "zero2": "test2"}, {"zero3": "test3", "zero4": "test4"}, {"zero5": "test5", "zero6": "test6"}];

const spreadobj = { ...testobj };

/* console.log(JSON.parse(JSON.stringify(spreadobj))); */

/* console.log(JSON.parse(JSON.stringify(reverseSpreader(spreadobj)))); */

module.exports = reverseSpreader;