const itemName = document.querySelector('#createItem');
const list = document.querySelector('#list');

document.addEventListener('click', clickHandler);
document.addEventListener('keyup', keyHandler);

function clickHandler(e) {
  const target = e.target;
  switch (true) {
    case target.className === 'button is-success is-small':
      itemDone(e);
      break;
    case target.id === 'createItemBtn':
      generateList();
      break;
    default:
  }
}

function keyHandler(e) {
  switch (true) {
    case e.key === 'Enter':
      generateList();
      break;
    default:
  }
}

function CreateListItem() {
  this.div1 = document.createElement('div');
  this.div2 = document.createElement('div');
  this.div3 = document.createElement('div');
  this.div4 = document.createElement('div');
  this.li3a = document.createElement('li');
  this.btn4a = document.createElement('button');

  this.div2.className = 'columns';
  this.div3.className = 'column';
  this.div4.className = 'column is-narrow';
  this.btn4a.className = 'button is-success is-small';
  this.btn4a.innerText = '\u2714';
  this.li3a.innerText = itemName.value;

  list.append(this.div1);
  this.div1.append(this.div2);
  this.div2.append(this.div3);
  this.div2.append(this.div4);
  this.div3.append(this.li3a);
  this.div4.append(this.btn4a);
}

function generateList() {
  list.className = 'box is-flex-direction-column';
  new CreateListItem();
  itemName.value = '';
}

function itemDone(e) {
  const target = e.target;
  target.parentElement.parentElement.parentElement.remove();
}
