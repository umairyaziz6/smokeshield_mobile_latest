import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function NotCounterfeit() {
  const router = useRouter();

  return (
    <View>
      <AntDesign name="checkcircle" size={100} color={'green'} className="mx-auto mb-6 w-fit" />
      <Text className="text-center text-2xl font-semibold">Not a counterfeit product!</Text>
      <Text className="text-md text-center text-gray-500">
        The product is has been verified as not a counterfeit
      </Text>
      <TouchableOpacity
        onPress={() => router.push('/key-in-birthday')}
        className="mx-auto mt-14 w-32 rounded-full bg-blue-700 py-4">
        <Text className="text-center font-semibold text-white">Next</Text>
      </TouchableOpacity>
    </View>
  );
}