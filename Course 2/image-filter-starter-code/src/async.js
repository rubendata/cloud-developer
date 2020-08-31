function createFile(url) {
      return new Promise((resolve, reject) => {
            setTimeout(()=>{
                  resolve(`file from ${url}`);
                  reject(new Error ("file was not created"))
            }, 2000)
      })
}

function getFiles (path){
      return new Promise((resolve, reject) => {
            setTimeout(() => {
                  resolve(`file list in ${path}`);
                  reject(new Error ("did not get files"))
            },
            1000)})
      };
      
function deleteFiles (){
      return new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve(`all files were deleted`);
            reject(new Error ("files were not deleted"))
      },
      1000)})
}
      
      
async function processFiles(){
     try{ const file = await createFile("www.url.de");
      console.log(file);
      const fileList = await getFiles ("tmp");
      console.log(fileList);
      const deleteMe = await deleteFiles();
      console.log(deleteMe)
      }
      catch(err){
            console.log(err)
      }
}

processFiles();
