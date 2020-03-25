import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';

import { useDispatch } from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import { setFilters } from '../store/actions/meals';


import HeaderButton from '../components/HeaderButton';

import Colors from '../constants/Colors';

const FilterSwitch = props => {
	return (
		<View style={styles.filterContainer}>
			<Text>{props.label}</Text>
			<Switch 
				trackColor = {{true: Colors.primaryColor}}
				thumbColor = {Colors.tertiaryColor}
				value={props.value} 
				onValueChange={props.onChange} 
			/>
		</View>
	);

}

const FiltersScreen = props => {
	const { navigation } = props;
	const [isGlutenFree, setIsGlutenFree] = useState(false);
	const [isLactoseFree, setIsLactoseFree] = useState(false);
	const [isVegan, setIsVegan] = useState(false);
	const [isVegeterian, setIsVegeterian] = useState(false);

	const dispatch = useDispatch();
	const saveFilters = useCallback(() => {
		const appliedFilters = {
			glutenFree: isGlutenFree,
			lactoseFree: isLactoseFree,
			vegan: isVegan,
			vegeterian: isVegeterian
		};

		dispatch(setFilters(appliedFilters));

	}, [isGlutenFree, isLactoseFree, isVegan, isVegeterian, dispatch]);

	useEffect(() => {
		navigation.setParams({save: saveFilters});
	}, [saveFilters]);

	return (
		<View style={styles.screen}>
			<Text style={styles.headingTitle}>Available filters</Text>
			<FilterSwitch 
				label='Gluten Free' value={isGlutenFree} 
				onChange={newVal => setIsGlutenFree(newVal)} 
			/>
			<FilterSwitch 
				label='Lactose Free' value={isLactoseFree} 
				onChange={newVal => setIsLactoseFree(newVal)} 
			/>
			<FilterSwitch 
				label='Vegan' value={isVegan} 
				onChange={newVal => setIsVegan(newVal)} 
			/>
			<FilterSwitch 
				label='Vegeterian' value={isVegeterian} 
				onChange={newVal => setIsVegeterian(newVal)} 
			/>
		</View>
	);
}

FiltersScreen.navigationOptions = (navData) => {
	return {
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item title='menu' iconName='ios-menu' onPress={() => {
					navData.navigation.toggleDrawer();
				}} />
			</HeaderButtons>
		),
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item title='Save' iconName='ios-save' 
					onPress={
						navData.navigation.getParam('save')
					} 
				/>
			</HeaderButtons>
		)
	};
};

const styles = StyleSheet.create({
    screen: {
		flex: 1,
   		alignItems: 'center'
		},
		headingTitle: {
			fontSize: 22,
			margin: 20,
			textAlign: 'center'
		},
		filterContainer: {
			margin: 10,
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			width: '80%'
		},
});

export default FiltersScreen;
