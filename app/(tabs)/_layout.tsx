import { Tabs } from 'expo-router';
import { Feather, FontAwesome } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#dadbda',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={'#797d85'} />,
        }}
      />
      <Tabs.Screen
        name="record"
        options={{
          headerShown: false,
          title: 'Record',
          tabBarIcon: () => <Feather name="list" size={24} color={'#797d85'} />,
        }}
      />
    </Tabs>
  );
}
