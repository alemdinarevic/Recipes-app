import React from 'react';
import {Platform} from 'react-native';

import {Ionicons} from '@expo/vector-icons';

import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import Colors from '../constants/Colors';


const MealsNavigator = createStackNavigator({
	Categories: {
		screen: CategoriesScreen,
		headerTitle: 'Meal Categories'
	},
	CategoryMeals: {
		screen: CategoryMealsScreen,
	},
	MealDetails: {
		screen: MealDetailsScreen,
	},
	Favorites: {
		screen: FavoritesScreen
	}
	}, {
		//mode: 'modal',
		defaultNavigationOptions: {
			headerTintColor: 'white',
				headerStyle: {
					backgroundColor: Colors.primaryColor
				}
			}
		}
);

const FavNavigator = createStackNavigator({
	Favorites: FavoritesScreen,
	MealDetails: MealDetailsScreen
}, {
	//mode: 'modal',
	defaultNavigationOptions: {
		headerTintColor: 'white',
			headerStyle: {
				backgroundColor: Colors.primaryColor
			}
		}
	});

const MealFavoritesNavigator = createBottomTabNavigator({
	Meals: {
		screen: MealsNavigator,
		navigationOptions: {
			tabBarIcon: (tabInfo) => {return <Ionicons name='ios-restaurant' size={22} color={tabInfo.tintColor}/>}
		}
	},
	Favorites: {
		screen: FavNavigator,
		navigationOptions: {
			tabBarLabel: 'Favorites!',
			tabBarIcon: (tabInfo) => {return <Ionicons name='ios-star' size={22} color={tabInfo.tintColor}/>}
		}
	}
}, {
	tabBarOptions: {
		activeTintColor: Colors.secondaryColor
	}
});

export default createAppContainer(MealFavoritesNavigator);