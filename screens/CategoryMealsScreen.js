import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import {CATEGORIES, MEALS} from '../data/dummy-data';

import MealItem from '../components/MealItem';
import Colors from '../constants/Colors';


const CategoryMealsScreen = (props) => {
	const cid = props.navigation.getParam('categoryId');
	const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(cid) >= 0);

	const renderMealItem = (itemData) => {
		return (
			<MealItem title={itemData.item.title} 
			image={itemData.item.imageURL}
			onSelectMeal={() => {
				props.navigation.navigate({
					routeName: 'MealDetails',
					params: {
						mealId: itemData.item.id
					}
				})
			}} 
			duration={itemData.item.duration}
			complexity={itemData.item.complexity}
			affordability={itemData.item.affordability}

			/>
		);
	}

	return (
		<View style={styles.screen}>
			<FlatList 
				keyExtractor = {(item, index) => item.id}
				data = {displayedMeals}
				renderItem = {renderMealItem}
				style = {{width: '100%'}}
				/>
		</View>
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

const styles = StyleSheet.create({
	screen: {
		flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
	}
});

export default CategoryMealsScreen;
