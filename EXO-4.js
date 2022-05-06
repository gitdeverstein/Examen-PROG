function dualHorse(tab){
    let diff;
    for(let i=0; i<tab.length-1; i++){
        for(let j=i+1; j<tab.length; j++){
            if(i==0 && j==1){diff=Math.abs(tab[i]-tab[j])}
            else if(Math.abs(tab[i]-tab[j])<diff){diff=Math.abs(tab[i]-tab[j]);}
        }
    }
    return diff;
}
console.log(dualHorse([33,43,41,12,31]));