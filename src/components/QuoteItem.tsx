import React from 'react';
import { Pressable, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScaleDecorator } from 'react-native-draggable-flatlist';
import { styles } from '../styles/quoteItem.style';


const QuoteItem = ({ item, drag, isActive, getIndex, onDelete }) => {
    const quoteIndex = getIndex() != undefined ? getIndex() : ""
  return (
    <ScaleDecorator>
      <Pressable
        onLongPress={drag}
        disabled={isActive}
        style={{ backgroundColor: 'white' }}
      >
        <View style={styles.itemContainer}>
          <Text style={{ paddingVertical: 12 }}>{`${quoteIndex + 1}. "${item.quote}"`}</Text>
          {!isActive && (
            <TouchableOpacity onPress={() => onDelete(item.key)} style={{justifyContent: 'center'}}>
              <Icon name="trash" size={20} color="red"/>
            </TouchableOpacity>
          )}
        </View>
      </Pressable>
    </ScaleDecorator>
  );
};

export default QuoteItem;
