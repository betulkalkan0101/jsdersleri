let dizi = [1,2,3,4,5,0,6,7,8,44];
console.log(dizi);

let result = dizi.filter((x) => x > 5);
console.log(result);

let varmi = dizi.includes(3);
console.log(varmi);

let numara = dizi.indexOf(44);
console.log(numara);

function write() {
    alert("merhaba");
}
write()
