import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import ProgressBar from "react-native-animated-progress";
import CheckBox from '@react-native-community/checkbox';
import CustomInput from '../../components/molecules/CustomInput';
import platform from '../../helpers/platform';

function TodoScreen({route}) {
  const [milestone, setMilestone] = useState('')
  const [check, isChecked] = useState(false)
  const [progress, setProgress] = useState();
  const list = [
    { text: '3123123232'},
    { text: '1312313123'},
    { text: '1312313123'},
    { text: '1312313123'},
    { text: '1312313123'},
    { text: '1312313123'},
    { text: '1312313123'},
    { text: '1312313123'},
    { text: '1312313123'},
    { text: '1312313123'},
    { text: '1312313123'},
    
  ]
  const progressBar =  progress / list.length
  const addGoal = {

  }
  const {item} = route.params;
  const {t} = useTranslation('welcome-screen');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.barView}>
        <Text style={styles.num}>{item.num} Completed</Text>
        <ProgressBar progress={progressBar} height={7} backgroundColor="#4a0072" />
        <CheckBox
          disabled={false}
          value={check}
          onValueChange={() => isChecked()}
        />
      </View>
      <CustomInput 
        styleInput={styles.input}
        placeholder="Add a milestone..."
        _value={milestone}
        _onChangeText={setMilestone}
        input
      />
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
    paddingHorizontal: 16
  },
  bar: {
    backgroundColor: 'green',
    width: '100%',
    height: 8,
  },
  input: {
    marginHorizontal: 16,
    paddingHorizontal: 16,
    marginRight: 50,
    borderBottomWidth: 0,
    height: 44,
    borderRadius: 20,
    backgroundColor: '#EAF0FF',
  }
});

export default TodoScreen;
