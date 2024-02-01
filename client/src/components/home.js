import { useState } from "react";

export default function Home({changeCurrentPage, updateSavings}){

    const [savings, setSavings] = useState('');
    const [errorMessage, setErrorMessage] = useState(false);

    const pageStyle = {
        display:"flex",
        flexDirection:"column",
        margin: "65px 0 0 0",
        alignItems:"center",
    }

    const ulStyle = {
        width: "30%",
      };

    const mainStyle = {
        width:"60%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }

    const textboxStyle = {
        outline:"none",
        height:"20px",
        borderRadius:"5px",
        textAlign:"center",
        fontFamily: "arial",
        background: "#393C45",
        color:"white",
        border:"none"
    }

    const buttonStyle = {
        width:"120px",
        marginTop:"20px",
        background:"#67BA72",
        borderRadius:"5px",
        border:"none",
        fontFamily: "arial",
        height:"30px",
        cursor: "pointer",
        fontWeight:"200"

    }

    function handleClick(){
        if (isNaN(savings) || savings < 200){
            //show error dialogue
            setErrorMessage(true);
        }
        else{
            updateSavings(savings)
            changeCurrentPage("page1")
        } 
    }
    

    return(
        <div style={pageStyle}>
            <div style={mainStyle}>
                <h1 style={{fontWeight:"200",fontSize:"40px"}}>Welcome to Bloom.</h1>
                <p>Knowledge is powerful. Our website aims to reinforce this idea, promoting financial literacy and the capabilities of saving and investing. Saving and investing are two powerful ways to build towards financial goals and retirement. </p>
                <p style={{margin:"20px 0"}}>Our website aims to display the importance of financial literacy through three key features:</p>
                <ul style={ulStyle}>
                    <li>Smart Budgeting Tool</li>
                    <li>Investment Visualizer</li>
                    <li>AI Powered Money Planner</li>
                </ul>
                <p style={{margin:"20px 0"}}>To get started, enter your estimated monthly income.</p>
                <input type="text" style={textboxStyle} onChange={(e) => setSavings(e.target.value)}/>
                <button style={buttonStyle} value={savings} onClick={() => handleClick()}>Get Started</button>
                {errorMessage && (<p style={{color:"red"}}> Please enter a number above 100. </p>
)}
            </div>
        </div>
    )
}