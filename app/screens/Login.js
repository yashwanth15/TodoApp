import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TouchableOpacity, Image} from 'react-native';
import {string} from '../resource/string.js'
import {color} from '../resource/color.js'
import FBSDK, { AccessToken,LoginManager} from 'react-native-fbsdk'
import Toast from 'react-native-simple-toast';

const HEIGHT=Dimensions.get('window').height

export default class Login extends Component<Props> {

  constructor(props){
    super(props);
    this.state={}
    this.handleOnClickFacebook=this.handleOnClickFacebook.bind(this);
    this.handleOnClickGoogle=this.handleOnClickGoogle.bind(this);
    this.handleOnClickNumber=this.handleOnClickNumber.bind(this);
  }

  handleOnClickFacebook=()=>{
    const that = this
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      function(result) {
        if (result.isCancelled) {
          Toast.show('Login was cancelled');
        } else {
          that.props.navigation.navigate('Home')
          Toast.show('Logged in!')
        }
      },
      function(error) {
        Toast.show('Login failed with error: ' + error);
      }
    );
  }
  handleOnClickGoogle=()=>{
    this.props.navigation.navigate('Home')
  }
  handleOnClickNumber=()=>{
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor:color.black}}>
          <Text style={styles.todo}>{string.todo}</Text>
        </View>
        <Text style={styles.continueWith}>{string.continueWith}</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={styles.logo} onPress={()=>this.handleOnClickFacebook()}>
            <Image style={styles.image} source={require('../assets/images/facebook.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logo} onPress={()=>this.handleOnClickGoogle()}>
            <Image style={styles.image} source={require('../assets/images/google.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logo} onPress={()=>this.handleOnClickNumber()}>
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
  },
  todo: {
    fontSize: 20,
    textAlign: 'center',
    margin: HEIGHT/25,
    color:color.white,
    fontFamily:string.robotoLight
  },
  continueWith:{
    fontSize: 15,
    textAlign: 'center',
    marginVertical: HEIGHT/10,
    color:color.black,
    fontFamily:string.robotoLight
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
