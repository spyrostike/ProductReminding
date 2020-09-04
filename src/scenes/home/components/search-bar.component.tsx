import React from 'react'
import { Button, Text, TextInput, StyleSheet, View } from 'react-native'
import { useStoreActions } from '../../../store';
import { ProductProps, ActivityProps } from '../../../store/models/product';

export const  SearchBar = (): React.ReactElement => {

  const [text, setText] = React.useState<string>(''); 

  const add = useStoreActions(a => a.product.add)
  const addUndo = useStoreActions(a => a.product.addUndo)
  const setRedoList = useStoreActions(a => a.product.setRedoList)

  const onSearchButtonPress = (): void => {
    if (text === '') return
    const product = { name: text, status: 'uncheck' } as ProductProps;
    add(product);
    addUndo({ name: 'add-product', data: product } as ActivityProps)
    setRedoList([])
    setText('')
  }

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <TextInput value={text} onChangeText={setText} style={styles.input} />
      <View style={styles.buttonContainer}>
        <Button title='Add ' onPress={onSearchButtonPress} color="#f194ff" />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    flex: 0.7
  },
  buttonContainer: {
    flex: 0.3
  }
})