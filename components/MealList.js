import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import { useSelector } from 'react-redux';

import MealItem from './MealItem';

const MealList = props => {

	const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

	const renderMealItem = (itemData) => {
		const isFavorite = favoriteMeals.find(meal => meal.id === itemData.item.id);
		return (
			<MealItem title={itemData.item.title} 
			image={itemData.item.imageURL}
			onSelectMeal={() => {
				props.navigation.navigate({
					routeName: 'MealDetails',
					params: {
						mealId: itemData.item.id,
						mealTitle: itemData.item.title,
						isFav: isFavorite
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
	<View style={styles.list}>
		<FlatList 
			keyExtractor = {(item, index) => item.id}
			data = {props.listData}
			renderItem = {renderMealItem}
			style = {{width: '100%'}}
			/>
	</View>
	);
}

const styles = StyleSheet.create({
	list: {
		flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
	}
});

export default MealList;
