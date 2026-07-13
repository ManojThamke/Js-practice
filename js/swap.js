function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
    console.log("Inside swap function: a =", a, "b =", b);
}
swap(5, 10);