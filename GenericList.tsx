interface User {
    id: number,
    name: string,
    image: string
}

class List<T> {
    private size: number;
    private arr: Array<T>;

    constructor() {
        this.size = 0;
        this.arr = [];
    }

    //addElementsInTheEnding elements
    addElementsInTheEnd(e: T): void {
        this.arr.push(e);
        this.size++;
    }

    //to sort the list on the basis of name
    compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        let comparison = 0;
        if (nameA > nameB) {
            comparison = 1;
        } else if (nameA < nameB) {
            comparison = -1;
        }
        return comparison;
    }

    sortArrayOnName(): Array<T> {
        return [...this.arr.sort(this.compare)];
    }


    //Show the complete list
    showCompleteList(): Array<T> {
        return [...this.arr];
    }

    //count total no of elements entered
    countTotalNoOfElements(): number {
        return this.size;
    }

    //remove specific element from the list
    removeElementFromSpecificIndex(i: number): void {
        this.arr[i] = null;
        this.arr = this.arr.filter(v => v !== null);
        this.size--;
    }

    //read value from a specific location
    readValueFromSpecificLocation(i: number): T {
        return this.arr[i];
    }

    //add value at specific location
    addAtSpecificIndex(e: T, i: number): void {
        this.arr = [
            ...this.arr.slice(0, i),
            e,
            ...this.arr.slice(i, this.size)
        ] as Array<T>;
        this.size++;
    }

    //update the values of elements at a specific location
    updateAtSpecificLocation(e: T, i: number): void {
        this.removeElementFromSpecificIndex(i);
        this.addAtSpecificIndex(e, i);
    }

}

const myList: List<User> = new List();

// for output
myList.addElementsInTheEnd({id: 1, name: 'Aj', image: 'asxjh'});
myList.addElementsInTheEnd({id: 2, name: 'lkls', image: 'sbjhxasjx'});
myList.addElementsInTheEnd({id: 3, name: 'bffj', image: 'asxjh'});
myList.addElementsInTheEnd({id: 4, name: 'zxxzj', image: 'asxjh'});
myList.addElementsInTheEnd({id: 5, name: 'scscj', image: 'asxjh'});

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
const dataCount = myList.countTotalNoOfElements();
console.log(dataCount);

console.log("\n*********Sorted List on basis of name**********");
const sorted = myList.sortArrayOnName();
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
var addAt = myList.addAtSpecificIndex({id: 23, name: "jajsthg", image: "asjkxkjn"},2);
showData = myList.showCompleteList();
console.log("\n***********Showing data************");
console.log(showData);

console.log("\n***********Updating at specific position************");
var updateAt = myList.updateAtSpecificLocation({id: 233, name: "jthg", image: "eismjsi"}, 2);
showData = myList.showCompleteList();
console.log("\n***********Showing data************");
console.log(showData);