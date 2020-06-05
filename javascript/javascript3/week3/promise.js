/*Lets use the github api to see what repositories different users have. 
You can use this url to get repositories for a specific github username, 
in this case the username benna100: https://api.github.com/search/repositories?q=user:benna100. 
Select 3 classmates github username that you want to show repositories for.

Fetch all the 3 classmates repositories at the same time using Promise.all. 
Remember the all at once exercise here?

When you have the data for the different repositories, render the fullname of the repo, 
url of the repo, and the owner of the repo. See github-repos as an example of how the renderered repos should look. 
You are more than welcome to style it a bit nicer!*/

const url = "https://api.github.com/search/repositories?q=user:";
const urlPanivita = url + "panivita";
const urlFzscodes = url + "fzscodes";
const urlBasafilm = url + "basafilm";

const getData = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((result) => showData(result));
};

const showData = (data) => {
  const body = document.querySelector("body");
  const ul = document.createElement("ul");
  ul.innerText = "Owner:" + data.items[0].owner.login;

  data.items.forEach((item) => {
    const li = document.createElement("li");
    li.innerText =
      "Fullname:" + item.full_name  + " " + ("Url:" + item.html_url);
    ul.appendChild(li);
  });

  body.appendChild(ul);
};

function getAllData() {
  Promise.all([
    getData(urlPanivita),
    getData(urlFzscodes),
    getData(urlBasafilm),
  ]);
}
getAllData();
