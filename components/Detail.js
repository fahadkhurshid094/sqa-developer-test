import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
function Detail(props) {
    return (
        <View style={styles.container}>
            <Text>Detail Screen </Text>
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
export default Detail;