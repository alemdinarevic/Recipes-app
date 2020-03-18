import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';

const MealItem = (props) => {
	return (
		<View style={styles.mealItem}>
			<TouchableOpacity onPress={props.onSelectMeal}>
				<View>
					<View style={{...styles.mealRow, ...styles.mealHeader}}>
						<ImageBackground source={{uri: props.image}} style = {styles.bgImage}>
							<Text style={styles.mealTitle}>{props.title}</Text>
						</ImageBackground>
					</View>
					<View style={{...styles.mealRow, ...styles.mealDetails}}>
						<Text>{props.duration}m</Text>
						<Text>{props.complexity}</Text>
						<Text>{props.affordability}</Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	mealItem: {
		height: 200,
		width: '95%',
		alignSelf: 'center',
		marginTop: 5,
		backgroundColor: '#ccc',
		borderRadius: 10,
		overflow: 'hidden'
	},
	mealHeader: {
		height: '90%',

	},
	mealTitle: {
		fontSize: 17,
		color: 'white',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		alignSelf: 'center'

	},
	mealDetails: {
		height: '10%',
		paddingHorizontal: 10,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	mealRow: {
		flexDirection: 'row',
		
	},
	bgImage: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end'
	}
});

export default MealItem;