import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ExpensesOutput from '../components/expenses/ExpensesOutput'
import { ExpensesContext } from '../store/expense-content'
import { getDateminusDays } from '../utils/date'

const RecentExpenses = () => {
  const ExpensesCtx= useContext( ExpensesContext)
  const recentExpenses = ExpensesCtx.expenses.filter((expense)=>{
    const today = new Date();
    const date7Daysago =getDateminusDays(today,7)
 return expense.date >date7Daysago
  })
  return (
     <ExpensesOutput expenses={recentExpenses} periodName={'Last 7 days'}/>
  )
}

export default RecentExpenses

const styles = StyleSheet.create({})