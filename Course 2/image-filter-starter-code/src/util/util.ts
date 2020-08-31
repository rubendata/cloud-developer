import fs from 'fs';
import Jimp = require('jimp');

// filterImageFromURL
// helper function to download, filter, and save the filtered image locally
// returns the absolute path to the local image
// INPUTS
//    inputURL: string - a publicly accessible url to an image file
// RETURNS
//    an absolute path to a filtered image locally saved file
export async function filterImageFromURL(inputURL: string): Promise<string>{
    return new Promise( async resolve => {
        try{const photo = await Jimp.read(inputURL)
        
        const outpath = '/tmp/filtered.'+Math.floor(Math.random() * 2000)+'.jpg';
        await photo
        .resize(256, 256) // resize
        .quality(60) // set JPEG quality
        .greyscale() // set greyscale
        .write(__dirname+outpath, (img)=>{
            resolve(__dirname+outpath);
        })
    }catch{console.log("could not create file. please check URL")};
    });
}

// deleteLocalFiles
// helper function to delete files on the local disk
// useful to cleanup after tasks
// INPUTS
//    files: Array<string> an array of absolute paths to files
export async function deleteLocalFiles(files:Array<string>){
    console.log("files to delete: "+files)
    
    console.log("deleting files");
    for( let file of files) {
        fs.unlinkSync(file);
    
    
}
}

export async function createFile(url:string) {
    let newFile = await filterImageFromURL(url);
    console.log("created: "+newFile);
    return( newFile);
    
}

export async function getFiles(path:string) {
    console.log("start getting files")
    const files = await fs.readdirSync(path);
    for (let i=0; i<files.length; i++) {
        files[i] =path+files[i];
    } 
    console.log("finished getting files")
    return files;
    
}
