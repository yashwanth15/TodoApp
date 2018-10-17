import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, FlatList} from 'react-native';
import {string} from '../resource/string.js'
import {color} from '../resource/color.js'
import { connect } from 'react-redux';
import {deleteTodo} from '../actions/deleteTodo'
import { AsyncStorage } from "react-native"

const HEIGHT=Dimensions.get('window').height
const WIDTH=Dimensions.get('window').width

class Home extends Component<Props> {

  constructor(props){
    super(props);
    this.state={
      isLoading:false,
      todos:[]
    }
    this.handleOnClickItem=this.handleOnClickItem.bind(this);
    this.handleOnClickCreate=this.handleOnClickCreate.bind(this);
    this.handleRetry=this.handleRetry.bind(this);
    this.handleDeleteTodo=this.handleDeleteTodo.bind(this);
    this.logout=this.logout.bind(this);
  }

  handleOnClickItem=(item,index)=>{
    this.props.navigation.navigate('CreateTodo',{title:item.title,context:item.context,index:index})
  }

  handleOnClickCreate=()=>{
    this.props.navigation.navigate('CreateTodo')
  }

  handleRetry=()=>{

  }

  logout=()=>{
    AsyncStorage.multiRemove(['TodoAppUserEmail','TodoAppUserName'])
    .then((response)=>console.log('response',response))
    .catch((e)=>console.log('error',e))
    this.props.navigation.navigate('Login');
  }

  handleDeleteTodo=(index)=>{
    this.props.deleteTodo(index);
  }

  componentDidMount(){
    this.setState({todos:this.props.todos})
  }

  componentWillReceiveProps(props){
    console.log('in props',props);
    if (this.state.todos.length!=props.todos.length) {
      this.setState({
        todos:props.todos
      },()=>console.log('Props',this.state.todos))
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.first_name}>{this.props.first_name}</Text>
          <TouchableOpacity style={styles.logout} onPress={()=>this.logout()}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
        <FlatList style={{marginTop:HEIGHT/60}}
          data={this.state.todos}
          keyExtractor={(item, index) => index+''}
          refreshing={this.state.isLoading}
          onRefresh={()=>this.handleRetry()}
          renderItem={({item,index})=>(
            <TouchableOpacity style={styles.card} onPress={()=>this.handleOnClickItem(item,index)}>
              <View style={{padding:HEIGHT/60,flex:1}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.context}>{item.context}</Text>
              </View>
              <TouchableOpacity onPress={()=>this.handleDeleteTodo(index)} style={{width:WIDTH/12,justifyContent:'center',alignItems:'center',paddingRight:WIDTH/60}}>
                <Image style={{width:WIDTH/15,height:WIDTH/15}} resizeMode='contain' source={require('../assets/images/trash.png')}/>
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity style={styles.add} onPress={()=>this.handleOnClickCreate()}>
          <Image style={styles.image} source={require('../assets/images/add.png')}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps=(state)=>  ({
  first_name:state.userInfo.first_name,
  todos:state.saveTodo.todos,
  changed:state.saveTodo.changed,
})

export default connect(mapStateToProps,{
  deleteTodo
})(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:HEIGHT/60,
    backgroundColor:color.white
  },
  header:{
    borderRadius:50,
    flexDirection:'row',
    backgroundColor:color.grey,
    justifyContent:'space-between',
  },
  first_name:{
    marginLeft:WIDTH/20,
    fontFamily:string.robotoLight,
    fontSize:20,
    margin:HEIGHT/60,
  },
  logout:{
    borderRadius:50,
    backgroundColor:color.black,
    fontSize:16,
    justifyContent:'center',
    textAlign:'center',
    alignItems:'center',
  },
  logoutText:{
    fontFamily:string.robotoLight,
    margin:HEIGHT/50,
    color:color.white
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
    height:'100%'
  },
  card:{
    borderRadius:5,
    borderWidth:1,
    borderColor:color.black,
    backgroundColor:color.white,
    margin:HEIGHT/100,
    flexDirection:'row'
  },
  title:{
    color:color.black,
    fontSize:18,
    fontFamily:string.robotoRegular
  },
  context:{
    color:color.black,
    fontSize:13,
    marginTop:HEIGHT/120,
    fontFamily:string.robotoLight
  }
});
