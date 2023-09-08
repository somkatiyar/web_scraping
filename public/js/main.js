function clickMe() {


   const url = 'http://localhost:3000/scrap/scrap_site';

fetch(url)
  .then(response => response.json())
  .then(jsonData => console.log(jsonData))
}