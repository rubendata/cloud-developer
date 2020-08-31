/*basics*/
const promise = new Promise ((resolve, reject) => {
      setTimeout(() => {
            resolve(console.log("success"))
            reject(new Error("random error message"))
      },10)
});

promise.then(result => {
     console.log(result)
}).catch(error => {
      console.log(error.message);
});

/*basics END*/

