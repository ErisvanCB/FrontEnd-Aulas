function add(x) {
    x++;
    return x;
}

function remove(x) {
    x--;
    return x;
}

let y = 10;
let z = 2;

while(y > 5){
    y = z + 4;

    if (z > 0){
        z = remove(z);
    }

    y = add(y);
}

console.log(y);