import React from 'react'
import { Alert, Image, Text, TextInput, View } from 'react-native'
import styles from './style'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button } from 'react-native-paper';
const Home = () => {
  const handleBtn = () => {
    Alert.alert('1233');
  }

  return (
    <View style={{marginLeft: 20,marginRight: 20}}>
        <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
            <View>
                <Text style={{color:'black'}}>
                    Good Morning
                </Text>
                <Text style={{color:'black',fontWeight:'bold'}}>
                    Vu Dep Trai
                </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Button onPress={handleBtn}>
                <Icon 
                    name="menu"
                    size={30}
                    color="black"
                />
                </Button>
                
            </View>
        </View>
        <TextInput
            placeholder='Search beverages of food'
            style={{backgroundColor: '#e9e9e9',borderRadius: 10,marginTop: 20,marginBottom: 20}}
        />
        {/* block product 1 */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between',width: 300,marginLeft:'auto',marginRight:'auto'}}>
            {/* product1 */}
            <View>
                <View style={styles.containerProduct}>
                    <Image style={styles.imgProduct} source={require('./images/pic1.png')} />
                    <View style={{marginTop: 50}}>
                        <Text style={{color:'white'}}>
                            Creamy Ice Coffee
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{marginRight: 10,color: 'white'}}>
                                $5.8
                            </Text>
                            <Text style={{color:'lightgray',textDecorationLine:'line-through' }}>
                                $9.9
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* product2 */}
            <View>
                <View style={styles.containerProduct}>
                    <Image style={styles.imgProduct} source={require('./images/pic2.png')} />
                    <View style={{marginTop: 50}}>
                        <Text style={{color:'white'}}>
                            Indonesia Tea
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{marginRight: 10,color: 'white'}}>
                                $2.5
                            </Text>
                            <Text style={{color:'lightgray',textDecorationLine:'line-through' }}>
                                $5.4
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>


         {/* block product 2 */}
         <View style={{flexDirection: 'row', justifyContent: 'space-between',width: 300,marginLeft:'auto',marginRight:'auto',marginTop: 20}}>
            {/* product1 */}
            <View>
                <View style={styles.containerProduct}>
                    <Image style={styles.imgProduct} source={require('./images/pic1.png')} />
                    <View style={{marginTop: 50}}>
                        <Text style={{color:'white'}}>
                            Creamy Ice Coffee
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{marginRight: 10,color: 'white'}}>
                                $5.8
                            </Text>
                            <Text style={{color:'lightgray',textDecorationLine:'line-through' }}>
                                $9.9
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* product2 */}
            <View>
                <View style={styles.containerProduct}>
                    <Image style={styles.imgProduct} source={require('./images/pic2.png')} />
                    <View style={{marginTop: 50}}>
                        <Text style={{color:'white'}}>
                            Indonesia Tea
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{marginRight: 10,color: 'white'}}>
                                $2.5
                            </Text>
                            <Text style={{color:'lightgray',textDecorationLine:'line-through' }}>
                                $5.4
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>

        {/* Categories */}
        <View>
            <Text style={{color: 'black',fontWeight: 'bold',fontSize: 15,marginTop: 15,marginBottom: 10}}>
                Categories
            </Text>
            <View>
                {/* Category row 1 */}
                <View style={{flexDirection: 'row',justifyContent: 'space-between',width: 300,marginLeft:'auto',marginRight:'auto'}}>
                    {/* Category block1 menu1 */}
                    <View style={{backgroundColor: 'white',flexDirection: 'row',borderStyle: 'solid',borderColor: '#efefef',borderWidth: 1,width: '45%',borderRadius: 10,padding: 10,alignItems: 'center'}}>
                        <Image source={require('./images/icon1.png')} />
                        <View>
                            <Text style={{color: 'black',fontWeight: 'bold'}}>
                                Beverages
                            </Text>
                            <Text style={{color: '#04764e',fontWeight: '500'}}>
                                67 Menus
                            </Text>
                        </View>
                    </View>

                    {/* Category block2 menu1 */}
                    <View style={{backgroundColor: 'white',flexDirection: 'row',borderStyle: 'solid',borderColor: '#efefef',borderWidth: 1,width: '45%',borderRadius: 10,padding: 10,alignItems: 'center'}}>
                        <Image source={require('./images/icon2.png')} />
                        <View>
                            <Text style={{color: 'black',fontWeight: 'bold'}}>
                                Food
                            </Text>
                            <Text style={{color: '#04764e',fontWeight: '500'}}>
                                23 Menus
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Category row 2 */}
                <View style={{flexDirection: 'row',justifyContent: 'space-between',width: 300,marginLeft:'auto',marginRight:'auto',marginTop: 15}}>
                    {/* Category block1 menu1 */}
                    <View style={{backgroundColor: 'white',flexDirection: 'row',borderStyle: 'solid',borderColor: '#efefef',borderWidth: 1,width: '45%',borderRadius: 10,padding: 10,alignItems: 'center'}}>
                        <Image source={require('./images/icon3.png')} />
                        <View>
                            <Text style={{color: 'black',fontWeight: 'bold'}}>
                                Pizza
                            </Text>
                            <Text style={{color: '#04764e',fontWeight: '500'}}>
                                28 Menus
                            </Text>
                        </View>
                    </View>

                    {/* Category block2 menu1 */}
                    <View style={{backgroundColor: 'white',flexDirection: 'row',borderStyle: 'solid',borderColor: '#efefef',borderWidth: 1,width: '45%',borderRadius: 10,padding: 10,alignItems: 'center'}}>
                        <Image source={require('./images/icon4.png')} />
                        <View>
                            <Text style={{color: 'black',fontWeight: 'bold'}}>
                                Drink
                            </Text>
                            <Text style={{color: '#04764e',fontWeight: '500'}}>
                                12 Menus
                            </Text>
                        </View>
                    </View>
                </View>
                
            </View>
        </View>
        {/* Featured Beverages */}
        <View>
            <View>
                <Text style={{color: 'black',fontWeight: 'bold',fontSize: 15,marginTop: 15,marginBottom: 10}}>
                    Featured Beverages
                </Text>
                {/* Product 1 */}
                <View style={{flexDirection: 'row',marginBottom: 15}}>
                    <View style={{position: 'relative',alignItems: 'center'}}>
                        <Image 
                            source={require('./images/product1.jpg')}
                            style={{width: 80,height: 80,borderRadius: 10}}
                        />
                        <Text style={{position: 'absolute',top: 65,backgroundColor: '#ff8730',borderRadius: 15,padding: 3,color: 'white',fontWeight: 'bold'}}>
                            3.8 Stars
                        </Text>
                    </View>
                    <View style={{marginLeft: 10}}>
                        <Text style={{color: 'black',fontWeight: 'bold'}}>
                            Hot Creamy Cappuccino Latte
                        </Text>
                        <Text style={{color: 'black',fontWeight: 'bold'}}>
                            $12.6
                        </Text>
                    </View>
                </View>

                {/* Product 2 */}
                <View style={{flexDirection: 'row',marginBottom: 15}}>
                    <View style={{position: 'relative',alignItems: 'center'}}>
                        <Image 
                            source={require('./images/product2.jpg')}
                            style={{width: 80,height: 80,borderRadius: 10}}
                        />
                        <Text style={{position: 'absolute',top: 65,backgroundColor: '#ff8730',borderRadius: 15,padding: 3,color: 'white',fontWeight: 'bold'}}>
                            4.5 Stars
                        </Text>
                    </View>
                    <View style={{marginLeft: 10}}>
                        <Text style={{color: 'black',fontWeight: 'bold'}}>
                            Creamy Mocha Ome Coffee
                        </Text>
                        <Text style={{color: 'black',fontWeight: 'bold'}}>
                            $15.9
                        </Text>
                    </View>
                </View>
                {/* Product 3 */}
                <View style={{flexDirection: 'row',marginBottom: 15}}>
                    <View style={{position: 'relative',alignItems: 'center'}}>
                        <Image 
                            source={require('./images/product3.jpg')}
                            style={{width: 80,height: 80,borderRadius: 10}}
                        />
                        <Text style={{position: 'absolute',top: 65,backgroundColor: '#ff8730',borderRadius: 15,padding: 3,color: 'white',fontWeight: 'bold'}}>
                            3.8 Stars
                        </Text>
                    </View>
                    <View style={{marginLeft: 10}}>
                        <Text style={{color: 'black',fontWeight: 'bold'}}>
                            Tahini Chocolate Coffee Date Shake
                        </Text>
                        <Text style={{color: 'black',fontWeight: 'bold'}}>
                            $23.8
                        </Text>
                    </View>
                </View>
            </View>
           

        </View>
    </View>
  )
}

export default Home
