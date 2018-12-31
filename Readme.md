# Install
```
npm install array-json-csv

```
# example

```
cosnt json_csv = requre('array-json-csv');
let arr =[
 {name: "Kinny", age:28},
 {name:"Teo", age: 30}
]
let csv = json_csv(arr);

console.log(csv);
Kinny,28
Teo,30

```
# You can write file if you want.

```
const fs = require('fs');
fs.writeFile('message.csv', csv, 'utf8', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
```
