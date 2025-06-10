import { View, Text, TouchableOpacity, Modal, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { useRecordContext } from '~/hooks/RecordProvider';

export default function TransactionDetailsPage() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [displayCancelModal, setDisplayCancelModal] = useState(false);
  const { record, } = useRecordContext()

  const handleConfirmTransaction = async () => {
    try {
      const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/record`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(record)
      })

      console.log("Succesfully create record");
      router.replace("/home");
    } catch (error: any) {
      console.error("Failed to confirm transaction: ", error.message)
    }
  }

  return (
    <View className="p-5 py-16">
      <View className="mb-10 rounded-lg border">
        <Text className="mb-3 rounded-t-lg bg-blue-700 p-3 text-center font-semibold text-white">
          Product Detail
        </Text>
        <View className="p-3">
          <Text className="mb-2">
            <Text className="font-semibold">Product Name: </Text> {record.product}
          </Text>

          <Text className="mb-2">
            <Text className="font-semibold">Manufacture Date: </Text>
            {record.manufacturedDate?.toString().split("T")[0]}
          </Text>
          <Text className="mb-2">
            <Text className="font-semibold">Retailer: </Text>
            {record.retailer}
          </Text>
          <Text className="mb-2">
            <Text className="font-semibold">Factory: </Text>
            {record.factory}
          </Text>

        </View>
      </View>
      <View className="rounded-lg border">
        <Text className="mb-3 rounded-t-lg bg-blue-700 p-3 text-center font-semibold text-white">
          Customer Detail
        </Text>
        <View className="p-3">
          <Text className="mb-2">
            <Text className="font-semibold">Age Verified: </Text> {record.customerAge} (Eligible) ✅
          </Text>
          <Text className="mb-2">
            <Text className="font-semibold">Customer name: </Text> {record.customerName}
          </Text>
          <Text className="mb-2">
            <Text className="font-semibold">MyKad Number: </Text> {record.ic}
          </Text>

        </View>
      </View>
      <View className="mt-10 flex flex-row gap-x-5">
        <TouchableOpacity className="flex-1 rounded-full bg-blue-700 p-3" onPress={handleConfirmTransaction}>
          <Text className="text-center font-semibold text-white">Complete {'\n'}Transaction</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setDisplayCancelModal(true)}
          className="flex-1 flex-row items-center justify-center rounded-full bg-red-500 p-3">
          <Text className="text-center font-semibold text-white">Cancel</Text>
        </TouchableOpacity>
        <Modal
          animationType="fade"
          transparent={true}
          visible={displayCancelModal}
          onRequestClose={() => setDisplayCancelModal(false)}>
          <View className="flex-1 items-center justify-center bg-black/50">
            <View className="m-5 w-80 rounded-xl bg-white p-6 shadow-lg">
              <Text className="mb-4 text-center text-lg font-bold text-red-500">
                Are you sure to cancel?
              </Text>
              <Text className="mb-4 text-center">Are you sure to cancel the transaction?</Text>

              <View className="mt-4 flex-row justify-between">
                <Pressable
                  className="mr-2 flex-1 rounded-lg bg-gray-300 px-4 py-2"
                  onPress={() => setDisplayCancelModal(false)}>
                  <Text className="text-center font-semibold">Cancel</Text>
                </Pressable>

                <Pressable
                  className="ml-2 flex-1 rounded-lg bg-red-500 px-4 py-2"
                  onPress={() => {
                    setModalVisible(false);
                    router.replace('/home');
                  }}>
                  <Text className="text-center font-semibold text-white">Confirm</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
