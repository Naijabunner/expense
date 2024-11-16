import { createContext, useReducer } from "react";

const DUMMY_EX=[
    {
      id:'e1',
      description:'A pair of shoe',
      amount:59.99,
      date: new Date('2021-12-19')
    },
    {
      id:'e2',
      description:'A pair of shoe',
      amount:59.99,
      date: new Date('2021-12-19')
    },
    {
      id:'e2',
      description:'A pair of shoe',
      amount:59.99,
      date: new Date('2021-12-19')
    },
    {
      id:'e4',
      description:'A Book',
      amount:59.99,
      date: new Date('2021-12-19')
    },
    {
      id:'e5',
      description:'Another book',
      amount:59.99,
      date: new Date('2021-12-19')
    },
  ]
export const ExpensesContext = createContext({
    expenses: [],
    addExpense:({ description, amount, data})=>{},
    deleteExpense:(id)=>{},
    updateExpense:(id, { description, amount, data})=>{},
})

function expensesReducer(state,action){
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString + Math.random.toString();
            return [{...action.payload},...state]
        case 'UPDATE':
            const  updateExpenseIndex= state.findIndex(
                (expense)=>expense.id=== action.payload.id
            );
            const updatableExpense= state[updateExpenseIndex]
            const updatedItem={ ...updatableExpense, ...action.payload.Data}
            const updatedExpenses =[...state]
            updatedExpenses[updateExpenseIndex]= updatedItem
            return updatableExpense;
        case 'DELETE':
            return  state.filter((expense)=>expense.id !== action.payload)
        default:
            break;
    }
}

export function ExpensesContextProvider({ children }){
  const [expenses, dispatch]=  useReducer(expensesReducer, DUMMY_EX)
   
  function addExpense(expenseData){
 dispatch({
    type:'ADD', payload: expenseData
 })
  }
  function deleteExpense(id){
 dispatch({
    type:'DELETE', payload: id
 })
  }
  function updateExpense(id, expenseData){
 dispatch({
    type:'UPDATE', payload: {id: id,data: expenseData}
 })
  }

const value ={
    expenses:expenses,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
}

  return(
        <ExpensesContext.Provider value={value}>
            {children}
        </ExpensesContext.Provider>
    )
}