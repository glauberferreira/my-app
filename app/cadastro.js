import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { auth } from '../firebaseConfig';

const Cadastro = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [repetirSenha, setRepetirSenha] = useState('');
    const [isLoading, setLoading] = useState(false);
    const router = useRouter();

    const handleCadastrar = async () => {
        try {
            setLoading(true);
            await createUserWithEmailAndPassword(auth, email, senha);
            // Signed up
            router.replace('/home');
          } catch (error) {
            console.error(error.code);
            console.error(error.message);
          } finally {
            setLoading(false);
          }     
    }

    return (
        <View>
            <TextInput label="Email" value={email} onChangeText={setEmail} keyboardType='email-address' />
            <TextInput label="Senha" value={senha} onChangeText={setSenha} secureTextEntry={true}/>
            <TextInput label="Repetir Senha" value={repetirSenha} onChangeText={setRepetirSenha} secureTextEntry={true} />
            <Button onPress={handleCadastrar} loading={isLoading}>Cadastrar</Button>
        </View>
    )
}

export default Cadastro;