import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10, // Assuming your RED_EXPENSE action handles negative values correctly
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <button 
                    onClick={event => increaseAllocation(props.name)}
                    className="btn btn-success btn-sm" // Bootstrap classes for green button
                    style={{marginRight: '5px'}}> {/* Custom styling */}
                    +
                </button>
            </td>
            <td>
                <button 
                    onClick={event => decreaseAllocation(props.name)}
                    className="btn btn-danger btn-sm"> {/* Bootstrap classes for red button */}
                    -
                </button>
            </td>
            <td>
                <TiDelete size='1.5em' onClick={handleDeleteExpense} style={{cursor: 'pointer'}} />
            </td>
        </tr>
    );
};

export default ExpenseItem;
