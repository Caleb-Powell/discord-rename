module.exports.getName = function (names) {
  if (isArray(names)) {
    console.log(names.length);
    let ind = Math.floor(Math.random() * names.length);
    Math.floor(Math.random() * names.length);
    return names.at(ind);
  }
};

function isArray(myArray) {
  return myArray.constructor.toString().indexOf("Array") > -1;
}
