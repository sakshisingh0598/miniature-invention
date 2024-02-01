
import { Line } from "react-chartjs-2";
import { CategoryScale, Chart as ChartJS, LinearScale, PointElement, LineElement } from "chart.js";
import React, { useState } from 'react';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const pageStyle = {
  margin: "95px 0 0 0",

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



export default function InvestmentCalculator({investment, changeCurrentPage}) {
  const [investmentPercentage, setInvestmentPercentage] = useState(15);
  const [currentAge, setCurrentAge] = useState(null);
  const [data,setData] = useState(undefined);
  console.log("monthly investment:",investment)
  const annualInvestment = investment*12;
  const yearArray = [];
  const equityArray = [];
  const calculateCompoundInterest = () => {
    const retirementAge = 67; // Adjust as needed
    const annualReturnRate = 0.10; // 10% return per year  
    const yearlyContribution = annualInvestment;
  
    let principal = yearlyContribution;
    //let totalAmount = 0;
    for (let age = +currentAge; age <= retirementAge; age++) {
      yearArray.push(
        String(age),
      );
      equityArray.push(
        parseFloat(principal.toFixed(2)),
      );
      principal = principal*(1+annualReturnRate)+yearlyContribution;
    }
    console.log(equityArray);
    var data = {
      labels: yearArray,
      datasets: [{
        label: `Coins Available`,
        data: equityArray,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "green",
        borderWidth: 1
      }]
    };
    setData(data);
  };
  
  function handleClick() {
      if (data){
        changeCurrentPage("page3");
      }
  }



  return (
    <div>
      <h1>S&P 500 Investment Calculator</h1>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <label>Current Age:</label>
        <input style={{width:"100px"}}
          type="number"
          value={currentAge}
          onChange={(e) => setCurrentAge(e.target.value)}
        />
      </div>
      <button style={buttonStyle} onClick={()=>calculateCompoundInterest()}>Generate</button>
      {data? 
        <div>
            <Line
            height={150} // set an appropriate height
            width={400}
            data={data}
            options={{
              scales: {
                x: {
                  ticks: {
                    color: '#C4C4C4', // Change the color of x-axis labels
                  },
                },
                y: {
                  ticks: {
                    color: '#C4C4C4', // Change the color of y-axis labels
                  },
                },
              },
            }}/>
            <button style={buttonStyle} onClick={()=>handleClick()}>Learn more</button>
        </div>: <p></p>}
      
    </div>
  );
}

    