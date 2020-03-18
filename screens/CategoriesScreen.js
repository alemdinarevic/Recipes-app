import React from 'react';
import {View, Text, StyleSheet, 
				Button, FlatList, Dimensions,
				TouchableOpacity} from 'react-native';

import CategoryGridTile from '../components/CategoryGridTile';
import Colors from '../constants/Colors';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = (props) => {

	const renderGridItem = (items) => {
		return (
			<CategoryGridTile 
				title={items.item.title} 
				color={items.item.color}
				onSelect={() => {
					props.navigation.navigate({
						routeName: 'CategoryMeals', 
						params: {
							categoryId: items.item.id,
							categoryTitle: items.item.title
						}
					});
				}} />
		);
	}

	return (
		<View style={styles.screen}>
			<FlatList 
				contentContainerStyle = {styles.gridItemList}
				numColumns={2} 
				data={CATEGORIES} 
				renderItem={renderGridItem}
			/>
			</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	gridItemList: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around'
	},

});

export default CategoriesScreen;
