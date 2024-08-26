import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { auth } from './../firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { Link, useRouter } from 'expo-router';
import { FirebaseError } from 'firebase/app';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      router.replace('/home');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode);
      console.error(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput label="Email" value={email} onChangeText={setEmail} keyboardType='email-address' />
      <TextInput label="Senha" value={senha} onChangeText={setSenha} secureTextEntry={true} />
      <Button onPress={handleLogin} loading={isLoading}>Login</Button>
      <Link href='/cadastro'>Cadastrar</Link>

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
