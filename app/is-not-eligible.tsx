import NotEligibleForPurchase from '~/components/NotEligibleForPurchase';
import { View } from 'react-native';

export default function isNotEligiblePage() {
  return (
    <View className="flex h-screen flex-col justify-center ">
      <NotEligibleForPurchase />
    </View>
  );
}
