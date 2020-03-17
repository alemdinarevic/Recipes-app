import React from 'react';
import {View, Text, StyleSheet, 
				Button, FlatList, Dimensions,
				TouchableOpacity} from 'react-native';

import Colors from '../constants/Colors';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = (props) => {

	const renderGridItem = (items) => {
		return (
			<TouchableOpacity 
				style = {styles.gridItem}
				onPress = {() => {
					props.navigation.navigate({
						routeName: 'CategoryMeals', 
						params: {
							categoryId: items.item.id,
							categoryTitle: items.item.title
						}
					});
				}
				}
			>
				<View>
					<Text style={styles.gridItemText}>{items.item.title}</Text>
				</View>
			</TouchableOpacity>
	
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

CategoriesScreen.navigationOptions = {
	headerTitle: 'Meal Categories',
	headerTintColor: 'white',
	headerStyle: {
		backgroundColor: Colors.primaryColor,
	}
};

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
	gridItem: {
		height: 100, minHeight: Dimensions.get('window').height * 0.15,
		width: 150, minWidth: Dimensions.get('window').width * 0.3,
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: '5%',
		borderColor: 'black', borderWidth: 1, borderRadius: 10
	},
	gridItemText: {
		alignContent: 'center'
	},
});

export default CategoriesScreen;
