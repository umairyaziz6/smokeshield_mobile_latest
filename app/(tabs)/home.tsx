import { View, Text, Image, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { useRouter } from 'expo-router';

export default function HomePage() {
  const router = useRouter();

  return (
    <View className="flex h-screen flex-col justify-center p-14">
      <View>
        <Image />
        <Text className="text-center text-2xl font-semibold text-blue-700">
          Trace | Verify | <Text className="text-green-700">Protect</Text>
        </Text>
        <Text className="text-center text-sm text-gray-600">
          Your trusted partner to secure and responsible sales
        </Text>
        <TouchableOpacity
          className="mt-10 flex flex-row items-center justify-center rounded-full bg-blue-700 py-4"
          onPress={() => router.push('/check-id')}>
          <Entypo name="magnifying-glass" size={24} color={'white'} className="mr-2" />
          <Text className="text-xl font-semibold text-white">Start Checking</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
