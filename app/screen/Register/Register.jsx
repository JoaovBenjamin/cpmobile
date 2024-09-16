import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import facebook from '../../../assets/facebook.png';
import google from '../../../assets/google.png';
import logo from '../../../assets/logo.png';
import twiter from '../../../assets/twiter.png';
import { styles } from './Styles';
import { CheckBox } from 'react-native-web';
import seta from '../../../assets/seta.png'



export default function Register({ navigation }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [password, setPassword] = useState('')
  
    const handleRegister = () => {
        let hasError = false;
    
        if (name.trim() === '') {
          Alert.alert('Erro', 'O nome não pode estar vazio');
          alert('Nome não pode estar vazio')
          hasError = true;
        }
    
        if (email.trim() === '') {
          Alert.alert('Erro', 'O email não pode estar vazio');
          alert('Email não pode estar vazio')
          hasError = true;
        }
    
        if (password.trim() === '') {
            alert('password não pode estar vazio')
          Alert.alert('Erro', 'A senha não pode estar vazia');
          hasError = true;
        }
    
        if (confirmPassword.trim() === '') {
            alert('confirme sua senha')
          Alert.alert('Erro', 'A confirmação de senha não pode estar vazia');
          hasError = true;
        }
    
        if (password !== confirmPassword) {
         alert('a senha deve ser a mesma')
          Alert.alert('Erro', 'As senhas não coincidem');
          hasError = true;
        }
    
        if (!hasError) {
          Alert.alert('Sucesso', 'Registro enviado com sucesso!');
          alert('registro realizado com sucesso')
          navigation.navigate('Login');
        }
      };

  function HandleRegisterMedia(){
    alert('Registro realizado com sucesso')
    navigation.navigate('Login')
}


  return (
    <View style={styles.container}>
        <View style={styles.containerImage} >
                 <Image source={logo} style={styles.image} />
                 <Image source={seta} style={styles.image}/>
        </View>
      <Text style={styles.textoH1}>Create your account</Text>
      <View style={styles.containerInput}>
        <TextInput
          placeholder='Name'
          value={name}
          onChangeText={setName}
          style={styles.textInput}
          keyboardType='email-address'></TextInput>
        <TextInput
          placeholder='Email'
          style={styles.textInput}
          value={email}
          onChangeText={setEmail}
          keyboardType='visible-password'></TextInput>
        <TextInput
          placeholder='Password'
          style={styles.textInput}
          keyboardType='visible-password'
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          ></TextInput>
        <TextInput
          placeholder='Confirm password'
          style={styles.textInput} k
          eyboardType='visible-password'
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          ></TextInput>
        <Text style={styles.containerCheckbox}>
          <CheckBox
          ></CheckBox>I understood the 
          <Text style={styles.textUseTerms}>terms & policy.
          </Text>
        </Text>
        <TouchableOpacity
          onPress={handleRegister}
          style={styles.buttonRegister}>SIGN UP</TouchableOpacity>
        <Text style={styles.textH3}>or sign up with</Text>
        <View style={styles.containerSocialMedia}>
          <TouchableOpacity onPress={HandleRegisterMedia} style={styles.buttonSocialMedia}>
            <Image source={google}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={HandleRegisterMedia} style={styles.buttonSocialMedia}>
            <Image source={facebook}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={HandleRegisterMedia} style={styles.buttonSocialMedia}>
            <Image source={twiter}></Image>
          </TouchableOpacity>
        </View>
        <Text style={styles.textH3}>Have an account? 
          <Text
            onPress={() => navigation.navigate('Login')}
            style={styles.textLink}> sing in</Text>
        </Text>
      </View>
    </View>
  )
}
