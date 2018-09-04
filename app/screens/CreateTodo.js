import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, TextInput} from 'react-native';
import {string} from '../resource/string.js'
import {color} from '../resource/color.js'

const HEIGHT=Dimensions.get('window').height

export default class CreateTodo extends Component<Props> {

  constructor(props){
    super(props);
    this.state={
      title:'',
      context:''
    }
    this.handleOnClickCancel=this.handleOnClickCancel.bind(this);
    this.handleOnClickDone=this.handleOnClickDone.bind(this);
  }

  handleOnClickCancel=()=>{
    this.props.navigation.pop()
  }

  handleOnClickDone=()=>{
    this.props.navigation.pop()
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.title}
          onChangeText={(text)=>this.setState({title:text})}
          multiline = {true}
          autoCorrect={true}
          autoFocus={true}
          placeholder={'Title'}
         />
         <TextInput style={styles.context}
           onChangeText={(text)=>this.setState({context:text})}
           multiline = {true}
           autoCorrect={true}
           placeholder={'Context'}
          />
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.cancel} onPress={()=>this.handleOnClickCancel()}>
            <Text style={styles.cancelText}>CANCEL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.done} onPress={()=>this.handleOnClickDone()}>
            <Text style={styles.doneText}>DONE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:color.white,
  },
  title:{
    borderWidth:1,
    borderColor:color.black,
    marginHorizontal:'2%',
    marginTop:'2%',
    fontSize:18,
    fontWeight:'bold',
    paddingHorizontal:'3%',
  },
  context:{
    borderWidth:1,
    borderColor:color.black,
    margin:'2%',
    fontSize:15,
    paddingHorizontal:'3%',
    flex:1,
    textAlignVertical: 'top'
  },
  buttons:{
    flexDirection:'row',
    height:HEIGHT/10,
    width:'100%'
  },
  cancel:{
    width:'50%',
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:color.grey,
    textAlign:'center',
  },
  done:{
    width:'50%',
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:color.black,
    textAlign:'center',
  },
  cancelText:{
    color:color.black,
    fontSize:13
  },
  doneText:{
    color:color.white,
    fontSize:13
  }
});
