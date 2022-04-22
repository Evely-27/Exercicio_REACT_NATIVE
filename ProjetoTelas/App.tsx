import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View,Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.background}>
      <View style={styles.containerPerfil}> 
        <Image style= {styles.containerPerfil}
        source={require('./assets/fotoPerfil.jpg')}
        />
      </View>

      <View style={styles.container}>
        <TextInput
          style= {styles.input}
          placeholder='Email:'
          autoCorrect={false}
          onChangeText={()=> {}}
          />

          <TextInput
          style= {styles.input}
          placeholder="Senha:"
          autoCorrect={false}
          onChangeText={()=> {}}
          />

          <TouchableOpacity style={styles.btnEnviar}>
            <Text>Entrar</Text>
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
    backgroundColor: 'skyblue'
  },
  containerPerfil:{
    flex:1,
    width:500, 
    height:106, 
    alignContent: 'center',

  },
  container:{
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    width:'90%',
    paddingBottom: 50
  },
  input:{
    backgroundColor: '#FFF',
    width: "90%",
    marginBottom: 15,
    color: '#black',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnEnviar:{
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
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