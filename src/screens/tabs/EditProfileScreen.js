import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux'

import platform from '../../helpers/platform'
import CustomInput from '../../components/molecules/CustomInput';
import CustomModal from '../../components/molecules/CustomModal';
import { signOut } from '../../actions/profileActions'
import { dataUser } from '../../helpers/asyncStorages';

function EditProfileScreen({ navigation }) {
  const [name, setName] = useState('')
  const [bio, setBio] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [modalVisible, setModalVisible] = useState(false);
  const edit = ''
  const { t } = useTranslation('welcome-screen');
  _retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('email');
    if (value !== null) {
      // У нас есть данные !!
      console.log(value);
    }
   } catch (error) {
     // Ошибка при получении данных
   }
}
console.log('_retrieveData', _retrieveData)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Edit profile</Text>
        {!edit &&
        <TouchableOpacity onPress={() => navigation.navigate('Goals')}>
          <Image
            source={require('../../img/done.png')}
            style={styles.doneIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        }
      </View>
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <Image
          source={require('../../img/empty_avatar.png')}
          style={styles.emptyAvatar}
          resizeMode="contain"
        />
        <Text style={styles.text}>Change photo</Text>
      </TouchableOpacity>
      <CustomInput
        styleContainer={styles.input}
        subtitle="Name"
        placeholder="Name"
        _value={name}
        _onChangeText={setName}
      />
      <CustomInput
        styleContainer={styles.input}
        subtitle="Bio"
        placeholder="Add a bio here"
        _value={bio}
        _onChangeText={setBio}
      />
      <CustomInput
        styleContainer={styles.input}
        subtitle="Phone (private)"
        placeholder="+61 111 222 3344"
        _value={phone}
        _onChangeText={setPhone}
      />
      <CustomInput
        styleContainer={styles.input}
        subtitle="Email (private)"
        placeholder="email"
        _value={dataUser.email}
        _onChangeText={setEmail}
      />
      <CustomModal
        visible={modalVisible}
        onPress={() => setModalVisible(!modalVisible)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: platform.topSpace + 29,
    paddingHorizontal: 35
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 20
  },
  doneIcon: {
    width: 16,
    height: 13
  },
  emptyAvatar: {
    width: 112,
    height: 112,
    alignSelf: 'center',
    marginTop: 62
  },
  text: {
    fontSize: 16,
    color: platform.primary,
    textAlign: 'center',
    paddingTop: 5
  },
  input: {
    paddingTop: 30
  }
});

const mapStateToProps = ({ profile }) => {
  return {
    ...profile
  }
}

const mapDispatchToProps = {
  signOut
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileScreen);
