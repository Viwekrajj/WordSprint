// components/CustomHeader.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomHeader = ({ title, navigation }) => {
  return (
    <View style={styles.header}>
      {/* Left Icon */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={25} color="white" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Right Icon (Example: Settings) */}
      <TouchableOpacity onPress={() => alert('Settings')}>
        <Icon name="settings" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#6200EE',
    height: 60,
    paddingHorizontal: 15,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CustomHeader;
