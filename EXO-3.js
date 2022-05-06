function sum(t){
    if (t.length==1){return t[0];}
    // Appel récurssif
    return t[t.length-1]+sum(t.slice(0,t.length-1)); // [0,(t.length-1)[
}
let t=[4,6,2,7,1]
console.log(sum(t));