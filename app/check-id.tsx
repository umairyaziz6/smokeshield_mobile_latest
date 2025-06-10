import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { useContext } from 'react';
import { useRecordContext } from '~/hooks/RecordProvider';

export default function CheckIdPage() {
  const [cigaretteId, setCigaretteId] = useState('');
  const [cigarette, setCigarette] = useState({})
  const [error, setError] = useState("")
  const router = useRouter();
  const { record, setRecord } = useRecordContext()

  async function handleCheckCigaretteId() {
    if (cigaretteId.length > 0) {
      const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/cigarette?id=${cigaretteId}`, { method: "get" })

      // cigarette found , not counterfeit
      if (res.status === 200) {
        const data = await res.json()
        setCigarette(data)
        setRecord({
          ...record,
          product: data.name,
          manufacturedDate: data.manufacturedDate,
          factory: data.factory,
          cigaretteId: parseInt(cigaretteId)
        })
        router.push({ pathname: "/is-not-counterfeit", params: data })

        // cigarette not found, couterfeit
      } else if (res.status === 404) {
        router.push("/is-counterfeit")
      }
    } else setError("Enter cigarette ID")

  }

  return (
    <View className="flex h-[80vh] flex-col justify-center p-10">
      <View>
        <View>
          <Text className="text-center">

            Key in the Cigarette Unique ID to determine if counterfeit cigarette or not
          </Text>
          <TextInput
            value={cigaretteId}
            placeholder="Enter ID here"
            onChangeText={(value) => setCigaretteId(value)}
            className="mt-8 rounded-2xl border border-gray-500 p-4"
          />
          <TouchableOpacity
            className="mx-auto mt-6 w-32 rounded-full bg-blue-700 py-4"
            onPress={handleCheckCigaretteId}>
            <Text className="text-center font-semibold text-white">Check</Text>
          </TouchableOpacity>
          <Text className='text-center text-red-500'>{error}</Text>
        </View>
      </View>
    </View>
  );
}
