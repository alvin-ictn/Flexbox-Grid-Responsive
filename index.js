let data = JSON.parse(localStorage.getItem('cardcontent')) || [];

const cardContainer = document.querySelector('.content--cards'),
      addButton = document.querySelector('.content--panel--add'),
      searchBar = document.querySelector('.content--panel--search-search-item');

const renderContent = (content = data) => {
  cardContainer.innerHTML = "";
  content.map(item => {
    let {id, title, text} = item;
    cardContainer.innerHTML += `
    <div id="${id}" class="content--cards--card-item">
      <label for="" class="content--cards--card-item--title">${title}</label>
      <p class="content--cards--card-item--text">${text}</p>
      <div class="content--cards--card-item--id">${id}</div>
    </div>
    ` 
  })
}

if(data) renderContent(data)

addButton.addEventListener('click', () => {
  let setId = data[data.length-1] ? data[data.length-1].id : 0;
  data = [...data,{
    id: ++setId,
    title : "Lorem, ipsum dolor",
    text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release"
  }]
  console.log(data)
  localStorage.setItem('cardcontent', JSON.stringify(data));
  renderContent(data);
})

searchBar.addEventListener('keyup',function(keystroke){
  if(this.value === "") renderContent(data)
  if(keystroke.key.match(/.*[\d]/))  renderContent(data.filter(item => item.id == parseInt(keystroke.key)))
})