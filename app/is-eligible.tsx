import EligibileForPurchase from '~/components/EligibleForPurchase';
import { View } from 'react-native';

export default function isEligiblePage() {
  return (
    <View className="flex h-screen flex-col justify-center ">
      <EligibileForPurchase />
    </View>
  );
}
