import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

import Colors from '../constants/Colors';

const CategoryGridTile = (props) => {
	return (
		<TouchableOpacity style = {styles.gridItem} onPress = {props.onSelect}>
			<View style = {{...styles.container, ...{backgroundColor: props.color}}}>
				<Text style={styles.gridItemText}>{props.title}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	gridItem: {
		height: 100, minHeight: Dimensions.get('window').height * 0.15,
		width: 150, minWidth: Dimensions.get('window').width * 0.3,
		marginHorizontal: '5%',
		borderWidth: 1, borderRadius: 10,
		overflow: 'hidden'
	},
	container: {
		flex: 1,
		padding: 15,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		shadowColor: 'black',
		shadowOpacity: 0.25,
		shadowOffset: {width: 0, height: 2},
		shadowRadius: 10,
		elevation: 3
	},
	gridItemText: {
		alignContent: 'center',
		fontSize: 18,
		textAlign: 'right'
	},
});

export default CategoryGridTile;