import app from "./app.js";
import dbConnection from "./dbConnection/db.js";

dbConnection()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`app is running on ${process.env.PORT} and its live on render`);
      console.log ("Hey this is anshu Pandey ") ; 
    });
  }) 
  .catch(() => {
    console.log("app is not running ");
  });

  
 


  