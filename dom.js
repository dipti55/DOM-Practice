//Explore the Document
console.dir(document);

//Access the content from the URL
console.log(document.URL);
console.log(document.title);
console.log(document.body);
console.log(document.domain);

//If you want to update or change them dynamically using javaScript
const tittle = document.all[10];
tittle.textContent = 'Hi I m new Tittle'
console.log(tittle);

const dipti = document.all[13]
dipti.textContent = 'Hi Item'

// Identifier Methods - Id, classNmae, tag
// 1. Id
const heading = document.getElementById('header-title')
console.log(heading);
heading.textContent = 'New Text'
//  you can also change the tag from html i.e h1 to h3

heading.innerHTML = '<h3>New Text</h3>'

// change in css
// background-color --> camelCase ---> backgroundColor
// padding-left --> paddingLeft

heading.style.color = 'red'
heading.style.borderBottom = '5px solid black'

//2. className
const items = document.getElementsByClassName('list-group-item')
for(let i=0; i<items.length; i++){
    if(i%2==0){
        items[i].style.backgroundColor='grey'
    }
}

//3. tagName
const itemss = document.getElementsByTagName('li')
for(let i=0; i<itemss.length; i++){
    if(i%2==0){
        itemss[i].style.backgroundColor = 'yellow'
    }
}

//querySelector  = id + class + tag
const item1 = document.querySelector('#header-title')
console.log(item1);

const item2 = document.querySelector('.list-group-item')
console.log(item2)

const item3 = document.querySelector('li')
console.log(item3);

//5. querySelectorAll = id + class + tag
const item4 = document.querySelectorAll('#header-title')
console.log(item4);

const item5 = document.querySelectorAll('.list-group-item')
console.log(item5);

const item6 = document.querySelectorAll('li')
console.log(item6);

//DOM Event --> addEventListener

const button = document.querySelector('#button')
button.addEventListener('click', diptiEvent)

function diptiEvent(){
    alert('Button was clicked')
}

//INPUT TEXT EVENT
// const text = document.querySelector('#text-input')
// text.addEventListener('focus', () => {
//     console.log('FOCUSED ON ME');
// })

// text.addEventListener('blur' , ()=>{
//     console.log('BLURED ON ME');
// })

// text.addEventListener('cut', ()=>{
//     console.log('CUT EVENT');
// })

// text.addEventListener('copy', ()=>{
//     console.log('COPY EVENT');
// })

// text.addEventListener('paste', ()=>{
//     console.log('PASTE EVENT');
// })

// EVENT EMITTERS | Event Parameter
// keyup and keydown EVENt
//  const textInput = document.getElementById('text-input')
// textInput.addEventListener('keyup',()=>{
//     console.log('Key has been released');
// })

// textInput.addEventListener('keydown',()=>{
//     console.log('Key is being pressed');
// })

// textInput.addEventListener('keyup',(dipti)=>{
//     console.log(dipti.target.value);
// })

// const buttonSubmit = document.getElementById('submitbtn')
// buttonSubmit.addEventListener('click',(ee)=>{
//     ee.preventDefault();
//     console.log(ee);
// })

// const box = document.getElementById('box')
// box.addEventListener('mouseenter', (d)=>{
// box.style.backgroundColor = `rgb(${d.offsetX},${d.offsetY},100)`
    
// })

// box.addEventListener('mouseleave', (d)=>{
//     box.style.backgroundColor = `rgb(${d.offsetX},${d.offsetY},100)`
        
//     })

// DOM TRAVERSALS - A method to access HTML elements based on relationships
// parent, children, siblings.

// 1. Parent Node 
 
const list = document.getElementById('items')
// console.log(list.parentElement);
// list.parentElement.style.backgroundColor = 'blue';
// console.log(list.parentElement.parentElement);
// list.parentElement.parentElement.style.backgroundColor='pink'

const button1 = document.getElementById('button')
button.addEventListener('click', ()=>{
    list.parentElement.style.backgroundColor='red'
})

// 2. CHILDREN NODES
console.log(list.children);
console.log(list.children[0]);

// firstChild, lastChild
console.log(list.firstChild);
console.log(list.firstElementChild);

console.log(list.lastElementChild);

// 3. SIBLINGS

console.log(list.previousElementSibling);
console.log(list.nextElementSibling);

// vvvvvvvvvvvvv IMPORTANT
// Creating HTML ELements

// const newLI = document.createElement('li')

// set attributes of creted HTML Element
// newLI.id = 'new-li'
// newLI.className = 'list-group-item'
// newLI.textContent = 'Item7'

// const list1 = document.getElementById('items')
// list1.appendChild(newLI)
// console.log(newLI);

//Adding items through form

const newwlist = document.createElement('li')
newwlist.className = 'list-group-item'

const text = document.getElementById('text-input')
text.addEventListener('keyup',(ee)=>{
    const diptiData = ee.target.value
    newwlist.textContent = diptiData;
    // console.log(newwlist);
    const buttton2 = document.getElementById('submitbtn')
    buttton2.addEventListener('click',(ee)=>{
          ee.preventDefault()
          const list = document.getElementById('items')
          list.appendChild(newwlist)
    console.log(newwlist);
    })
})

// console.log(newlist);