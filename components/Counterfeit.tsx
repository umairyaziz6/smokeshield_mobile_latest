import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Counterfeit() {
  const router = useRouter();

  return (
    <View>
      <AntDesign name="closecircle" size={100} color={'red'} className="mx-auto mb-6 w-fit" />
      <Text className="text-center text-2xl font-semibold">Counterfeit product!</Text>
      <Text className="text-md text-center text-gray-500">
        The product is not found in database. There might be possibility of counterfeit product!
      </Text>
      <TouchableOpacity
        onPress={() => router.replace('/home')}
        className="mx-auto mt-14 w-32 rounded-full bg-blue-700 py-4">
        <Text className="text-center font-semibold text-white">Next</Text>
      </TouchableOpacity>
    </View>
  );
}
