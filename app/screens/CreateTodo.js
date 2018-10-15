import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, TextInput} from 'react-native';
import {string} from '../resource/string.js'
import {color} from '../resource/color.js'
import { connect } from 'react-redux';
import store from '../config/store';
import {saveTodo} from '../actions/saveTodo'
import {editTodo} from '../actions/editTodo'
import Toast from 'react-native-simple-toast';

const HEIGHT=Dimensions.get('window').height

class CreateTodo extends Component<Props> {

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
    if (this.state.title!=''||this.state.context!='') {
      if (this.props.navigation.state.params) {
        this.props.editTodo({title:this.state.title,context:this.state.context},this.props.navigation.state.params.index)
      }else{
        this.props.saveTodo({title:this.state.title,context:this.state.context})
      }
      console.log(store.getState())
      this.props.navigation.pop()
    }else {
      Toast.show('Empty fields!');
    }
  }

  componentDidMount(){
    if (this.props.navigation.state.params) {
      this.setState({
        title:this.props.navigation.state.params.title,
        context:this.props.navigation.state.params.context
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.title}
          onChangeText={(text)=>this.setState({title:text})}
          defaultValue={this.state.title}
          multiline = {true}
          autoCorrect={true}
          autoFocus={true}
          placeholder={string.title}
         />
         <TextInput style={styles.context}
           onChangeText={(text)=>this.setState({context:text})}
           defaultValue={this.state.context}
           multiline = {true}
           autoCorrect={true}
           placeholder={string.context}
          />
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.cancel} onPress={()=>this.handleOnClickCancel()}>
            <Text style={styles.cancelText}>{string.cancel}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.done} onPress={()=>this.handleOnClickDone()}>
            <Text style={styles.doneText}>{string.done}</Text>
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
  saveTodo,
  editTodo
})(CreateTodo);

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
    fontFamily:string.robotoRegular,
    paddingHorizontal:'3%',
  },
  context:{
    borderWidth:1,
    borderColor:color.black,
    margin:'2%',
    fontSize:15,
    paddingHorizontal:'3%',
    flex:1,
    fontFamily:string.robotoLight,
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
    fontSize:13,
    fontFamily:string.robotoLight
  },
  doneText:{
    color:color.white,
    fontSize:13,
    fontFamily:string.robotoLight
  }
});
