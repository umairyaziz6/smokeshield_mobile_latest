import NotCounterfeit from '~/components/NotCounterfeit';
import { useLocalSearchParams } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function isNotCounterfeitPage() {
  const router = useRouter()
  const { id, name, manufacturedDate, factory } = useLocalSearchParams()

  return (
    <View className="flex h-screen flex-col justify-center ">
      <View>
        <AntDesign name="checkcircle" size={100} color={'green'} className="mx-auto mb-6 w-fit" />
        <Text className="text-center text-2xl font-semibold">Not a counterfeit product!</Text>
        <Text className="text-md text-center text-gray-500">
          The product has been verified as not a counterfeit
        </Text>

        <View className='m-10'>
          <Text className='text-lg font-semibold text-center'>Product Details</Text>
          <Text><Text className='font-semibold text-center'>Product ID:</Text> {id}</Text>
          <Text><Text className='font-semibold text-center'>Product name:</Text> {name}</Text>
          <Text><Text className='font-semibold text-center'>Manufactured Date:</Text> {manufacturedDate.toString().split("T")[0]}</Text>
          <Text><Text className='font-semibold text-center'>Factory:</Text> {factory ?? "No factory specified"}</Text>
        </View>

        <TouchableOpacity
          onPress={() => router.push('/key-in-birthday')}
          className="mx-auto mt-4 w-32 rounded-full bg-blue-700 py-4">
          <Text className="text-center font-semibold text-white">Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
