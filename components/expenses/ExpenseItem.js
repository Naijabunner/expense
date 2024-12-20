import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constants/styles'
import { getFormattedDate } from '../../utils/date';
import { useNavigation } from '@react-navigation/native';

const ExpenseItem = ({ amount, date,description, id}) => {
  const navigation = useNavigation()
  function expensePressHandler(){
    navigation.navigate('ManageExpenses',{
      expenseId: id
    })
  }

  return (
    <Pressable onPress={expensePressHandler} style={({ pressed })=>pressed && styles.pressed}>
      <View style={styles.container}>
        <View>
          <Text style={[styles.textBase, styles.description]}>{description}</Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)} </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem

const styles = StyleSheet.create({
  pressed:{
opacity:'0.5'
  },
    container:{
padding:12,
marginVertical:8,
backgroundColor:GlobalStyles.colors.primary500,
flexDirection:'row',
justifyContent:'space-between',
borderRadius:6,
elevation:3,
shadowColor: GlobalStyles.colors.gray500,
shadowOffset:{width: 1, height:1},
shadowOpacity:0.4
    },
    textBase:{
      fontSize:16,
      marginBottom:4,
      fontWeight:'bold',
      color:'white'
    },
    description:{
     fontSize:16,
     marginBottom:4,
     fontWeight:'bold',
     color: GlobalStyles.colors.gray700
    },
    amountContainer:{
      paddingHorizontal:12,
      paddingVertical:4,
      backgroundColor:'white',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:4
    },
    amount:{

    },
    date:{

    },
    smount:{

    },
})