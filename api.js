// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// function project() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => displayUsers(data));
// }
// function displayUsers(data) {
//   const ul = document.querySelector(".userId");
//   for (let x of data) {
//     const li = document.createElement("li");
//     li.innerText = x.name;
//     ul.appendChild(li);
//   }
// }

// function loadPosts() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((data) => dataEntry(data));
// }
// loadPosts();
// function dataEntry(posts) {
//   const postContainer = document.querySelector("#sectionId");
//   for (let post of posts) {
//     console.log(post);
//     let div = document.createElement("div");
//     div.classList.add("post");
//     div.innerHTML = `
//     <h3  > ${post.title}</h3>
//     <p> ${post.body}</p>`;
//     postContainer.appendChild(div);
//   }
// }

// /////////////////////////=============================={kanye.rest}
// const loadQuotes = () => {
//   fetch("https://api.kanye.rest/")
//     .then((res) => res.json())
//     .then((data) => blockQuotes(data));
// };

// loadQuotes()
// function blockQuotes(data){
//   console.log(data.quote);
//   let blockId = document.getElementById('quote')

//     let para = document.createElement('p')
//     para.innerHTML = data.quote;
//     blockId.appendChild(para)
// }

function restCountry() {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => countries(data));
}
restCountry();

function countries(countries) {
  const tableBody = document.querySelector("#tableBody");
  countries.forEach((country) => {
    console.log(country.length);
    const tableRow = document.createElement("tr");
    // for(let i = 0 ; i <= country.length; i++){
    //  tableRow.innerHTML = i % 2 == 0 ? tableRow.classList.add(table-active): tableRow.classList.remove(table-active);
    // }
    tableRow.innerHTML = `
    <th class="col-2 "><img class='w-25' src='${country.flag}' /></th>
    <td class='col-2'>${country.name}</td>
    <td class='col-1'>${country.capital}</td>
    <td class='col-1'>${country.population}</td>
    <td class='col-1'>${country.region}</td>
    <td class='col-2'>${country.subregion}</td>
    <td class='col-1'>${country.area}</td>
    <td class='col-2'>${country.nativeName}</td>
    <td >${country.numericCode}</td>
    `;
    tableBody.appendChild(tableRow);
  });
}

// function countries(countries) {
//   const divId = document.querySelector("#countries");

//   countries.forEach((country) => {
//     const div = document.createElement("div");
//     // const h3 = document.createElement("h3");
//     // const p1 = document.createElement("p");
//     // const p2 = document.createElement("p");
//     // const button = document.createElement('button')
//     div.classList.add("countries");
//     div.innerHTML = `
//     <h3> Country Name :  ${country.name} </h3>
//     <p> Country Capital : ${country.capital}</p>
//     <p>Country Population : ${country.population}</p>
//     <button onclick="detail('${country.name}')" class='btn btn-primary'> detail </button>`;
//     // button.innerText = `details`;
//     // h3.innerText = 'Country Name : '+ country.name;
//     // p1.innerText = 'Country capital : '+country.capital;
//     // p2.innerText = 'Country population : '+country.population;
//     divId.appendChild(div);
//     // div.appendChild(h3);
//     // div.appendChild(p1);
//     // div.appendChild(p2);
//     // div.appendChild(button)
//   });
// }
// function detail(name) {
//   const url = `https://restcountries.eu/rest/v2/name/${name}`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => counrtyDetail(data[0]));
// }
// function counrtyDetail(country) {
//   const detail = document.querySelector(".countryDetail");
//   detail.innerHTML = `<h2> ${country.name} </h2>
//   <img class='w-25' src='${country.flag}'/>`;
//   console.log(country);
// }

// function countries(data) {
//   const tableBody = document.getElementById("tableBody");
//   data.forEach((country) => {
//     // console.log(country);
//     const td = document.querySelector("td");
//     const th = document.querySelector("th");
//     const tr = document.querySelector("tr");
//     th.innerText = country.name;
//     td.innerText =country.capital
//     tableBody.appendChild(tr);
//     tr.appendChild(th);

//     tr.appendChild(td)
//     tr.appendChild(td)
//   });
// for (let country of data) {
//   console.log(country);
//   const tr = document.querySelector("tr");
//   tableBody.innerHTML = `
//   <tr>
//     <th> ${country.name} </th>
//     <td> ${country.capital}</td>
//     <td> ${country.region}</td>
//     <td> ${country.population}</td>
//   </tr>
//     `;

// }
// }
