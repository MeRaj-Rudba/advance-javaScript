const student =[
    {id:21, name:"Omar Sunny"},
    {id:31, name:"Maannaaaaa"},
    {id:41, name:"Moyori"},
    {id:51, name:"Deepjol"},

];
const names =student.map(s => s.name);
const ids=student.map(s => s.id);
const bigger=student.filter(s => s.id>41);
console.log(names);
console.log(ids);
console.log(bigger);

