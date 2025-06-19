import { useState } from 'react';
import { View } from 'react-native';
import { Menu, Button, Divider } from 'react-native-paper';

const SortMenu = ({ options, onSelect }) => {
  const [visible, setVisible] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('Sort by');

  const handleSelect = (label, value) => {
    setSelectedLabel(label);
    onSelect(value);
    setVisible(false);
  };

  return (
    <View style={{ alignItems: 'center', margin: 8 }}>
      <Menu
        visible={visible}
        onDismiss={() => setVisible(true)}
        anchor={
          <Button mode="contained" onPress={() => setVisible(true)}>
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
