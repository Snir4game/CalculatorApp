import react,{useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';

export default function App() {

  const [result,setReuslt]=useState();
  const[number,setNumber]=useState();
  let x=number;
  const sum =(input)=>{
    x+=input;
    setNumber(number+input);
  }
const num=()=>{
  setReuslt(eval(x));
}
const clear=()=>{
  x='';
  setReuslt('');
  setNumber('');
}



  return (
    <View style={styles.container}>
      <View style={styles.Sumbox}>
        <Text style={{fontSize:20}}>
          {number}
        </Text>
        <Text style={{fontSize:24}}>
          {result}
        </Text>
        </View>
        <View style={styles.Numbox123}>
          <TouchableOpacity onPress={()=>{sum(1)}} style={styles.Btn}><Text style={styles.btnText}>1</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>{sum(2)}} style={styles.Btn}><Text style={styles.btnText}>2</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>{sum(3)}} style={styles.Btn}><Text style={styles.btnText}>3</Text></TouchableOpacity>
      </View>
      <View style={styles.Numbox123}>
          <TouchableOpacity onPress={()=>{sum(4)}} style={styles.Btn}><Text style={styles.btnText}>4</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>{sum(5)}} style={styles.Btn}><Text style={styles.btnText}>5</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>{sum(6)}} style={styles.Btn}><Text style={styles.btnText}>6</Text></TouchableOpacity>
      </View>
      <View style={styles.Numbox123}>
          <TouchableOpacity onPress={()=>{sum(7)}} style={styles.Btn}><Text style={styles.btnText}>7</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>{sum(8)}} style={styles.Btn}><Text style={styles.btnText}>8</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>{sum(9)}} style={styles.Btn}><Text style={styles.btnText}>9</Text></TouchableOpacity>
      </View>
      <View style={styles.Numbox0}>
          <TouchableOpacity onPress={()=>{sum(0)}} style={styles.Btn}><Text style={styles.btnText}>0</Text></TouchableOpacity>
      </View>
          <View style={styles.Funcbox}>
          <TouchableOpacity onPress={()=>sum('*')} style={styles.btnFunc}><Text style={styles.btnText}>*</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>sum('/')} style={styles.btnFunc}><Text style={styles.btnText}>/</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>sum('+')} style={styles.btnFunc}><Text style={styles.btnText}>+</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>sum('-')} style={styles.btnFunc}><Text style={styles.btnText}>-</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>num()}style={styles.btnFunc}><Text style={styles.btnText}>=</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>clear()} style={styles.btnFunc}><Text style={styles.btnText}>Clear</Text></TouchableOpacity>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#011627',
    alignItems: 'center',
    justifyContent: 'center',
    padding:30
  },
  Sumbox:{
    width:'100%',height:100,backgroundColor:'#ffffff'
  },
  Numbox123:{
  flexDirection:'row',paddingVertical:3,justifyContent:'space-between',width:'100%'
  },
  Numbox0:{flexDirection:'row',paddingVertical:3,justifyContent:'center',width:'100%',margin:2
},
  Funcbox:{
  flexDirection:'row',paddingVertical:3,justifyContent:'space-between' ,width:'100%'
  },
  Btn:{
    backgroundColor:'#E71D36',height:100,width:'30%',justifyContent:'center',alignItems:'center'
  },
  btnFunc:{
    backgroundColor:'#2EC4B6',
    height:80,
    width:'15%',
    alignItems:'center',
    padding:10,
},
  btnText:{fontSize:45,

  }
});
