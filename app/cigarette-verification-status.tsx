import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';
import Counterfeit from '~/components/Counterfeit';
import NotCounterfeit from '~/components/NotCounterfeit';

export default function VerificationStatusPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isCounterfeit, setIsCounterfeit] = useState<null | boolean>(false);

  function handleCheck() {
    let isCounterfeit = true;
    // do something
    //
    //

    if (isCounterfeit) {
      setIsCounterfeit(true);
    } else {
      setIsCounterfeit(false);
    }
  }

  if (isCounterfeit === null) return <Text>Checking</Text>;
  else
    return (
      <View className="flex h-screen flex-col justify-center ">
        {isCounterfeit ? <Counterfeit /> : <NotCounterfeit />}
      </View>
    );
}
