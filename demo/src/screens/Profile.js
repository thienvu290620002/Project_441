import React, { useEffect, useState } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Assuming you're using React Navigation

const Profile = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Retrieve the JWT from storage (securely)
        const token = await AsyncStorage.getItem('jwtToken'); 
        if (!token) {
          // If no token, redirect to login
          navigation.navigate('Login'); 
          return; 
        }

        // Fetch user data using the JWT
        const response = await fetch('http://10.0.2.2:3000/api/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
        setError(error.message);
      }
    };

    fetchUser ();
  }, [navigation]);

  if (error) {
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  if (!user) {
    return (
      <View>
        <Text>Loading user data...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome, {user.username}!</Text>
      <Text>Phone: {user.phone}</Text>
      <Text>Email: {user.gmail}</Text>
      <Text>Address: {user.address}</Text>
    </View>
  );
};

export default Profile;