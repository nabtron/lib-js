// converts the css boxshadow properties to object, using regex too

let a = '1px 1px 3px #999, 2px 2px rgba(0, 0, 0, 0.1),inset 2px 2px rgb(0, 0, 0, 0.1);';
a = a.trim();
var lastChar = a.slice(-1);
if (lastChar == ';') {
    a = a.slice(0, -1);
}
a = a.trim();
let b = a.split(/\,\s?(?![^\(]*\))/);
// console.log(b.length);

let c = [];
// let d = [];
for(i=0;i<b.length;i++){
  let obj = {
    'inset' : false,
    'h-offset' : '0px',
    'v-offset' : '0px',
    'blur' : '0px',
    'spread' : '0px',
    'color' : '',
  }


  let j = 0;
  b[i] = b[i].trim();
  let d = b[i].split(/\s+(?![^\(]*\))/);
  let items = d.length;
  
  if(d[0] == 'inset'){
    obj["inset"] = true;
    j = 1;
    items = items - 1;
  }
  
  console.log(items)
  if(items > 1){
    obj["h-offset"] = d[j];    
  }

  if(items > 2){
    obj["v-offset"] = d[j];
  }

  if(items > 3){
    obj["blur"] = d[j];
  }

  if(items > 4){
    obj["spread"] = d[j];
  }
  
  obj["color"] = d[d.length - 1];

//   console.log(obj);

  c[i] = obj;
}

console.log(c);
