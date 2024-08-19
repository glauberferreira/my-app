import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { auth } from './../firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        router.replace('/home');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode);
        console.error(errorMessage);
      });
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput label="Email" value={email} onChangeText={setEmail} />
      <TextInput label="Senha" value={senha} onChangeText={setSenha} />
      <Button title='Login' onPress={handleLogin} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
