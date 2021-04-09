const typeText = document.getElementById('typeText');
const text = " This is a simple text !"

let index = 0;

function write (){
  typeText.innerHTML = text.slice(0,index);

  index++;

  if (index > text.length) {
    index = 0;
  } 
}
setInterval(write,100);