import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';


const Form = ({saveExpense, saveCreateExpense}) => {

const [name, saveName] = useState('');
const [amount, saveAmount] = useState(0);
const [error, saveError]   = useState(false);

const addExpense = e =>{
    e.preventDefault();
    if (amount < 1 || isNaN(amount) || name.trim() ==='') {
        saveError(true);
        return;
        
    }
    saveError(false);

    //Build expense
    const expense = {
        name,
        amount,
        id: shortid.generate()

    }
    console.log(expense)

    saveExpense(expense)
    saveCreateExpense(true)

}
    return ( 

        <form
            onSubmit={addExpense}
        >
            <h2>Add your expenses here</h2>
            {error?     <Error message="All fields are required or invalid budget"/>: null}
            <div className="campo">
                <label>Expense name</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ex. Gas"
                    value={name}
                    onChange={e => saveName(e.target.value)}
                     />

            </div>
            <div className="campo">
                <label>Expense amount</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ex. 300"
                    value={amount}
                    onChange={e => saveAmount(parseInt(e.target.value))}
                     />

            </div>
                <input 
                type="submit"
                className="button-primary u-full-width"
                value="add Expense"
            />
        </form>


     );
}
 
export default Form;

   

