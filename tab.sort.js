function getMax(tab){
    const tabtri = tab.sort(function(a,b){return b-a});
    return tabtri[0] + ' ' + tabtri[1];
}
console.log(getMax([3,5,1,14,10,11]));

function getMin(tab){
    const tabTri=tab.sort(function(a,b){return a-b});
    return tabTri[0]+' '+tabTri[1]
}
console.log(getMin([3,5,1,14,10,11]));