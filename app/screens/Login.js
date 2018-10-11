import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TouchableOpacity, Image} from 'react-native';
import {string} from '../resource/string.js'
import {color} from '../resource/color.js'
import { connect } from 'react-redux';
import FBSDK, { AccessToken,LoginManager} from 'react-native-fbsdk'
import Toast from 'react-native-simple-toast';
import {saveUserInfo} from '../actions/saveUserInfo'
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';

const {GraphRequest,GraphRequestManager} = FBSDK;
const HEIGHT=Dimensions.get('window').height

class Login extends Component<Props> {

  constructor(props){
    super(props);
    this.state={
      userInfo:null,
    }
    this.facebookSignin=this.facebookSignin.bind(this);
    this.handleOnClickGoogle=this.handleOnClickGoogle.bind(this);
    this.numberSignin=this.numberSignin.bind(this);
    this.googleSignin=this.googleSignin.bind(this);
    this._graphRequest=this._graphRequest.bind(this);
  }

  googleSignin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo });
      console.log('user',userInfo);
      if (this.state.userInfo) {
        this.props.navigation.navigate('Home')
      }
    }catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('cancelled');
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('loading');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('google play not available');
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  _graphRequest(accessToken){
    const that=this
    const getUserInfo = new GraphRequest(
      '/me',
      {accessToken: accessToken,
      parameters: {
        fields: {
          string: 'first_name,last_name,email'
        }
      }
      },
      function(error , response){
        console.log('in GraphRequest',error,response)
        if(error){
          that._graphRequest()
        }
        else{
          that.props.saveUserInfo(response);
          that.props.navigation.navigate('Home')
          Toast.show('Logged in!')
        }
      }
    );
    new GraphRequestManager().addRequest(getUserInfo).start();
  }

  facebookSignin=()=>{
    const that = this
    LoginManager.logInWithReadPermissions(["email", "public_profile"]).then(
      function(result) {
        console.log('facebook_props',result);
        if (result.isCancelled) {
          Toast.show('Login was cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(
            (data) => {
              let accessToken=data.accessToken.toString()
              that._graphRequest(accessToken)
            })
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
  numberSignin=()=>{
    this.props.navigation.navigate('Home')
  }

  componentDidMount(){
    GoogleSignin.configure();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor:color.black}}>
          <Text style={styles.todo}>{string.todo}</Text>
        </View>
        <Text style={styles.continueWith}>{string.continueWith}</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={styles.logo} onPress={()=>this.facebookSignin()}>
            <Image style={styles.image} source={require('../assets/images/facebook.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logo} onPress={()=>this.googleSignin()}>
            <Image style={styles.image} source={require('../assets/images/google.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logo} onPress={()=>this.numberSignin()}>
            <Image style={styles.image} source={require('../assets/images/whatsapp.png')}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state)  {
    return {
    };
}

export default connect(mapStateToProps, {
  saveUserInfo
})(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
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
