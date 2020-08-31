console.log("start");

function createFile(url, callback) {
      setTimeout(()=>{
            console.log(`a new file was created from ${url}`)
            callback("file was created")
      }, 2000)
}

function getFiles (path, callback){
      setTimeout(() => {
            console.log(`now we have files from ${path}`);
            callback("I am a file from the callback");
      },
      1000)
}

function deleteFiles (){
            console.log(`all files were deleted`);
      
}

function fileProcess(){
      createFile("www.url.de", (file)=>{
            console.log(file);
            getFiles("./", (path) => {
                  console.log(path);
                  deleteFiles();
            })
      })
}

fileProcess();

console.log("finish");
