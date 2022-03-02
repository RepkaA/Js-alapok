/* Tömbök (lista)  */

var tomb=[];
var tomb2 = [2,3,4,5,6];
var tomb3 = [4]

console.log(tomb.length);
console.log(tomb.length);
console.log(tomb.length);

tomb2[0] = 12;

var txt = "";
for (let index = 0; index < tomb2.length; index++) {
    txt += tomb2[index] + ",";
}

console.log(txt);


var gyumolcs = ["alma","málna","barack","riizli","paradicsom"];
var gyumolcsSzin = ["piros","piros","sárga","piros","piros"]
var gyumolcsar = [240,500,300,250,500]

/*  Van-e sárga színű gyümölcs? */ 
i = 0
while(i<gyumolcsSzin.length && !(gyumolcsSzin[i]==="sárga")){
    i++;
}

var vane = i<gyumolcsSzin.length;
console.log("Van sárga színű gyümölcs: "+ vane)

/*  Mennyi a piros színű gyümölcsök összértéke? */
/* Hány 300 Ft alatti termék van? */
/* Van-e 1000 ft feletti termék? */

// 1. feladat
for (let index = 0; index < gyumolcsSzin.length; index++) {
    while (gyumolcsSzin==="piros") {
        gyumolcsar++;
    }
}
console.log("A piros gyümölcsök árai:"+gyumolcsar);

// 2. feladat

for (let index = 0; index < gyumolcsar.length; index++) {
  while (gyumolcsar < 300) {
    gyumolcs++

  }  
    console.log("300 Ft alatti termékek"+gyumolcs);
}

// 3. feladat
for (let index = 0; index < gyumolcs.length; index++) {
    while(gyumolcsar < 1000){
        gyumolcs++

    }
    
}console.log("Az 1000 Ft feletti termékek száma:" +gyumolcs);
