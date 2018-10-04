import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import bgImage from './assets/bg-login.png';
import logo from './assets/logo-login.png';

const { width: WIDTH } = Dimensions.get('window');

export default class App extends React.Component {
	render() {
		return (

			<ImageBackground source={bgImage} style={styles.backgroundContainer}>
				<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
					<View style={styles.logoConainer}>
						<Image source={logo} style={styles.logoImage} />
					</View>
					<View style={styles.inputContainer}>
						<TextInput style={styles.input}
							placeholder={'Username'}
							placeholderTextColor={'#ddd'}
							underlineColorAndroid='transparent'
						/>
						<TextInput style={styles.input}
							placeholder={'Password'}
							secureTextEntry={true}
							placeholderTextColor={'#ddd'}
							underlineColorAndroid='transparent'
						/>
						<TouchableOpacity style={styles.btnLogin}>
							<Text style={styles.textLogin}>Login</Text>
						</TouchableOpacity>
					</View>
				</KeyboardAvoidingView>
			</ImageBackground>

		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	backgroundContainer: {
		flex: 1,
		height: null,
		width: null,
		justifyContent: 'center',
	},
	logoConainer: {
		marginLeft: 30
	},
	logoImage: {
		width: 90,
		height: 125
	},
	inputContainer: {
		alignItems: 'center',
		marginTop: 40
	},
	input: {
		width: WIDTH - 60,
		height: 45,
		fontSize: 16,
		paddingLeft: 20,
		backgroundColor: 'transparent',
		borderWidth: 0,
		borderColor: '#ddd',
		borderBottomWidth: 0.5,
		marginBottom: 15
	},
	btnLogin: {
		width: WIDTH - 60,
		height: 45,
		borderRadius: 25,
		backgroundColor: '#432577',
		justifyContent: 'center',
		marginTop: 20
	},
	textLogin: {
		color: '#fff',
		fontSize: 16,
		textAlign: 'center'
	}
});
