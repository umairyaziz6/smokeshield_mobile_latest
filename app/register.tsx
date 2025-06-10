import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  function handleRegister() {
    if (password === confirmPassword) {
      // do something
      router.push('/home');
    } else {
      setError('Password not match');
    }
  }

  return (
    <View>
      <View className="p-6 py-20">
        <Text className=" mb-7 text-3xl font-semibold">Register</Text>
        <Text className="text-lg">Already have an account, you can</Text>
        <Text className="mb-16 text-lg font-semibold text-blue-700 underline">
          <Link href="/login">Login now!</Link>
        </Text>

        <Text className="text-gray-500">Email</Text>
        <TextInput
          className="mb-6 border-b-2 p-4 focus:border-blue-700"
          placeholder="Enter your email address"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />

        <Text className="text-gray-500">Username</Text>
        <TextInput
          className="mb-2 border-b-2 p-4 focus:border-r-blue-700"
          placeholder="Enter your username"
          secureTextEntry
          value={password}
          onChangeText={(value) => setPassword(value)}
        />

        <Text className="text-gray-500">Password</Text>
        <TextInput
          className="mb-2 border-b-2 p-4 focus:border-r-blue-700"
          placeholder="Enter your password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={(value) => setConfirmPassword(value)}
        />

        <Text className="text-gray-500">Confirm Password</Text>
        <TextInput
          className="mb-2 border-b-2 p-4 focus:border-r-blue-700"
          placeholder="Confirm your password"
        />

        <TouchableOpacity className="mb-10 mt-20">
          <Text className="mx-auto w-full rounded-full bg-blue-700 py-4 text-center font-semibold text-white">
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
