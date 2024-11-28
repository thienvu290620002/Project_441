import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    fetch('http://10.0.2.2:3000/api/blogs')
      .then(response => response.json())
      .then(data => setBlogPosts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleTagPress = (tag) => {
    setSelectedTag(tag);
  };

  const filteredPosts = selectedTag
    ? blogPosts.filter(post => post.tags.includes(selectedTag))
    : blogPosts;

  return (
    <View style={styles.container}>
      <Text style={styles.blogTagsTitle}>Blog Tags</Text>
      <View style={styles.blogTags}>
        <TouchableOpacity style={styles.blogTag} onPress={() => handleTagPress('Coffee')}>
          <Text style={styles.blogTagText}>Coffee</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.blogTag} onPress={() => handleTagPress('Black Coffee')}>
          <Text style={styles.blogTagText}>Black Coffee</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.blogTag} onPress={() => handleTagPress('Cappuccino')}>
          <Text style={styles.blogTagText}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.blogTag} onPress={() => handleTagPress('Espresso')}>
          <Text style={styles.blogTagText}>Espresso</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.blogTag} onPress={() => handleTagPress('Food')}>
          <Text style={styles.blogTagText}>Food</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {filteredPosts.map(post => (
          <View key={post.id} style={styles.blogPost}>
            <View style={styles.blogPostImage}>
              <Image 
                source={{ uri: post.image_url }} 
                style={{ width: '100%', height: '100%', borderRadius: 5 }} 
                resizeMode="cover"
              />
            </View>
            <Text style={styles.blogPostTitle}>{post.title}</Text>
            <Text style={styles.blogPostAuthor}>Author: {post.author}</Text>
            <Text style={styles.blogPostDate}>Date: {post.date}</Text>
            <Text style={styles.blogPostAuthor}>Review: {post.script}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  blogTagsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  blogTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  blogTag: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 8,
    margin: 4,
  },
  blogTagText: {
    fontSize: 14,
  },
  blogPost: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  blogPostImage: {
    height: 150,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginBottom: 10,
    overflow: 'hidden', 
  },
  blogPostTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  blogPostAuthor: {
    fontSize: 14,
    color: '#555',
  },
  blogPostDate: {
    fontSize: 12,
    color: '#999',
  },
})

export default Blog