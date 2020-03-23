import React, {useEffect, useCallback} from 'react';
import {ScrollView,View, Text, Image, Button, StyleSheet, FlatList} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/actions/meals';

import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';

const ListItem = props => {
	return (
		<View style={styles.listItemContainer}>
			<DefaultText style={styles.listItem}>{props.children}</DefaultText>
		</View>
	);
}

const MealDetailsScreen = (props) => {
	
	const availableMeals = useSelector(state => state.meals.meals);
	const mealId = props.navigation.getParam('mealId');

	const currentMealIsFavorite = useSelector(
		state => state.meals.favoriteMeals.some(meal => meal.id === mealId)
	);

	const selectedMeal = availableMeals.find(meal => meal.id === mealId);

	const dispatch = useDispatch();

	const toggleFavoriteHandler = useCallback(() => {
		dispatch(toggleFavorite(mealId));
	}, [dispatch, mealId]);

	useEffect(() => {
		props.navigation.setParams({
			toggleFav: toggleFavoriteHandler
		});
	}, [toggleFavoriteHandler]);

	useEffect(() => {
		props.navigation.setParams({
			isFav: currentMealIsFavorite
		});
	}, [currentMealIsFavorite]);

	const renderMealDetails = (items) =>{
		// return (selectedMeal.ingredients.map(ingredient => <Text key={ingredient}>{ingredient}</Text>));
		return(
			<View>
				<Text style={styles.listItem}>{items.item}</Text>
			</View>
		)
	}

	return (
		<ScrollView>
			<Image source={{uri: selectedMeal.imageURL}} style={styles.image} />

			<View style={styles.details}>
				<DefaultText>{selectedMeal.duration}m</DefaultText>
				<DefaultText>{selectedMeal.complexity}</DefaultText>
				<DefaultText>{selectedMeal.affordability}</DefaultText>
			</View>

			<Text style={styles.headingTitle}>Ingredients</Text>
			<FlatList data={selectedMeal.ingredients} renderItem={renderMealDetails}/>
				{/* {selectedMeal.ingredients.map(ingredient => 
					<ListItem key={ingredient} style={styles.ingredients}>
						{ingredient}
					</ListItem>)
				} */}

			<Text style={styles.headingTitle}>Steps</Text>
			<FlatList data={selectedMeal.steps} renderItem={renderMealDetails}/>
				{/* {selectedMeal.steps.map(step => 
					<ListItem key={step} style={styles.ingredients}>
						{step}
					</ListItem>)
				} */}

			<View style={styles.screen}>
				<Button title="back to categories" onPress={() => props.navigation.popToTop("Categories")}/>
			</View>
		 </ScrollView>
	);
}

MealDetailsScreen.navigationOptions = (navigationData) => {
	const mealTitle = navigationData.navigation.getParam('mealTitle');
	const toggleFavorite = navigationData.navigation.getParam('toggleFav');
	const isFavorite = navigationData.navigation.getParam('isFav');
	return {
		headerTitle: mealTitle,
		headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavorite ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    )
	};
}

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 200
	},
	details: {
		flexDirection: 'row',
		padding: 15,
		justifyContent: 'space-around'
	},
	ingr: {
		flexDirection: 'column'
	},
	headingTitle: {
		fontSize: 22,
		textAlign: 'center'
	},
	listItem: {
		marginVertical: 10,
		marginHorizontal: 20,
		padding: 10, 
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: 'white'
	},
});

export default MealDetailsScreen;
