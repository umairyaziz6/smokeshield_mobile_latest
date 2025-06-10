import { View, Text, } from "react-native"
import { RecordType } from "~/type"

export default function RecordCard({ record }: { record: RecordType }) {
    console.log(record)
    return <View className="m-5 p-6 bg-slate-300 rounded-xl border border-gray-400">
        <Text><Text className="font-semibold">Transaction ID:</Text> {record.id}</Text>
        <Text><Text className="font-semibold">Customer name:</Text> {record.customerName}</Text>
        <Text><Text className="font-semibold">Age:</Text> {record.customerAge}</Text>
        <Text><Text className="font-semibold">IC no:</Text> {record.ic}</Text>
        <Text><Text className="font-semibold">Product:</Text> {record.product}</Text>
        <Text><Text className="font-semibold">Retailer:</Text> {record.retailer}</Text>
        <Text><Text className="font-semibold">Date of purchase:</Text> {record.datePurchase?.toString().split("T")[0]}</Text>
    </View>
}