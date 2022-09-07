import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { SCREEN_WIDTH } from './utils/constants/dimensions';
import { getFirstPalindromicNumbers } from './utils/functions/findFirstPalindromicNumber';

export default function App() {
	const [text, setText] = useState('');
	const [digits, setDigits] = useState(1);

	return (
		<View style={styles.container}>
			<Text>Welcome :D</Text>
			<Text>You text entry:</Text>
			<TextInput
				style={styles.textInput}
				value={text}
				onChangeText={(text) => setText(text)}
			></TextInput>
			<Text>How many digits this palindrome needs to have:</Text>
			<TextInput
				style={styles.textInput}
				value={digits}
				onChangeText={(text) => setDigits(text)}
			></TextInput>
			<View>
				{text.length > 0 && (
					<Text>{getFirstPalindromicNumbers(text, digits)}</Text>
				)}
			</View>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textInput: {
		borderColor: 'black',
		borderWidth: 1,
		width: (SCREEN_WIDTH / 100) * 90,
		marginVertical: 50,
	},
});
