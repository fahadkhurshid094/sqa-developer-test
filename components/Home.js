import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Hello World !</Text>
            <Button title='SEND' data-testID='send'
            onPress={() => navigation.navigate("Detail")}/>
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
  });
  
export default Home;