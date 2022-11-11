const list = document.querySelector('ul');

function renderItem(name, number) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <h2 class='contact__title'>
      ${name}
    </h2>
    <a href='tel:${number}'>${number}</a>
    `;
  listItem.classList.add('contact');
  list.append(listItem);
}

const query = new XMLHttpRequest();
query.open('GET', 'https://contacts-api-learn.herokuapp.com/api/contacts');
query.send();
query.onload = () => {
  const contacts = JSON.parse(query.response);
  for (let key in contacts) {
    const contact = contacts[key];
    renderItem(contact.name, contact.number);
  } 
}
