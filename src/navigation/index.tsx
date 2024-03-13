import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RecipesScreen from '../screens/Recipes';
import RecommendedPantryItemsScreen from '../screens/RecommendedPantryItems';
import Icon from 'react-native-vector-icons/Ionicons';
import MyPantry from '../screens/MyPantry';
import GroceryList from '../screens/GroceryList';

const Tab = createBottomTabNavigator();

type IconProps = {
  color: string;
  size: number;
};

// Define tabBarIcon components outside of the MainStack function
const RecipesTabBarIcon = ({color, size}: IconProps) => (
  <Icon name="restaurant-outline" color={color} size={size} />
);

const GlobalPantryTabBarIcon = ({color, size}: IconProps) => (
  <Icon name="list-outline" color={color} size={size} />
);

const MyPantryTabBarIcon = ({color, size}: IconProps) => (
  <Icon name="basket-outline" color={color} size={size} />
);

const GroceryListTabBarIcon = ({color, size}: IconProps) => (
  <Icon name="cart-outline" color={color} size={size} />
);

function MainStack() {
  return (
    <Tab.Navigator initialRouteName="My Pantry">
      <Tab.Screen
        name="Recipes"
        component={RecipesScreen}
        options={{
          headerShown: false,
          tabBarIcon: RecipesTabBarIcon,
        }}
      />
      <Tab.Screen
        name="Global Pantry"
        component={RecommendedPantryItemsScreen}
        options={{
          headerShown: false,
          tabBarIcon: GlobalPantryTabBarIcon,
        }}
      />
      <Tab.Screen
        name="My Pantry"
        component={MyPantry}
        options={{
          headerShown: false,
          tabBarIcon: MyPantryTabBarIcon,
        }}
      />
      <Tab.Screen
        name="Grocery List"
        component={GroceryList}
        options={{
          headerShown: false,
          tabBarIcon: GroceryListTabBarIcon,
        }}
      />
    </Tab.Navigator>
  );
}

export default MainStack;
