import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'

function ProfileItem({ name, active, done, source }) {
    return (
        <View style={styles.container}>
            <Image source={source} style={styles.image} resizeMode="contain"/>
            <View style={styles.body}>
              <Text style={styles.title}>{name}</Text>
              <View style={styles.textCol}> 
                  <View style={styles.col}>
                      <Text style={styles.title}>{active}</Text>
                      <Text>Active</Text>
                  </View>
                  <View style={styles.col}>
                      <Text style={styles.title}>{done}</Text>
                      <Text>Done</Text>
                  </View>
              </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    paddingBottom: 29
  },
  body: {
    paddingLeft: 16
  },
  image: {
    width: 91,
    height: 60
  },
  textCol: {
    flexDirection: 'row'
  },
  col: {
    alignItems: 'center',
    paddingRight: 33
  },
  title: {
    fontSize: 24,
    marginBottom: 6
  },
})

export default ProfileItem
