import React, { useState } from 'react';

const InteractiveBudgetingToolPage = ({income, changeCurrentPage, updateInvestment, updateExpenses}) => {
  const [annualSalary, setAnnualSalary] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [expenseInput, setExpenseInput] = useState('');
  const [expenseAmountInput, setExpenseAmountInput] = useState('');

  const handleAddExpense = () => {
    if (expenseInput && expenseAmountInput) {
      const expense = { name: expenseInput, amount: parseFloat(expenseAmountInput) };
      setExpenses([...expenses, expense]);
      setExpenseInput('');
      setExpenseAmountInput('');
      setTotalExpenses(totalExpenses + parseFloat(expenseAmountInput));
    }
  };

  function handleClick(){
    updateInvestment((0.15 * (income-totalExpenses)).toFixed(2));
    updateExpenses(expenses);
    changeCurrentPage("page2");
  }

  const sectionStyle = {
    backgroundColor: '#393C45',  // Light blue background color
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    overflowY: 'auto',  // Enable vertical scrolling if content exceeds container height
    maxHeight: '400px',  // Set a maximum height for the container
  };

  const mainStyle = {
    marginTop: '95px',
    textAlign: 'left',
    position: 'fixed',
    padding: '20px',
    width: '80%',
    top: 0,
    marginLeft: '30px',
    height: '75px',
  };

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

  const formSectionStyle = {
    backgroundColor: '#393C45',  // Light blue background color
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    overflowY: 'auto',
    maxHeight: '400px',
  };

  const resultSectionStyle = {
    backgroundColor: '#393C45',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const descriptionStyle = {
    color: '#9e9e9e', // Lighter color for descriptions
    fontSize: '14px', // Smaller font size for descriptions
  };

  return (
    <div style={mainStyle}>
      <h1 style={{ fontWeight: '200', fontSize: '40px' }}>Estimated Monthly Income: ${income}</h1>
      <div style={sectionStyle}>
        <h2>Expense Tracking</h2>
        <label>
          Add Expense:
          <input
            type="text"
            placeholder="Expense Name"
            value={expenseInput}
            onChange={(e) => setExpenseInput(e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount"
            value={expenseAmountInput}
            onChange={(e) => setExpenseAmountInput(e.target.value)}
          />
          <button onClick={handleAddExpense}>Add Expense</button>
        </label>
        <ul style={{ marginLeft: '20px' }}>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.name}: ${expense.amount}
            </li>
          ))}
        </ul>
        <p>Total Expenses: $ <span style={{ color: "red" }}>{totalExpenses}</span></p>
      </div>
      <h1 style={{fontWeight:"200",fontSize:"40px"}}>Remaining Monthly Savings: $ <span style={{color:"green"}}>{income-totalExpenses}</span></h1>
        <div style={resultSectionStyle}>
          <h3>Budget Information</h3>
          <p>401K Budget: ${(0.04 * (income-totalExpenses)).toFixed(2)}</p>
          <p style={descriptionStyle}>
          Putting 4% of your annual income to your 401(K) is recommended to securing a financially stable retirement. 
        </p>
          <p>Investments Budget: ${(0.15 * (income-totalExpenses)).toFixed(2)}</p>
          <p style={descriptionStyle}>
          Allocate 15% of your income for investments to build long-term wealth.
        </p>
          <p>Savings Budget: ${(0.1 * (income-totalExpenses)).toFixed(2)}</p>
          <p style={descriptionStyle}>
          Aim to save 10% of your income as part of your financial security plan.
        </p>
        </div>
        <button style={buttonStyle} onClick={()=>handleClick()}> Visualize Investment Potential</button>
    </div>
  );
};

export default InteractiveBudgetingToolPage;



