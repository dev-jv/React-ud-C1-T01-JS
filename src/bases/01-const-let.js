// --------------------------- <> Variables and Constants

let dev = 1; // Assign
dev = 2; // Re-assign
console.log(dev); // -------------- 2 

if (true) {
    dev = 3; // Re-assign *
    console.log(dev); // ---------- 3
}
console.log(dev); // -------------- 3



let kad = 10; // Assign
kad = 20; // Re-assign
console.log(kad); // --------------- 20

if (true) { 
    let kad = 30; // New *
    console.log(kad); // ---------- 30
}
console.log(kad); // -------------- 20
