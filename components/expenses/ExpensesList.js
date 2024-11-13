import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ExpensesList = ({ expenses }) => {
 
   
  return (
     <FlatList data={expenses}/>
  )
}

export default ExpensesList

const styles = StyleSheet.create({})