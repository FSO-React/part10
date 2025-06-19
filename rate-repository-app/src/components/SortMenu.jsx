import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Menu, Button, Divider } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 0,
    margin: 8
  },
  button: {
    height: '100%',
    justifyContent: 'center'
  }
});

const SortMenu = ({ options, selectedValue, onSelect }) => {
  const [visible, setVisible] = useState(false);
  const selectedLabel = options.find(opt => opt.value === selectedValue);

  const handleSelect = (label, value) => {
    onSelect(value);
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Menu
        visible={visible}
        onDismiss={() => setVisible(true)}
        anchor={
          <Button mode="contained" style={styles.button} onPress={() => setVisible(true)}>
            {selectedLabel.label}
          </Button>
        }
      >
        <Divider />
        {options.map((option, index) => (
          <Menu.Item
            key={index}
            onPress={() => handleSelect(option.label, option.value)}
            title={option.label}
          />
        ))}
      </Menu>
    </View>
  );
};

export default SortMenu;
