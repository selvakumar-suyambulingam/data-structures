function slice() {
    // array.slice(startIndex, endIndex) // endIndex exclusive
    // Purpose: Create a new array from an existing one

    console.log("=== Slice Examples ===");

    // Slice returns a **new array** (does not modify original)
    // slice(startIndex, endIndex) → endIndex is **exclusive**
    let arr = [10, 20, 30, 40, 50, 60];
    console.log("Original array:", arr);

    let sliced1 = arr.slice(2);       // from index 2 to end
    console.log("slice(2):", sliced1); // [30, 40, 50, 60]

    let sliced2 = arr.slice(1, 4);    // from index 1 to 3 (2nd argument is exclusive)
    console.log("slice(1,4):", sliced2); // [20, 30, 40]

    let sliced3 = arr.slice(-3);      // last 3 elements
    console.log("slice(-3):", sliced3); // [40, 50, 60]

    let sliced4 = arr.slice(0, -2);   // from start to length-2
    console.log("slice(0,-2):", sliced4); // [10, 20, 30, 40]

    console.log("Original array after slice:", arr); // unchanged
}


function splice() {
    // array.splice(startIndex, deleteCount, item1, item2, ...)
    // Purpose: Remove, insert, or replace elements in the original array

    console.log("\n=== Splice Examples ===");

    // Splice **modifies the original array**
    // splice(startIndex, deleteCount, item1, item2, ...)
    let arr2 = [10, 20, 30, 40, 50];
    console.log("Original array:", arr2);

    // Remove 2 elements starting at index 1
    let removed1 = arr2.splice(1, 2);
    console.log("splice(1,2) removed:", removed1);
    console.log("Array after removal:", arr2); // [10, 40, 50]

    // Insert elements without deleting
    arr2.splice(1, 0, 25, 35);
    console.log("splice(1,0,25,35) inserted:", arr2); // [10, 25, 35, 40, 50]

    // Replace elements: remove 2 elements starting at index 2, insert 99
    let removed2 = arr2.splice(2, 2, 99);
    console.log("splice(2,2,99) removed:", removed2); // [35, 40]
    console.log("Array after replace:", arr2); // [10, 25, 99, 50]

    // Using negative index
    arr2.splice(-1, 1, 100);
    console.log("splice(-1,1,100) replaced last element:", arr2); // [10, 25, 99, 100]

    // Remove all elements from index 1 to end
    let removed3 = arr2.splice(1);
    console.log("splice(1) removed:", removed3); // [25, 99, 100]
    console.log("Array after removing from index 1:", arr2); // [10]

    console.log("\n=== Summary ===");
    console.log("slice → returns new array, does NOT modify original");
    console.log("splice → modifies original array, can insert/delete/replace elements");
}


slice();