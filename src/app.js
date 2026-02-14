import footbal from "./footbal.json";
import template from "./template-footbal.hbs";
console.log(template);

const listRef = document.querySelector(".list");




listRef.innerHTML = template({footbal})






// function createItems(array) {
//   const item = array
//     .map(({ name, image, position, team, rating }) => {
//       return `<li class="item">
//         <img src="${image}" alt="${name}" class="image" width="300px">
//         <h2 class="title">${name}</h2>
//         <h3 class="subtitle">${team}</h3>
//         <p class="text">${position}</p>
//         <p class="num">${rating}</p>
//     </li>`;
//     })
//     .join("");
//   listRef.innerHTML = item;
// }
// createItems(footbal);
