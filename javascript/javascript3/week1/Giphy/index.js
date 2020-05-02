/*Create a site where a user can search for any word. 
When searching a word the application will find a 
gif using the searched word using the giphy api: https://developers.giphy.com/docs/ 
Here is how it is going to work: The user can write some text indicating the gif he is looking for, 
click a button and then a gif will be found (using the searched word) and the gif will be displayed to the user.
Add an input element, where the user can specify how many gif results the user wants.
Try break this problem into smaller problems and write down how you are going to solve the problem BEFORE you start coding.*/

/*1. Create an input element and a button, which will take word and amount from the input 
2. create second input element, when user can specify how many gif results the user wants.
3. Sign up  https://developers.giphy.com/docs/ 
4. Get api key
5. find out where is gif element in  https://developers.giphy.com/docs/
6. create a function which will take a word from search and amount input and find the gif by fetch
7. creat a function which can deliver gif to the div container  */

const fetchGifByTitle = (gifTitle, limit) => {
  if (gifTitle != "") {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=IrDhdymJxLMbL3MjwlZvV0kad4drAY93&q=${gifTitle}&limit=${limit}`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        const gifUrls = result.data.map((gif) => gif.id);
        showGifs(gifUrls);
      });
  }
};

const onClick = function () {
  const gifTitle = document.getElementById("gif").value;
  const limit = document.getElementById("amount").value;

  fetchGifByTitle(gifTitle, limit);
};

const showGifs = (gifUrls) => {
  let gifContent = document.querySelector('.content')
  let gifElements = '';
  gifUrls.forEach((gifId) => {
    gifElements += `<img src='https://media.giphy.com/media/${gifId}/giphy.gif'/>`;
  });

  gifContent.innerHTML = gifElements;
};

document.getElementById("btn").addEventListener("click", onClick);
