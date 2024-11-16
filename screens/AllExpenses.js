import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ExpensesOutput from '../components/expenses/ExpensesOutput'
import { ExpensesContext } from '../store/expense-content'

const AllExpenses = () => {
  const ExpensesCtx= useContext( ExpensesContext)
  return (
      <ExpensesOutput expenses={ExpensesCtx.expenses} periodName={'Total'}/>

  )
}

export default AllExpenses

const styles = StyleSheet.create({})