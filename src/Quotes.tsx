import React from "react";
import { View, Text } from "react-native";

import { styles } from './styles/quotes.style';

import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";
import { TextInput } from "react-native-gesture-handler";
import QuoteItem from "./components/QuoteItem";
import { useQuotes } from "./hooks/useQuotes";
import { Quote } from "./types/quote";

export default function QuotesList() {
  const {
    text,
    data,
    handleTextInput,
    handleAddQuote,
    handleDeleteQuote,
    handleUpdateQuotes,
  } = useQuotes();

  const renderItem = ({
    item,
    drag,
    isActive,
    getIndex,
  }: RenderItemParams<Quote>) => {
    return (
      <QuoteItem
        item={item}
        drag={drag}
        isActive={isActive}
        getIndex={getIndex}
        onDelete={handleDeleteQuote} />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>My Quotes</Text>
      {data.length === 0 && (
        <Text style={{paddingVertical: 8}}>Get started by adding your favourite quote!</Text>
      )}

      <TextInput
        style={styles.textInput}
        value={text}
        placeholder="Luke, I am your father..."
        onChangeText={handleTextInput}
        onSubmitEditing={handleAddQuote}
      />

      <DraggableFlatList
        data={data}
        onDragEnd={({ data }) => handleUpdateQuotes(data)}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
      />

    </View>
  );
}