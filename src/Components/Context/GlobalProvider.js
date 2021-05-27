import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

const initialState = {
    transactions: [{amount: 10}]
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({childern}) => {
    const[state, dispatch] = useReducer(AppReducer, initialState)

    function deleteTransaction (id) {
        dispatch ({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction (transaction) {
        dispatch ({
            type: 'ADD_TRANSCATION',
            payload: transaction
        })
    }

    return <GlobalContext.Provider value = {{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}/>
}

export default GlobalProvider;

