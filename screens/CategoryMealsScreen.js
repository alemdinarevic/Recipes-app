import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';

import Colors from '../constants/Colors';


const CategoryMealsScreen = (props) => {
	const cid = props.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find(cat => cat.id === cid);
	return (
		<View style={styles.screen}>
			<Text>Category Meals Screen</Text>
			<Text>{selectedCategory.title}</Text>
			<Button title="next" onPress={() => props.navigation.push("MealDetails")}/>
			<Button title="back" onPress={() => props.navigation.pop()} />
		</View>
	);
}

// CategoryMealsScreen.navigationOption = (navigationData) => {
// 	const cid = navigationData.navigation.getParam('categoryId');
// 	console.log(cid);
// 	const selectedCategory = CATEGORIES.find(cat => cat.id === cid);
// 	return {
// 		headerTitle: selectedCategory.title,
// 		headerTintColor: 'white',
// 		headerStyle: {
// 			backgroundColor: Colors.primaryColor,
// 		}
// 	};
// }

CategoryMealsScreen.navigationOptions = (navigationData) => {
	return ({
		headerTitle: navigationData.navigation.getParam('categoryTitle'),
		headerTintColor: 'white',
		headerStyle: {
			backgroundColor: Colors.primaryColor,
		}
	});
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
	}
});

export default CategoryMealsScreen;
