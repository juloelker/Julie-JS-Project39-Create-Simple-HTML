const li = document.createElement('li');

//add class and id
li.className = 'collection-item';
li.id = 'new-id';

//add attributes to the element tag
li.setAttribute('title', 'New Item');

//insert text into the li, 1st method:
// li.appendChild(document.createTextNode('Hello World!'));
li.innerText = 'Hello World!';

document.querySelector('ul.collection').appendChild(li);

//
//
//put the 2nd and 3rd list items into an event accessed by clicking a button

const button = document.querySelector('.btn');
const ul = document.querySelector('ul.collection');

button.addEventListener('click', addNewListItems);

function addNewListItems(e) {
  //add 2nd bullet with link
  const liTwo = document.createElement('li');
  liTwo.innerText = 'Goodbye World!';
  ul.appendChild(liTwo);

  const link = document.createElement('a');
  link.setAttribute('href', 'http://www.google.com');
  link.setAttribute('target', '_blank');
  link.innerHTML = `&emsp; &emsp; X`;

  liTwo.appendChild(link);

  //
  //append a third li and disable the button
  const liThree = document.createElement('li');
  liTextThree = document.createTextNode('this is the 3rd bullet');
  liThree.appendChild(liTextThree);

  ul.appendChild(liThree);
  button.disabled = true;
  e.preventDefault();
}
