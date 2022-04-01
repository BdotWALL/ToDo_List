// Show an unordered list of to-do items
// Show an input to enter a new to-do
// Show a button to add a to-do. When the button is clicked:
// The text from the input box is used to add a list item to the bottom of the list
// The text from the input box is cleared out.
// When the user clicks on a list item, it is removed

const button = document.getElementById('addTask')

const toDo = document.getElementById('tasks')

button.addEventListener('click', function(){ 
  let input = document.getElementById('textField').value 
  toDo.appendChild(document.createElement('li')) 
  let newItem = toDo.children[toDo.children.length-1]
  newItem.innerHTML = input 
  document.getElementById('textField').value = "";


newItem.addEventListener('click', function (){
  newItem.setAttribute('style','text-decoration:line-through') 
  setTimeout(() =>{ 
      newItem.remove() 
  },1000)
})
})
 