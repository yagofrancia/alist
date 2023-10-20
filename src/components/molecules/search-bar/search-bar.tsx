import React from 'react';
import TextField from '../text-field';
import {View} from 'react-native';
import styles from './styles';
import Icon from '../../atoms/icon';
import R from '../../../res';
import AccountContext from '../../../contexts/account-context';

export default function SearchBar() {
  const {search, setSearch} = React.useContext(AccountContext);

  function handleChange(value: string) {
    setSearch(value);
  }

  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <Icon name="ic_search" height={20} width={20} style={styles.icon} />
        <TextField
          style={styles.input}
          value={search}
          onChange={handleChange}
          placeholder="Pesquisar conta"
          placeholderTextColor={R.colors.grayVeryLight}
        />
      </View>
    </View>
  );
}
