import React, { useState } from 'react';
import { Modal, StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';

function CustomModal({ visible, onPress }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <Pressable style={styles.close} onPress={onPress}>
       <View style={styles.body}>
         <View style={styles.modalView}>
           <Text style={styles.title}>Change profile photo</Text> 
           <TouchableOpacity style={styles.buttons}>
              <Image 
                source={require('../../img/gallery.png')} 
                style={styles.icon}
                resizeMode="contain"
              />    
              <Text style={styles.subtitile}>Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>
              <Image 
                source={require('../../img/camera.png')} 
                style={styles.icon}
                resizeMode="contain"
              />    
              <Text style={styles.subtitile}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>
              <Image 
                source={require('../../img/remove.png')} 
                style={styles.icon}
                resizeMode="contain"
              />    
              <Text style={styles.remove}>Remove</Text>
            </TouchableOpacity>
          </View>
       </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  close: {
    flex: 1
  },
  modalView: {
    backgroundColor: 'white',
    paddingHorizontal: 17,
    paddingVertical: 35,
    borderRadius: 15,
    paddingBottom: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttons: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 16,
    paddingBottom: 20
  },
  subtitile: {
    fontSize: 16,
    paddingBottom: 15,
  },
  remove: {
    fontSize: 16,
    color: 'red'
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 16
  }
});

export default CustomModal;