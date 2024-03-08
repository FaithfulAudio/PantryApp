// MainStack.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RecipesScreen from '../screens/Recipes';
import RecommendedPantryItemsScreen from '../screens/RecommendedPantryItems';
import Icon from 'react-native-vector-icons/Ionicons';
import MyPantry from '../screens/MyPantry';

const Tab = createBottomTabNavigator();

function MainStack() {
  return (
    <Tab.Navigator initialRouteName="Recipes">
      <Tab.Screen
        name="Recipes"
        component={RecipesScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="restaurant-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Global Pantry"
        component={RecommendedPantryItemsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="list-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="My Pantry"
        component={MyPantry}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="basket-outline" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen name="Profile" component={UserProfileScreen} />  */}
    </Tab.Navigator>
  );
}

export default MainStack;
