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

const SortMenu = ({ options, onSelect }) => {
  const [visible, setVisible] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('Sort by');

  const handleSelect = (label, value) => {
    setSelectedLabel(label);
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
            {selectedLabel}
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
