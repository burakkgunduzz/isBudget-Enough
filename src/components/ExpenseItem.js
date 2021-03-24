import React from 'react'
import {TiDelete} from "react-icons/ti"
const ExpenseItem = ({name, cost}) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center'">
            {name}
            <div>
                <span className="badge badge-primary badge-pill mr-4">
                    £{cost}
                </span>
                <TiDelete size="1.6em"></TiDelete>
            </div>
        </li>
    )
}

export default ExpenseItem