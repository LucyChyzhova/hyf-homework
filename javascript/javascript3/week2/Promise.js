/*Promise that resolves after set time
Create a function that has one parameter: resolveAfter. 
Calling this function will return a promise that resolves after the resolveAfter seconds has passed.

Here is an example of how to use the promise

makeUpYourOwnFunctionName(8)
    .then(() => {
        console.log('I am called asynchronously'); // logged out after 8 seconds
    })
When you have written the promise, use it with async/await*/

const timeDelate = (resolveAfter) => {
    return new Promise((resolve) => {
    setTimeout(() => {
            resolve("I am called asynchronously");
    },resolveAfter* 2000);
});
};
timeDelate(2)
    .then((resolve) => {
        console.log(resolve);
    })
    .catch((error) => {
        console.log(error);
    });

const getTimeDelate = async () => {
    const timeoutDate = await timeDelate(6);
    console.log('async/await;', timeoutDate);
};
getTimeDelate();
