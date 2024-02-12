import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../common/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import CustomButton from '../common/CustomButton';
import {useDispatch} from 'react-redux';
import {addItemToWishlist} from '../redux/slices/WishlistSlice';
import { addItemToCart } from '../redux/slices/CartSlice';

const ProductDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../images/back.png')}
        rightIcon={require('../images/shopping-cart.png')}
        title={'Product Detail'}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />
      <Image source={{uri: route.params.data.image}} style={styles.banner} />
      <Text style={styles.title}>{route.params.data.title}</Text>
      <Text style={styles.desc}>{route.params.data.description}</Text>
      <Text style={styles.rupees}>{'Rs. ' + route.params.data.price * 80}</Text>
      <CustomButton
        bg={'#FF9A0C'}
        title={'Add To Cart'}
        color={'white'}
        onClick={() => {
          dispatch(addItemToCart(route.params.data))
        }}
      />
      <TouchableOpacity
        style={styles.wishlistBtn}
        onPress={() => {
          dispatch(addItemToWishlist(route.params.data));
        }}>
        <Image source={require('../images/wishlist.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetailScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: 'black',
    marginLeft: 30,
    marginTop: 20,
    fontWeight: '600',
  },
  banner: {
    width: '100%',
    height: 380,
    resizeMode: 'center',
    backgroundColor: 'white',
  },
  desc: {
    fontSize: 15,
    color: 'black',
    marginLeft: 20,
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  rupees: {
    fontSize: 28,
    color: 'green',
    marginLeft: 30,
    marginTop: 40,
  },
  wishlistBtn: {
    position: 'absolute',
    right: 20,
    top: 130,
    backgroundColor: '#E2DFDF',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
