import { View, Text } from 'react-native';
import { useState } from 'react';

export default function AgeVerificationStatusPage() {
  const [isEligible, setIsEligible] = useState<null | boolean>(null);
  if (isEligible === null) return <Text>loading...</Text>;
  else return <View>{
    isEligible
    }</View>;
}
