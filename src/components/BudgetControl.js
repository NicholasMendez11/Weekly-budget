import React, {Fragment} from 'react';
import {budgetReview} from '../Helper';


const BudgetControl = ({budget,remaining,}) => {
    return (  
        <Fragment>

        <div className="alert alert-primary">
            Budget: ${budget}
        </div>
        <div className={budgetReview(budget,remaining)}>
            Remaining: ${remaining}
        </div>


        </Fragment>

    );
}
 
export default BudgetControl;