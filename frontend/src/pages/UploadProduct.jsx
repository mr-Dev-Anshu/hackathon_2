import React, { useEffect } from "react";

export default function UploadProduct() {
    const [path , setPath] = React.useState() ;

    useEffect (()=> {
           console.log (path)
    } )
  return (
    <div>
      <div className="flex justify-center text-4xl h-screen  text-black pt-24 ">
        {" "}
          
        <div>
        <div> Upload Product</div>

        <div>
        <img src="http://res.cloudinary.com/dhtaesglc/image/upload/v1708801530/amks8reyb7i8b7i0uonq.png" alt="Cloudinary Image" />
        </div>
       
        </div>
      </div>
    </div>
  );
}
