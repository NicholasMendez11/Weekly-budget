export const budgetReview = (budget, remaining) => {
    let objClass;
    if ((budget / 4)> remaining) {
        objClass = 'alert alert-danger';
    } else if ((budget/2)> remaining) {
        objClass = 'alert alert-warning';
        
    }else {
        objClass = 'alert alert-success'        
    }

    return objClass;
}