import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { useRecordContext } from '~/hooks/RecordProvider';

export default function KeyInBirthday() {
  const [fullName, setFullName] = useState('');
  const [icNumber, setIcNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("")
  const router = useRouter();
  const { record, setRecord } = useRecordContext()

  async function handleVerifyAge() {
    let isEligible = false;

    if (fullName.length <= 0 || icNumber.length <= 0) {
      setError("Enter name and MyKad")
      return
    }

    const data = {
      ...record,
      customerName: fullName,
      ic: icNumber,
    }

    const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/verify-age`, {
      method: "post", body: JSON.stringify(data), headers: {
        "Content-Type": "application/json"
      }
    })

    const fetchedData = await res.json()
    isEligible = fetchedData.result === "legal"

    if (isEligible) {
      setRecord({
        ...record,
        customerAge: fetchedData.customerAge,
        customerName: fullName,
        datePurchase: new Date(),
        retailer: process.env.EXPO_PUBLIC_RETAILER!,
        ic: icNumber,
      })
      router.push("/is-eligible");
    } else {
      router.push('/is-not-eligible');
    }
  }

  return (
    <View className="p-8">
      <Text className="mb-10 text-2xl font-semibold">Verify Your Age</Text>

      <Text>
        <Text className="font-semibold">Name</Text> (as in your IC)
      </Text>
      <TextInput
        className="mb-6 border-b-2 p-4 focus:border-blue-700"
        placeholder="Enter fullname"
        value={fullName}
        onChangeText={(value) => setFullName(value)}
      />

      <Text className="font-semibold">MyKad IC Number</Text>
      <TextInput
        className="mb-6 border-b-2 p-4 focus:border-blue-700"
        placeholder="xxxxxxxxxxxx"
        inputMode="numeric"
        value={icNumber}
        onChangeText={(value) => setIcNumber(value)}
      />

      <TouchableOpacity
        className="mx-auto  mb-2 mt-5 w-32 rounded-full bg-blue-700 py-4"
        onPress={handleVerifyAge}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text className="text-center font-semibold text-white">Verify</Text>
        )}
      </TouchableOpacity>

      <Text className="text-center text-sm text-gray-600">
        We only use the back IC number for verification purposes and do not store your
        information{' '}
      </Text>

      <Text className='text-center text-red-500 mt-5'>{error}</Text>
    </View>
  );
}
