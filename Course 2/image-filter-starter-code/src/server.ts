import fs, { fchmod } from 'fs';
import express, { Router, Request, Response } from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';
import { filter } from 'bluebird';
import { constants } from 'os';
import { composite } from 'jimp';

(async () => {
  
  // Init the Express application
  const app = express();
  
  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());
  
  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]
  
  /**************************************************************************** */
  
  // Get a greeting to a specific person to demonstrate req.query
  // > try it {{host}}/persons?name=the_name
  
  app.get( "/filteredimage/", ( req: Request, res: Response ) => {
    let { url } = req.query;
    
    if ( !url ) {
      return res.status(400)
      .send(`url is required`);
    }
    console.log(`the URL called was ${url}`);
    async function f1() {
      var x = await filterImageFromURL(url);
      console.log(x);
      res.sendfile(x);
     
      // console.log(files)  
      }
      f1();  
      const dir = "src/util/tmp/";
      const files = fs.readdirSync(dir);
      for (let i=0; i<files.length; i++) {
        files[i] =dir+files[i];
        
      } 
      
      deleteLocalFiles(files)
    })
    
    
        
    

    // fs.readdir(dir, (err, files) => {
    //   if (err) throw err;
      
    //   for (const file of files) {
    //     let newFile = dir + file;
    //     fs.unlink(newFile, err => {
    //       if (err) throw err;
    //     });
    //   }
    // });
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //   fs.unlink('src/util/tmp/sample.txt', function (err) {
  //     if (err) throw err;
  //     // if no error, file has been deleted successfully
  //     console.log('File deleted!');
  // });
  
  /*
  function()
  await {filteredpath = filterImageFromURL(url)};
  return res.status(200)
  .send(res.sendFile(filteredpath));
  */
  
  
  //! END @TODO1
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  
  
  // Start the Server
  app.listen( port, () => {
    console.log( `server running http://localhost:${ port }` );
    console.log( `press CTRL+C to stop server` );
  } );
})();