var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var List = /** @class */ (function () {
    function List() {
        this.size = 0;
        this.arr = [];
    }
    //addElementsInTheEnding elements
    List.prototype.addElementsInTheEnd = function (e) {
        this.arr.push(e);
        this.size++;
    };
    //to sort the list on the basis of name
    List.prototype.compare = function (a, b) {
        // Use toUpperCase() to ignore character casing
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        var comparison = 0;
        if (nameA > nameB) {
            comparison = 1;
        }
        else if (nameA < nameB) {
            comparison = -1;
        }
        return comparison;
    };
    List.prototype.sortArrayOnName = function () {
        return __spreadArrays(this.arr.sort(this.compare));
    };
    //Show the complete list
    List.prototype.showCompleteList = function () {
        return __spreadArrays(this.arr);
    };
    //count total no of elements entered
    List.prototype.countTotalNoOfElements = function () {
        return this.size;
    };
    //remove specific element from the list
    List.prototype.removeElementFromSpecificIndex = function (i) {
        this.arr[i] = null;
        this.arr = this.arr.filter(function (v) { return v !== null; });
        this.size--;
    };
    //read value from a specific location
    List.prototype.readValueFromSpecificLocation = function (i) {
        return this.arr[i];
    };
    //add value at specific location
    List.prototype.addAtSpecificIndex = function (e, i) {
        this.arr = __spreadArrays(this.arr.slice(0, i), [
            e
        ], this.arr.slice(i, this.size));
        this.size++;
    };
    //update the values of elements at a specific location
    List.prototype.updateAtSpecificLocation = function (e, i) {
        this.removeElementFromSpecificIndex(i);
        this.addAtSpecificIndex(e, i);
    };
    return List;
}());
var myList = new List();
// for output
myList.addElementsInTheEnd({ id: 1, name: 'Aj', image: 'asxjh' });
myList.addElementsInTheEnd({ id: 2, name: 'lkls', image: 'sbjhxasjx' });
myList.addElementsInTheEnd({ id: 3, name: 'bffj', image: 'asxjh' });
myList.addElementsInTheEnd({ id: 4, name: 'zxxzj', image: 'asxjh' });
myList.addElementsInTheEnd({ id: 5, name: 'scscj', image: 'asxjh' });
console.log("\n***********Showing data************");
var showData = myList.showCompleteList();
console.log(showData);
console.log("\n***********Removing data************");
var removeData = myList.removeElementFromSpecificIndex(2);
console.log(removeData);
showData = myList.showCompleteList();
console.log("\n***********Showing data************");
console.log(showData);
console.log("\n***********Count of total entered entries**************");
var dataCount = myList.countTotalNoOfElements();
console.log(dataCount);
console.log("\n*********Sorted List on basis of name**********");
var sorted = myList.sortArrayOnName();
console.log(sorted);
console.log("\n***********Removing data************");
removeData = myList.removeElementFromSpecificIndex(3);
console.log(removeData);
showData = myList.showCompleteList();
console.log("\n***********Showing data************");
console.log(showData);
var readValue = myList.readValueFromSpecificLocation(2);
console.log("\n***********Specific data************");
console.log(readValue);
console.log("\n**********Adding at specific location *************");
var addAt = myList.addAtSpecificIndex({ id: 23, name: "jajsthg", image: "asjkxkjn" }, 2);
showData = myList.showCompleteList();
console.log("\n***********Showing data************");
console.log(showData);
console.log("\n***********Updating at specific position************");
var updateAt = myList.updateAtSpecificLocation({ id: 233, name: "jthg", image: "eismjsi" }, 2);
showData = myList.showCompleteList();
console.log("\n***********Showing data************");
console.log(showData);
