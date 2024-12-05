import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity,
  TextInput,
  ActivityIndicator, // Add the ActivityIndicator import
} from 'react-native';

const Rewards = ({ route }) => {
  const { productId } = route.params || { productId: 22 }; // Default for testing
  const [product, setProduct] = useState(null);
  const [rating, setRating] = useState(0); // Initialize rating state here
  const [feedback, setFeedback] = useState('');

  const fetchProduct = async () => {
    try {
      const response = await fetch('http://10.0.2.2:3000/api/products');
      if (response.ok) {
        const data = await response.json();
        const selectedProduct =
          data.find(product => product.id === productId) || data[1];
        setProduct(selectedProduct);
        // console.log(data);
      } else {
        Alert.alert('Error', 'Failed to fetch product data');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred while fetching product data');
      console.error(error);
    }
  };

  // Render stars based on the rating value
  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => setRating(i)}>
          <Text
            style={[styles.star, { color: i <= rating ? '#FFD700' : '#ccc' }]}>
            ★
          </Text>
        </TouchableOpacity>,
      );
    }
    return stars;
  };

  // Send feedback to backend
  const sendFeedbackToBackend = async () => {
    try {
      await fetch(`http://10.0.2.2:3000/api/products/${productId}/rate`, { // Correct URL with productId
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rating,
          feedback,  // If feedback is necessary to store, send it too
        }),
      });
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };
  

  // Handle the "Send" button click
  const handleSendFeedback = async () => {
    if (rating === 0) {
      Alert.alert('Please select a rating');
      return;
    }
    if (!feedback.trim()) {
      Alert.alert('Please enter some feedback');
      return;
    }

    // Calculate the new rate and numVoted
    const newRate = product.rate + rating;
    const newNumVoted = product.numVoted + 1;
    const averageRating = newRate / newNumVoted;

    // Update the product locally
    const updatedProduct = {
      ...product,
      numVoted: newNumVoted,
      rate: newRate,
      averageRating: averageRating.toFixed(1), // Store the average rating rounded to 1 decimal place
    };

    setProduct(updatedProduct); // Update local product data

    // Show thank you alert
    Alert.alert('Thank You', 'Your feedback has been submitted.');

    // Call backend to submit feedback
    await sendFeedbackToBackend();
  };

  useEffect(() => {
    fetchProduct(); // Fetch product data when component mounts
  }, [productId]);

  if (!product) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {product.image_url && (
        <Image source={{ uri: product.image_url }} style={styles.image} />
      )}
      <Text style={styles.name}>{product.name}</Text>

      <View style={styles.ratingContainer}>
        {renderStars()} {/* Render the stars */}
      </View>
      <Text style={styles.feedbackText}>
       {rating} Star{rating > 1 ? 's' : ''}
      </Text>

      <View>
        <Text style={styles.rate}>
          Average Rating: {product.averageRating || '0'} ({product.numVoted}{' '}
          votes)
        </Text>
      </View>
      <View style={styles.feedbackContainer}>
        <TextInput
          style={styles.feedbackInput}
          placeholder="Write feedback here"
          value={feedback}
          onChangeText={setFeedback}
        />
      </View>
      {/* "Send" Button */}
      <TouchableOpacity
        style={styles.sendButton}
        onPress={handleSendFeedback}
        accessibilityLabel="Submit feedback">
        <Text style={styles.sendButtonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
    maxHeight: 350,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,

  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  star: {
    fontSize: 30,
    marginHorizontal: 5,
  },
  rate: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#777',
    marginBottom: 20,
  },
  feedbackContainer: {
    width: '100%',
    marginTop: 20,
  },
  feedbackText: {
    fontSize: 25,
    color: '#555',
    fontWeight: 'bold',
    color:'black'
    
  },
  feedbackInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 10,
    fontSize: 16,
  },
  sendButton: {
    alignItems:'center',
    justifyContent:'center',
    marginTop: 20,
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    height:"100%",
    maxHeight:60,
    width:"100%",
   
  },
  sendButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Rewards;