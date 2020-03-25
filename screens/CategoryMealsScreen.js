import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../data/dummy-data';

import MealList from '../components/MealList';

const CategoryMealsScreen = (props) => {
	const cid = props.navigation.getParam('categoryId');

	const availableMeals = useSelector(state => state.meals.filteredMeals);
	const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(cid) >= 0);

	if (displayedMeals.length < 1) {
		return (
			<View style={styles.noMeals}>
				<Text>No meals there with current filters</Text>
			</View>
		);
			
		
	}


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

const styles = StyleSheet.create({
	noMeals: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

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