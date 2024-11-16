import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'
import Button from '../ui/Button';

const ExpenseForm = ({ isEditing, onCancel, onSubmit, defaultValues }) => {
  const [inputValues, setinputValues] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : "",
    date: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : "",
    description: defaultValues ? defaultValues.description : "",
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setinputValues((prev) => {
      return {
        ...prev,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  const submitHandler = () => {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };

    const amountIsValid= !isNaN(expenseData.amount) && expenseData.amount > 0
    const dateIsValid= expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid= expenseData.description.trim().length>0;

    if (amountIsValid ||
      dateIsValid ||
      descriptionIsValid) {
      Alert.alert('input is valid')
      return;
    }
    onSubmit(expenseData);
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label={"Amount"}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: (value) => inputChangeHandler("amount", value),
            value: inputValues.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label={"Date"}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: (value) => inputChangeHandler("date", value),
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label={"Description"}
        textInputConfig={{
          multiline: true,
          autoCorrect: true,
          onChangeText: (value) => inputChangeHandler("description", value),
          value: inputValues.description,
        }}
      />
      <View style={styles.buttons}>
        <Button style={styles.btn} mode={"flat"} onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.btn} onPress={submitHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm

const styles = StyleSheet.create({
  form: {
    marginTop: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    minWidth: 120,
    justifyContent: "center",
  },
});