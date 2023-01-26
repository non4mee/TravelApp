import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

import platform from '../../helpers/platform';

function TodoScreen({ route }) {
  const [status, setStatus] = useState() ;
  const { item } = route.params
  const { t } = useTranslation('welcome-screen');
  const progress = {

  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={item.image} style={styles.image}/>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.barView}>
        <Text style={styles.num}>{item.num} Completed</Text>
        <ProgressBar
          style={styles.barWidth}
          progress={0.3}
          color={'#280056'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: platform.topSpace
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: 16,
    paddingBottom: 21
  },
  image: {
    width: 60,
    height: 60
  },
  title: {
    fontSize: 22,
    width: 240
  },
  num: {
    fontSize: 12,
    paddingLeft: 16,
    paddingBottom: 8
  },
  barView: {

  },
  barWidth: {
    marginHorizontal: 16,
    height: 8,
  }
});

export default TodoScreen;
