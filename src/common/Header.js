import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
const {height, width} = Dimensions.get('window');
const Header = ({
  title,
  leftIcon,
  rightIcon,
  onClickLeftIcon,
  onClickRightIcon,

}) => {
  const cartItems = useSelector(state => state.cart);
  console.log(cartItems);
 const navigation=useNavigation()
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.btn} onPress={() => {onClickLeftIcon()}}>
        <Image source={leftIcon} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.btn}>
        <Image source={rightIcon} style={styles.icon} />
        <View
          style={{
            width: 20,
            height: 20,
            borderRadius: 10,
            backgroundColor: 'white',
            position: 'absolute',
            right: 0,
            top: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'black'}}>{cartItems.data.length}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  header: {
    width: width,
    height: 65,
    backgroundColor: '#0ABDE3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  btn: {
    width: 40,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  title: {
    color: 'yellow',
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
});
