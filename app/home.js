import { View, Text } from 'react-native';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import { useRouter } from 'expo-router';
import { Button } from 'react-native-paper';

const Home = () => {
  const user = auth.currentUser;
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.replace('/');
  }

  return (
    <View>
      <Text>Home</Text>
      <Text>{user.uid}</Text>
      <Text>{user.email}</Text>
      <Button onPress={handleLogout}>Sair</Button>
    </View>
  )
}

export default Home;