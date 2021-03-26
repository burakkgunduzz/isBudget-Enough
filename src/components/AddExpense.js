import React, { useContext, useState } from 'react'
import { BudgetContextFunc } from './BudgetContext'
import { v4 as uuidv4 } from 'uuid';
const AddExpense = () => {

    const {budget, 
        budgetList, setBudgetList, 
        spent, setSpent,
        setRemaining
    } = useContext(BudgetContextFunc);
    const [name, setName] = useState("");
    const [cost, setCost] = useState(0)

    const handleNameInput = (e) => {
        setName(e.target.value)
    }
    const handleCostInput = (e) => {
        console.log(e)
        setCost(e.target.valueAsNumber)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newBudgetList = [...budgetList, {id : uuidv4(), name, cost}];
        setBudgetList(newBudgetList)
        setSpent(spent + cost)
        setRemaining(budget - newBudgetList.reduce((acc, curVal) => { return acc + curVal.cost},0))
    }

    return (
        <article className="border-top">
            <form onSubmit={handleSubmit}>
                <h3 style={{color:"white"}} className="mb-3 mt-3 text-center font-weight-light">Add Expense</h3>
                <div className="form-row align-items-center mb-3">
                    <div className="col-sm">
                        <label for="Name">Name</label> 
                        <input onChange={handleNameInput} className="form-control" type="text" id="Name" placeholder="Enter the expense" required /> 
                    </div>   
                
                    <div className="col-sm">
                        <label for="Cost">Cost</label>
                        <input onChange={handleCostInput} className="form-control" type="number" id="Cost" placeholder="Enter the cost" required/>  
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button style={{backgroundColor: "#0096c7", }} className="btn btn-dark align-self-center" type="submit">Add</button> 
                </div>
           </form>
        </article>
    )
}

export default AddExpense
