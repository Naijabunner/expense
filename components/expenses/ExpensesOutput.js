import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'

const ExpensesOutput = ({ expenses, periodName }) => {
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
  return (
    <View>
      <ExpensesSummary periodName={periodName} expenses={DUMMY_EX}/>
        <ExpensesList expenses={DUMMY_EX}/>
    </View>
  )
}

export default ExpensesOutput

const styles = StyleSheet.create({})