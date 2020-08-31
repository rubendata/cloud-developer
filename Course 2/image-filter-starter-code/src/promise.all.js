function createFile(url) {
      return new Promise((resolve, reject) => {
            setTimeout(()=>{
                  console.log(`1. a new file was created from ${url}`)
                  resolve("2. file was created");
                  reject(new Error ("file was not created"))
            }, 2000)
      })
}

function getFiles (path){
      return new Promise((resolve, reject) => {
            setTimeout(() => {
                  console.log(`3. now we have files from ${path}`);
                  resolve("4. we are the files");
                  reject(new Error ("did not get files"))
            },
            1000)})
      };
      
function deleteFiles (){
      return new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve(`5. all files were deleted`);
            reject(new Error ("files were not deleted"))
      },
      1000)})
}
      
/*wenn man mehrere promise gleichzeitig laufen lassen will und sie nicht chainen möchte*/

Promise.all([createFile(), getFiles()])
.then(resolve => console.log(resolve))