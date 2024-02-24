// MainStack.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useAuth} from '../contexts/AuthContext'; // Adjust the path as necessary
import RecipesScreen from '../screens/Recipes';
import RecommendedPantryItemsScreen from '../screens/RecommendedPantryItems';
// Import other screens for logged-in users
// import UserPantryScreen from '../screens/UserPantryScreen';
// import UserProfileScreen from '../screens/UserProfileScreen';

const Tab = createBottomTabNavigator();

function MainStack() {
  const {user} = useAuth();

  return (
    <Tab.Navigator initialRouteName="Recipes">
      <Tab.Screen name="Recipes" component={RecipesScreen} />
      <Tab.Screen name="Recommended" component={RecommendedPantryItemsScreen} />

      {user && (
        <>
          {/* Uncomment these lines once the components are implemented */}
          {/* <Tab.Screen name="My Pantry" component={UserPantryScreen} />
          <Tab.Screen name="Profile" component={UserProfileScreen} /> */}
        </>
      )}
    </Tab.Navigator>
  );
}

export default MainStack;
