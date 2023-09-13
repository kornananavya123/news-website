import React,{useEffect, useState} from "react";

function NewComponent(){
const [newData,setNewData] = useState([]);

useEffect(() => {
      (async function f1() {
            let url = ("https://gnews.io/api/v4/search?q=india&lang=en&country=us&max=10&apikey=916088ba02890add290f53c6f0e2f386");
            const response = await fetch(url);
            const data = await response.json();
             console.log(data);
             setNewData(data["articles"]);
      })();
        },[]);
    
    return(
        <div> this is NewComponent</div>
    )
}
export default NewComponent;