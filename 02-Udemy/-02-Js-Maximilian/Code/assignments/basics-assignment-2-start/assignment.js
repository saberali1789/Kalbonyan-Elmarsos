const task3Element = document.getElementById('task-3');
const nome = 'Mahmoud'

function greeeet(nae){
  console.log( 'hiiii '+nae);
}
function aler(){
  alert('Hello there')
}

greeeet(nome)

task3Element.addEventListener('click', aler)

function treePar(s,d,f){
  return s+d+f;
}
console.log(treePar('my ','name is ','Mahmoud'))
alert(treePar('my ','name is ','Mahmoud'))