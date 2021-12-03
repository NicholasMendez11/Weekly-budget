import React, {Fragment, useState} from 'react';
import Error from "./Error"

const Ask = ({saveRemaning, saveBudget, askUpdate }) => {

// define state
const [amount, saveAmount] = useState(0);
const [error, saveError] = useState(false)

// budget reader function

const defineBudget = e =>{
    saveAmount(parseInt(e.target.value))
}

//submit

    const addBudget =e =>{
        e.preventDefault();

        if (amount < 1 || isNaN(amount)) {
            saveError(true);
            return;
            
        }

        saveError(false);
        saveBudget(amount);
        saveRemaning(amount);
        askUpdate(false);


    }



    return ( 
        <Fragment>
            <h2> Enter your Budget</h2>

            {error? <Error message=" The budget is not valid "/>: null}

            <form
              onSubmit={addBudget}  >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Enter your budget"
                    onChange={defineBudget}
                />

                <input
                type="submit"
                className="button-primary u-full width"
                value="define budget"
              />
            </form>



        </Fragment>


     );
}
 
export default Ask;