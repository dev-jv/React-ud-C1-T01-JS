
//------------------------------------------------------------------------------------------------------ A promise 1
const getImagePromiseA = () => {
    const promise = new Promise((resolve, reject) => {
        resolve('https://ajskdhaskjdhajs.com')
    })

    return promise;
}

getImagePromiseA().then( console.log );

//------------------------------------------------------------------------------------------------------ A promise 2

const getImagePromiseB = () => {
    return new Promise((resolve, reject) => {
        resolve('https://ajskdhaskjdhajs.com')
    });
}

getImagePromiseB().then( console.log );

//------------------------------------------------------------------------------------------------------ A promise 3

const getImagePromiseC = () => {
    return new Promise(resolve => resolve('https://ajskdhaskjdhajs.com'));
}

getImagePromiseC().then( console.log );

//------------------------------------------------------------------------------------------------------ A promise 4

const getImagePromiseD = () => new Promise(resolve => resolve('https://ajskdhaskjdhajs.com'));

getImagePromiseD().then( console.log );

//------------------------------------------------------------------------------------------------------ A function 1


const getImagePromiseE = () => {
    return 'https://ajskdhaskjdhajs.com'
};

console.log(getImagePromiseE())

//------------------------------------------------------------------------------------------------------ A function 1

const getImagePromiseF = () => 'https://ajskdhaskjdhajs.com';

console.log(getImagePromiseF())

//--------------------------------------------------------------------------- A function with async 1 vs a Promise

const getImagePromiseG = async () => 'https://ajskdhaskjdhajs.com';

getImagePromiseG().then( console.log );

const getImagePromiseH = () => new Promise(resolve => resolve('https://ajskdhaskjdhajs.com'));

getImagePromiseH().then( console.log );

//----------------------------------------------------------------------------- Promises with Async, Await, Try-Catch
const getImage = async() => {

    try {
        const apiKey = 'C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );

    } catch (error) {
        console.error(error)
    }
};

 getImage();
