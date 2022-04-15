import Loader from "react-loader-spinner";

import React from 'react'


function Loading() {
    return (
       <div style={{width:'100vw', height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
       </div>
    )
}

export default Loading

