import { View, Text } from 'react-native';
import { auth } from '../firebaseConfig';

const Home = () => {
  const user = auth.currentUser;

  return (
    <View>
      <Text>Home</Text>
      <Text>{user.uid}</Text>
      <Text>{user.email}</Text>
    </View>
  )
}

export default Home;