import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View,Image, TouchableOpacity } from 'react-native';

export default function Login() {
  return (
    <View style={styles.background}>
      <View style={styles.containerPerfil}> 
        <Image style= {styles.foto}
        source={require('./assets/fotoPerfil.jpg')} 
        />
      </View>

      <View style={styles.container}>
        <TextInput
          style= {styles.input}
          placeholder='EMAIL:'
          autoCorrect={false}
          onChangeText={()=> {}}
          />

          <TextInput
          style= {styles.input}
          placeholder="SENHA:"
          autoCorrect={false}
          onChangeText={()=> {}}
          />

          <TouchableOpacity style={styles.btnEnviar}>
            <Text>ENTRAR</Text>
          </TouchableOpacity>

      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFAFA'
  },
  containerPerfil:{
    flex:1.2,
    width:500, 
    height:106, 
    alignContent: 'center',
    backgroundColor: '#EE82EE',
    justifyContent: 'space-between',


  },
  foto: {
    flex: 1,
    width:'300px', 
    height:'100px', 
    // alignContent: 'center',
    marginLeft: '100px',
    margin: 10,
    borderRadius: 6,
    
    
  },
  container:{
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    width:'90%',
    paddingBottom: 50
  },
  input:{
    backgroundColor: '#DDA0DD',
    width: "90%",
    marginBottom: 15,
    color: 'black',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnEnviar:{
    backgroundColor: '#BA55D3',
    width: '60%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    border: 'solid',
    marginTop: 30,
    
  },
  submitText:{
    color:'#FFF',
    fontSize:18,
  },
  btRegister:{
    marginTop:10,
  },
  registerText:{
    color: '#FFF'
  }
});