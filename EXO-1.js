"Hello worrld!".slice(6,11) // [6,10] ou [6,11[

let tab=[3,4,2,7,13]
tab.indexOf(13) // affiche 4

function myIndexOf(tab,element){
    for(let i=0; i<tab.length; i++){ // i=index
        if(tab[i]==element){return i}
    }
    return -1;
}
console.log(myIndexOf([5,2,3,8,7],2));