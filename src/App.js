import React, {useState, useEffect, Fragment} from 'react';
import Ask from "./components/Ask"
import Form from "./components/Form"
import List from "./components/List"
import BudgetControl from "./components/BudgetControl"
import FireFly from './components/FireFly';



function App() {

 // define states
const [budget, saveBudget] = useState(0);
const [remaining, saveRemaning] = useState(0);
const [showask, askUpdate] = useState(true);
const [expenses, saveExpenses] = useState([]);
const [expense, saveExpense] = useState({});
const [createExpense, saveCreateExpense] =useState(false);

// UseEffect to update the remaining balance
useEffect(()=>{
  if (createExpense) {
    saveExpenses([
      ...expenses,
      expense
    ]);

    const remainingBudget = remaining - expense.amount;
    saveRemaning(remainingBudget);
    saveCreateExpense(false);
    
  }
},[expense, createExpense, expenses, remaining]);




// When we add a new expense




  return (
    <Fragment>
     <FireFly/>
  <div className="container">
    <header>
      <h1 className>Weekly Budget</h1>

    <div className="contenido-principal contenido">
      
      {showask ?  
      
      ( <Ask 
        saveBudget={saveBudget}
        saveRemaning={saveRemaning}
        askUpdate={askUpdate}
        />
     )

      : 
      (
        <div className="row">
          <div className="one-half column">
          <Form
          saveExpense={saveExpense}
          saveCreateExpense={saveCreateExpense}
          />
          </div>
          <div className="one-half column">
            <List 
            expenses={expenses}
            /> 
            <BudgetControl
            budget={budget}
            remaining={remaining}
            />
          </div>
      
        </div>
      )
      
      }
      
    </div>
    </header>

  </div>

  </Fragment>
  );
}

export default App;
