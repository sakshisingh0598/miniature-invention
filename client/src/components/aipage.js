import { useState } from "react";

export default function Page3({income, expenses}){

    const [clicked, setClicked] = useState(false);
    const [data, setData] = useState(undefined);

    const pageStyle = {
        margin: "95px 0 0 0",
    }
    const buttonStyle = {
        width:"150px",
        marginTop:"20px",
        background:"#67BA72",
        borderRadius:"5px",
        border:"none",
        fontFamily: "arial",
        cursor: "pointer",
        fontWeight:"200"
      
      }
      const prompt = "generate me 3 budgeting, or financial tips for a person with the following income and expenses:\n income: "+ String(income)+"\n expenses: "+JSON.stringify(expenses);
      const requestOptions = {
        method: 'POST', // Change to 'GET' or 'PUT' or any other HTTP method if needed
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: prompt }),
      };

      const apiUrl = "http://localhost:3001/api";
    
      function getResponse(){
        console.log(income);
        console.log(expenses);
        console.log(prompt);
        fetch(apiUrl,requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setData(data.message)
        console.log(data)});
        setClicked(true);
      }
    


    return(
        <div style={pageStyle}>
            <h1>AI Reccomendations</h1>
            <button style={buttonStyle} onClick={getResponse}>Generate</button>
            {(data)? <div style={{display:"flex",justifyContent:"center"}}>
                <p style={{width:"60%", textAlign:"center"}}>{data}</p>
            </div> : <p></p>}
        </div>
    )
}