/*Do the 3 steps below using promises and .then.
Do the 3 steps below using async/await
The 3 steps:

Fetch some data from an api.
After that data has been fetched, wait 3 seconds
Log out the data from the api
Which way do you prefer, the promise way or the async/await way?*/

const url =
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";

///PROMISE and .THEN

const getDataWithPromise = () => {
  fetch(url)
    .then((res) => res.json())
    .then((result) => showData(result));
};

const showData = (data) => {
  return new Promise((resolve, reject) =>
    resolve(setTimeout(() => console.log("by promise", data), 3000))
  );
};
//ASYNC/AWAIT

const getDate = async () => {
  let response = await fetch(url);
  let result = await response.json();
  await timeout(2000);
  
  console.log("async/await", result);  
};

function timeout(timeInterval) {
  return new Promise((resolve) => setTimeout(resolve, timeInterval));
}

getDataWithPromise();
getDate();
