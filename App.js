import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import ManageExpenses from "./screens/ManageExpenses";
import './gesture-handler';
import { GlobalStyles } from "./constants/styles";
import { Ionicons } from "@expo/vector-icons"

export default function App() {
  const Stack =createStackNavigator();
  const BootomTab = createBottomTabNavigator();
   const arr=[1,2,2]
   console.log(arr.reduce((sum,ex)=>console.log(sum,ex)))
  function ExpenseOverview(){
    return(
      <BootomTab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor:'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.accent500
      }}
      >
        <BootomTab.Screen name="RecentExpenses" component={RecentExpenses} options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon:({color, size})=>{
            return <Ionicons name="hourglass-outline" size={size} color={color}/>
          }
        }}/>
        <BootomTab.Screen name="AllExpenses" component={AllExpenses} 
        options={{
          title: 'All Expenses',
          tabBarLabel: 'Expenses',
          tabBarIcon:({color, size})=>{
          return  <Ionicons name="calendar-outline" size={size} color={color}/>
          }}}
        />
      </BootomTab.Navigator>
    )
  }
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ExpenseOverview">
        <Stack.Screen name="ManageExpenses" component={ManageExpenses}/>
        <Stack.Screen name="ExpenseOverview" component={ExpenseOverview} options={{
          headerShown:false
        }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
