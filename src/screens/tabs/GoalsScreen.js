import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
  Image,
  FlatList
} from 'react-native';
import { useTranslation } from 'react-i18next';

import platform from '../../helpers/platform';
import ProfileItem from '../../components/organisms/ProfileItem';
import TodoItem from '../../components/organisms/TodoItem';
import AddButton from '../../components/molecules/AddButton';

function GoalsScreen({ navigation }) {
  const { t } = useTranslation('welcome-screen');
  const data = [
    {
      id: '1',
      title: 'Must-do road trips around the world',
      status: 'Private',
      num: '2 / 6',
    },
    {
      id: '2',
      title: 'S10 books to read before you die',
      status: 'Private',
      num: '0 / 12'
    },
    {
      id: '3',
      title: 'Third Item',
      status: 'Private',
      num: '-- / 12'
    },
  ]
  return (
    <View style={styles.container}>
      <View style={styles.header}> 
        <Text style={styles.title}>[LOGO]</Text>
        <TouchableOpacity style={styles.btnDots} onPress={() => {}}> 
          <Image 
            source={require('../../img/dots.png')} 
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <ProfileItem
        name="Jake Hart"
        source={require('../../img/avatar.png')}
        active="2"
        done="1"
      />
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TodoItem
            title={item.title}
            status={item.status}
            num={item.num}
            onPress={() => navigation.navigate('Todo', { item })}
          />
        )}
      />
      <AddButton styleBtn={styles.addButton}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: platform.topSpace + 29,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16
  },
  title: {
    fontSize: 24,
    color: platform.primary,
    fontWeight: 'bold',
    paddingBottom: 36
  },
  icon: {
    width: 24,
    height: 24
  },
  addButton: {
    alignSelf: 'flex-end'
  }
});

export default GoalsScreen;
