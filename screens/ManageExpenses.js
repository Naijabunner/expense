import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import IconButton from '../components/ui/IconButton';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/ui/Button';
import { useContext } from 'react';
import { ExpensesContext } from '../store/expense-content';
import ExpenseForm from '../components/MangeExpense/ExpenseForm';

const ManageExpenses = ({ route, navigation }) => {
  const expenseCtx = useContext(ExpensesContext);
  const expenseId = route.params?.expenseId;
  const SelectedExpense= expenseCtx.expenses.find(expense=> expense.id === expenseId)
  //  converts a truty value to true and a falsy value to false
  const isEditing = !!expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const deleteExpense = () => {
    expenseCtx.deleteExpense();
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const submitHandler = (expenseData) => {
    if (isEditing) {
      expenseCtx.updateExpense({
        expenseId, expenseData
      });
    } else {
      expenseCtx.addExpense(expenseData);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenseForm
        isEditing={isEditing}
        onCancel={cancelHandler}
        onSubmit={submitHandler}
        defaultValues={SelectedExpense}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon={"trash"}
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpense}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpenses

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:24,
    backgroundColor: GlobalStyles.colors.primary800
  },

  deleteContainer:{
    marginTop: 16,
    paddingTop:8,
    borderTopWidth: 2,
    borderColor:GlobalStyles.colors.primary200,
    alignItems:'center'
  }
})