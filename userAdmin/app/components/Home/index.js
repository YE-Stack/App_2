import React from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import styles from './styles'
import firebase from '../HiddenKey/config'

export default class Home extends React.Component {

  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      success: false,
      isLoading: true,
      resultList: [{message: 'Sample'}]
    }
  }

  static navigationOptions={
    header: null  
  }

  readData(){
    let result = null;
    let url = 'adminControl/messages/'
    firebase.database().ref(url).on('value', (snapshot)=>{
        console.log(snapshot.val());
        result = snapshot.val();
        this.setState({
            resultList: result,
        })
        console.log(result)
        this.forceUpdate()
      });    
  // console.log(result)   
  }

  componentDidMount(){
    this.readData();
  }

  render() {
    return (
        <View style={styles.parent}>
          <View style={{flex:0.5}}>
          </View>
          <Text>Hello</Text>
          <FlatList
            data={this.state.resultList}
            extraData={this.state}
            renderItem={({item, index}) => 
            <View>
              <Text>{item.message}</Text>
            </View>
            }
          />
          <TouchableOpacity
          onPress={()=>{this.readData();}}>
            <Text>PRESS HERE</Text>
          </TouchableOpacity>
        </View>
    );
  }
}