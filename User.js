import React from "react";
import Header from "./Header"; 
import NewComponent from "./NewComponent";

function User(props) {
   // console.log(props);
    return (
        <>
           <div>
           < Header data={props}/>
           <NewComponent />
            </div>



        <h1>{props.info.name}</h1>
        <h1>{props.info.email}</h1>
        <img src={props.info.picture} alt="" />

        <br />
        <br />

        <button style={{width: "100px", height: "40px"}}
        onClick={() => {
            window.localStorage.clear();
            window.location.assign("http://localhost:3000")
        }}
        >
        Logout
    </button> 
        </>

    );
}

export default User;