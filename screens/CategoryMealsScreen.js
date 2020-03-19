import React from 'react';

import {CATEGORIES, MEALS} from '../data/dummy-data';

import MealList from '../components/MealList';
import Colors from '../constants/Colors';


const CategoryMealsScreen = (props) => {
	const cid = props.navigation.getParam('categoryId');
	const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(cid) >= 0);

	return (
		<MealList listData={displayedMeals} navigation={props.navigation}/>
	);
}

 CategoryMealsScreen.navigationOptions = (navigationData) => {
	const cid = navigationData.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find(cat => cat.id === cid);
	return {
		headerTitle: selectedCategory.title
	};
}

// CategoryMealsScreen.navigationOptions = (navigationData) => {
// 	return ({
// 		headerTitle: navigationData.navigation.getParam('categoryTitle'),
// 		headerTintColor: 'white',
// 		headerStyle: {
// 			backgroundColor: Colors.primaryColor,
// 		}
// 	});
// };

export default CategoryMealsScreen;