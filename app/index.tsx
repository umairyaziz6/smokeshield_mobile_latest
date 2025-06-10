import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function LandingPage() {
  const router = useRouter();

  return (
    <View className="flex h-screen flex-col justify-center">
      <View className="p-6">
        <Text className="text-center text-2xl font-semibold">Welcome to</Text>
        <Text className="mb-10 text-center text-4xl font-bold">SmokeShield</Text>
        <Image />
        <Text className="text-center text-2xl font-semibold text-blue-700">
          Trace | Verify | <Text className="text-green-700">Protect</Text>
        </Text>
        <Text className="text-center text-sm text-gray-600">
          Your trusted partner to secure and responsible sales
        </Text>
        <TouchableOpacity className="mb-10 mt-20" onPress={() => router.push('/login')}>
          <Text className="mx-auto w-48 rounded-full bg-blue-700 py-4 text-center font-semibold text-white">
            GET STARTED
          </Text>
        </TouchableOpacity>
        <Text className="text-center text-sm text-gray-600">By proceeding, you agree to our</Text>
        <Text className="text-center">
          <Text className="font-semibold text-blue-700">[Terms of Services]</Text> and{' '}
          <Text className="font-semibold text-blue-700">[Privacy Policy]</Text>
        </Text>
      </View>
    </View>
  );
}
