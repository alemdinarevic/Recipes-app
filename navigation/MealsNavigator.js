import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const MealsNavigator = createStackNavigator({
	Categories: CategoriesScreen, 
	CategoryMeals: CategoryMealsScreen,
	MealDetails: MealDetailsScreen,
	Favorites: FavoritesScreen
});

export default createAppContainer(MealsNavigator);