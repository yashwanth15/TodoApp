import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, FlatList} from 'react-native';
import {string} from '../resource/string.js'
import {color} from '../resource/color.js'
import { connect } from 'react-redux';

const HEIGHT=Dimensions.get('window').height

class Home extends Component<Props> {

  constructor(props){
    super(props);
    this.state={
      isLoading:false
    }
    this.handleOnClickItem=this.handleOnClickItem.bind(this);
    this.handleOnClickCreate=this.handleOnClickCreate.bind(this);
    this.handleRetry=this.handleRetry.bind(this);
  }

  handleOnClickItem=()=>{
    this.props.navigation.navigate('CreateTodo')
  }

  handleOnClickCreate=()=>{
    this.props.navigation.navigate('CreateTodo')
  }

  handleRetry=()=>{

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.first_name}>{this.props.first_name}</Text>
          <TouchableOpacity style={styles.logout}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
        <FlatList style={{marginTop:'2%'}}
          data={[{key:'1',title:'Title',context:'Context'},{key:'2',title:'Title',context:'Context'}]}
          keyExtractor={(item, index) => item.key}
          refreshing={this.state.isLoading}
          onRefresh={()=>this.handleRetry()}
          renderItem={({item})=>(
            <TouchableOpacity style={styles.card} key={item.key} onPress={()=>this.handleOnClickItem()}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.context}>{item.context}</Text>
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

function mapStateToProps(state)  {
    return {
      first_name:state.userInfo.first_name
    };
}

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:'3%',
    backgroundColor:color.white
  },
  header:{
    flexDirection:'row',
    backgroundColor:color.grey,
    justifyContent:'space-between',
  },
  first_name:{
    fontFamily:string.robotoLight,
    fontSize:20,
    margin:'3%',
  },
  logout:{
    backgroundColor:color.black,
    fontSize:16,
    justifyContent:'center',
    textAlign:'center',
    alignItems:'center',
  },
  logoutText:{
    fontFamily:string.robotoLight,
    margin:'3%',
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
    height:'100%',
  },
  card:{
    borderWidth:1,
    borderColor:color.black,
    backgroundColor:color.white,
    padding:HEIGHT/60,
    margin:'2%'
  },
  title:{
    color:color.black,
    fontSize:18,
    fontFamily:string.robotoRegular
  },
  context:{
    color:color.black,
    fontSize:13,
    marginTop:'1%',
    fontFamily:string.robotoLight
  }
});
