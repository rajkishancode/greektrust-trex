import React from "react";
import { Toaster } from "react-hot-toast";

const HotToast = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={
        { className: "",
         duration: 1300, 
         style:{
            background:'#111',
            color:"#fff",
            border:"1px solid"
             },
             success:{
                duration:1300,
                theme:{
                    primary:'green',
                    secondary:'black'
                }
             }
             }}
    />
  );
};

export default HotToast;
