import { View, ScrollView } from "react-native"
import RecordCard from "~/components/RecordCard";
import { Text } from "react-native";
import { useState, useEffect } from "react";
import { RecordType } from "~/type";

export default function RecordPage() {
  const [records, setRecords] = useState<RecordType[] | []>([]);

  const handleFetchRecords = async () => {
    try {
      console.log("Fetching records")

      const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/records`, { method: "get" })
      const data = await res.json()
      setRecords(data)

      console.log("Fetch records success: ", records)
    } catch (error: any) {
      console.error(`Failed to fetch all records: ${error.message}`)
    }
  }

  useEffect(() => {
    handleFetchRecords()
  }, [])

  return (
    <View>
      <Text className='text-center mt-10 text-xl font-semibold'>Records</Text>
      <ScrollView>
        {records.length == 0 ? <Text className="text-center mt-10">No record yet</Text> : records.map(record => <RecordCard key={record.id} record={record} />)}
      </ScrollView>
    </View>
  );
}
