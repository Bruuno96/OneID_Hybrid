import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

// or any pure javascript modules available in npm

export default function CadastroEstagio1() {
  return (
    <View style={styles.container}>
      
      <View style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: 300, marginBottom: 30, marginTop: 70}}>
        <Text style={{ color: 'white'}}>Para criar sua conta basta preencher com seus dados pessoais, pode ficar tranquilo que seus dados estão seguros :)</Text>
      </View>

        <TextInput
          style={styles.input}
          placeholder="Digite seu Primeiro nome"
        />

        <TextInput
          style={styles.input}
          placeholder="Digite seu Último nome"
          secureTextEntry={true}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite seu celular"
        />

        <TextInput
          style={styles.input}
          placeholder="Digite seu E-mail"
          secureTextEntry={true}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
        />

        <TextInput
          style={styles.input}
          placeholder="Confirme sua senha"
          secureTextEntry={true}
        />

        <View style={{flex: 1, flexDirection: 'row', marginTop: 50}}>
           <View style={{width:30, height:30, borderRadius: 50, backgroundColor: 'purple', marginBottom: 40, marginRight: 15}}></View>
           <View style={{width:30, height:30, borderRadius: 50, backgroundColor: 'gray', marginBottom: 40, marginRight: 15}}></View>
           <View style={{width:30, height:30, borderRadius: 50, backgroundColor: 'gray', marginBottom: 40, marginRight: 15}}></View>
          <View style={{width:30, height:30, borderRadius: 50, backgroundColor: 'gray', marginBottom: 40}}></View>
        </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)',

  }, 
  input:{
    marginBottom: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3

  }
});
