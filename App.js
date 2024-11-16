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
import IconButton from "./components/ui/IconButton";
import { ExpensesContextProvider } from "./store/expense-content";

export default function App() {
  const Stack =createStackNavigator();
  const BootomTab = createBottomTabNavigator();

  function ExpenseOverview(){
    return(
      <BootomTab.Navigator
      screenOptions={({ navigation })=>({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor:'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight:({ tintColor })=>{
          return <IconButton icon={'add'} size={24} color={tintColor} onPress={()=>navigation.navigate('ManageExpenses')}/>
        }
      })}
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
      <ExpensesContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ExpenseOverview"
        screenOptions={{
          headerStyle: { backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor:'white',}
        }
        >
        <Stack.Screen name="ManageExpenses" component={ManageExpenses}/>
        <Stack.Screen name="ExpenseOverview" component={ExpenseOverview} options={{
          headerShown:false
        }}/>
        </Stack.Navigator>
      </NavigationContainer>
      </ExpensesContextProvider>
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
