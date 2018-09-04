import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TouchableOpacity, Image} from 'react-native';
import {string} from '../resource/string.js'
import {color} from '../resource/color.js'

const HEIGHT=Dimensions.get('window').height

export default class Home extends Component<Props> {

  constructor(props){
    super(props);
    this.state={

    }
    this.handleOnClickItem=this.handleOnClickItem.bind(this);
    this.handleOnClickCreate=this.handleOnClickCreate.bind(this);
  }

  handleOnClickItem=()=>{
    this.props.navigation.navigate('CreateTodo')
  }

  handleOnClickCreate=()=>{
    this.props.navigation.navigate('CreateTodo')
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.item} onPress={()=>this.handleOnClickItem()}>
          <Text style={styles.title}>Title</Text>
          <Text style={styles.context}>Context</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.add} onPress={()=>this.handleOnClickCreate()}>
          <Image style={styles.image} source={require('../assets/images/add.png')}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:color.white
  },
  add:{
    position:'absolute',
    bottom:25,
    right:25,
    width:HEIGHT/12,
    height:HEIGHT/12,
  },
  image:{
    width:'100%',
    height:'100%',
  },
  item:{
    borderWidth:1,
    borderColor:color.black,
    backgroundColor:color.white,
    padding:HEIGHT/60,
    margin:'2%'
  },
  title:{
    color:color.black,
    fontWeight:'bold',
    fontSize:18
  },
  context:{
    color:color.black,
    fontSize:13,
    marginTop:'1%'
  }
});
