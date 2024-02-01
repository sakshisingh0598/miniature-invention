import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom"
import { useState } from 'react';
import Sidebar from "./components/sidebar/sidebar"
import Header from './components/header';
import Home from './components/home';
import Page1 from './components/Page1';
import Page3 from './components/aipage';
import InvestmentCalculator from './components/page2';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [income, setIncome] = useState(0);
  const [investment, setinvestment] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const navigate = useNavigate();
  function changeCurrentPage(page) {
    console.log(page);
    setCurrentPage(page);
    navigate(page);
  }

  function updateSavings(val) {
    setIncome(val);
    console.log(val);
  }

  function updateInvestment(val) {
    setinvestment(val);
  }

  function updateExpenses(expensesArray){
    setExpenses(expensesArray);
    console.log(expenses);
  }


  return (
    <div className="App">
      <Sidebar currentPage={currentPage} changeCurrentPage={changeCurrentPage}/>
      <div className='main-container'>
        <Header/>
        <div className='routes-container'>
          <Routes>
            <Route path="home" element={ <Home changeCurrentPage={changeCurrentPage} updateSavings={updateSavings}/> } />
            <Route path="page1" element={ <Page1 income={income} changeCurrentPage={changeCurrentPage} updateInvestment={updateInvestment} updateExpenses={updateExpenses}/> } />
            <Route path="page2" element={ <InvestmentCalculator investment={investment} changeCurrentPage={changeCurrentPage}/> } />
            <Route path="page3" element={ <Page3 income={income} expenses={expenses}/> } />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
