import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TouchableOpacity, Image} from 'react-native';
import {string} from '../resource/string.js'
import {color} from '../resource/color.js'

const HEIGHT=Dimensions.get('window').height

export default class Login extends Component<Props> {

  constructor(props){
    super(props);
    this.state={

    }
    this.handleOnClick=this.handleOnClick.bind(this);
  }

  handleOnClick=()=>{
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor:color.black}}>
          <Text style={styles.todo}>{string.TODO}</Text>
        </View>
        <Text style={styles.continueWith}>{string.continueWith}</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={styles.logo} onPress={()=>this.handleOnClick()}>
            <Image style={styles.image} source={require('../assets/images/facebook.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logo} onPress={()=>this.handleOnClick()}>
            <Image style={styles.image} source={require('../assets/images/google.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logo} onPress={()=>this.handleOnClick()}>
            <Image style={styles.image} source={require('../assets/images/whatsapp.png')}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:color.white,
    color:color.black
  },
  todo: {
    fontSize: 20,
    textAlign: 'center',
    margin: HEIGHT/25,
    color:color.white
  },
  continueWith:{
    fontSize: 15,
    textAlign: 'center',
    marginVertical: HEIGHT/10,
    color:color.black
  },
  logo:{
    width:HEIGHT/20,
    height:HEIGHT/20,
    marginHorizontal:HEIGHT/30,
  },
  image:{
    width:'100%',
    height:'100%',
  }
});
