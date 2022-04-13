

import { StyleSheet, Text, View } from 'react-native';
import { Component } from 'react/cjs/react.production.min';

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
      <Text>E-library App</Text>
      
      
    </View>
    )
  }
}
    
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
