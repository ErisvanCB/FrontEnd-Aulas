function add(x) {
    x++;
    return x;
}

let a = 0;
let b = 5;

for(let i = 0; i <= 3; i++){
    b = a-i;
    a = add(b);
    console.log(a)
}