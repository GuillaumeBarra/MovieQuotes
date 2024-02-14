import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 25,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
  },
  textInput: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#CCCCCC',
    padding: 10,
    marginVertical: 25,
  },
});
