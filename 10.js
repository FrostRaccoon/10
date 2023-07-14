/*Задание 1:
 
1. Установить расширение JSON viewer в браузере.
2. Необходимо найти бесплатный api в интернете, из которого мы можем получить 
массив с данными, текстом, картинками.
3. Необходимо скопировать json ответ из данного api, и вставить полученную 
строку в data.js файл в переменную.
4. Создать в html `<div class="content"></div>`.
5. Подключить данный файл data.js к странице с нашими html и js.
6. Необходимо вывести на страницу (в div, который создали в 4 пункте) элементы 
из json-массива (который создавали в 5 пункте). Данные должны быть выведены 
оформленно, в виде корректного html.



<div class="character">
    <h3 class="name">Rick Sanchez</h3>
    <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="photo Rick Sanchez" class="character__photo">
    <p class="discription__character">Live on Earth (C-137)</p>
</div>
*/

const dataJson = JSON.parse(data);

console.log(dataJson);

const divEl = document.querySelector(`.content`);

console.log(dataJson.results[0]);

const tempEl = document.getElementById(`character__template`);

function renderCharacter(person) {
  const cloneEl = tempEl.content.cloneNode(true);
  const characterPhotoEl = cloneEl.querySelector(`.character__photo`);

  cloneEl.querySelector(`.name`).textContent = person.name;
  characterPhotoEl.src = person.image;
  characterPhotoEl.alt = `Photo ${person.name}`;
  cloneEl.querySelector(
    `.discription__character`
  ).textContent = `Status: ${person.status}, Species: ${person.species}, Gender: ${person.gender}`;
 divEl.appendChild(cloneEl);
}

dataJson.results.forEach((character) => {
  renderCharacter(character);
});

//-------------------------------------------------------------------------

// function renderCharacters(persons) {
//   let content = ``;
//   for (let i = 0; i < persons.length; i++) {
//     const person = persons[i];
//     content += `
//     <div class="character">
//         <h3 class="name">${person.name}</h3>
//         <img src="${person.image}" alt="Photo ${person.name}" class="character__photo">
//         <p class="discription__character">Status: ${person.status}, Species: ${person.species}, Gender: ${person.gender}</p>
//     </div>`;
//   }
//   divEl.innerHTML = content;
// }

// renderCharacters(dataJson.results);

//-----------------------------------------------------------------------------

// function renderCharacter(person) {
//   const divCharacter = document.createElement(`div`);
//   divCharacter.classList.add(`character`);

//   const h3El = document.createElement(`h3`);
//   h3El.classList.add(`name`);
//   h3El.textContent = person.name;

//   const imgEl = document.createElement(`img`);
//   imgEl.classList.add(`character__photo`);
//   imgEl.src = person.image;
//   imgEl.alt = `photo ${person.name}`;

//   const pEl = document.createElement(`p`);
//   pEl.classList.add(`discription__character`);
//   pEl.textContent = `Status: ${person.status}, Species: ${person.species}, Gender: ${person.gender}`;

//   divEl.appendChild(divCharacter);
//   divCharacter.prepend(h3El);
//   divCharacter.appendChild(imgEl);
//   divCharacter.appendChild(pEl);
// }

// dataJson.results.forEach((character) => {
//   renderCharacter(character);
// });
