import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'

import platform from '../../helpers/platform'

function TodoItem({ image, title, status, num, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={image} style={styles.image} resizeMode="contain"/>
            <View>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.footer}>
                    <Text style={styles.status}>{status}</Text>
                    <View style={styles.rightCol}>
                        <Text style={styles.num}>{num}</Text>
                        <View style={styles.defis}></View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingBottom: 10,
    height: 96,
    alignItems: 'center'
  },
  image: {
    width: 60,
    height: 60
  },
  title: {
    fontSize: 18,
    paddingBottom: 4
  },
  status: {
    fontSize: 12,
    color: platform.disabledText
  },
  num: {
    color: '#615D61',
    fontSize: 12,
    paddingRight: 8
  },
  footer: {
    flexDirection: 'row',
  },
  rightCol: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 110
  },
  defis: {
    width: 100,
    height: 6,
    backgroundColor: '#EAF0FF'
  }
})

export default TodoItem
