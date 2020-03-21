import React from 'react';
import {ScrollView,View, Text, Image, Button, StyleSheet, FlatList} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import {MEALS} from '../data/dummy-data';

import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const ListItem = props => {
	return (
		<View>
			<DefaultText style={styles.ListItem}>{props.children}</DefaultText>
		</View>
	);
}



const MealDetailsScreen = (props) => {

	const mealId = props.navigation.getParam('mealId');
	const selectedMeal = MEALS.find(meal => meal.id === mealId);

	const renderMealIngredients = (items) =>{
		// return (selectedMeal.ingredients.map(ingredient => <Text key={ingredient}>{ingredient}</Text>));
		return(<Text style={styles.ListItem}>{items.item}</Text>)
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
			
			<FlatList data={selectedMeal.ingredients} renderItem={renderMealIngredients}/>
				{/* {selectedMeal.ingredients.map(ingredient => 
					<ListItem key={ingredient} style={styles.ingredients}>
						{ingredient}
					</ListItem>)
				} */}

			<Text style={styles.headingTitle}>Steps</Text>
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
	const mealId = navigationData.navigation.getParam('mealId');
	const selectedMeal = MEALS.find(meal => meal.id === mealId);

	return {
		headerTitle: selectedMeal.title,
		headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log('Mark as favorite!');
          }}
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
	ListItem: {
		marginVertical: 10,
		marginHorizontal: 20,
		borderColor: 'black',
		borderWidth: 1,
		padding: 10
	},
});

export default MealDetailsScreen;
