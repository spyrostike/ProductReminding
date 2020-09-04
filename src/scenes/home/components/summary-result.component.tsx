import React, { ReactElement } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useStoreActions, useStoreState } from '../../../store';
import { ProductProps, ActivityProps} from '../../../store/models/product';
import { LayoutListItems } from './layout-list-items.component';

export const  SummaryResult = (): React.ReactElement => {
  const items = useStoreState(s => s.product.items)
  const showState = useStoreState(s => s.product.showState)
  const undoList = useStoreState(s => s.product.undoList)
  const redoList = useStoreState(s => s.product.redoList)
  const setShowState = useStoreActions(a => a.product.setShowState)
  const setItems = useStoreActions(a => a.product.setItems)
  const setUndoList = useStoreActions(a => a.product.setUndoList)
  const addRedo = useStoreActions(a => a.product.addRedo)
  const setRedoList = useStoreActions(a => a.product.setRedoList)
  const add = useStoreActions(a => a.product.add)
  const addUndo = useStoreActions(a => a.product.addUndo)

  
  const onTextPress = (state: 'ALL' | 'ACTIVE' | 'COMPLETE' ) => {
    setShowState(state)
  }

  const onUndoPress = () => {
    if (undoList.length === 0) return
    
    const undo = undoList[undoList.length - 1]

    if (undo.name === 'add-product') {
      let itemsClone = JSON.parse(JSON.stringify(items)) as ProductProps[]
      addRedo({ name: 'add-product', data: itemsClone[itemsClone.length - 1] } as ActivityProps)
      setItems(itemsClone.splice(0, itemsClone.length - 1))
      setUndoList(undoList.splice(0, undoList.length - 1))
    } else if (undo.name === 'press-item') {
      let itemsClone = JSON.parse(JSON.stringify(items)) as ProductProps[]
      if (undo.index !== null) {
        itemsClone[undo.index].status = itemsClone[undo.index].status === 'check' ? 'uncheck' : 'check'
        // console.log(itemsClone[undo.index])
        setItems(itemsClone)
        setUndoList(undoList.splice(0, undoList.length - 1))
        addRedo({ name: 'press-item', data: itemsClone[undo.index], index: undo.index } as ActivityProps)
      }
    }
  }

  const onRedoPress = () => {
    if (redoList.length === 0) return
    
    const redo = redoList[redoList.length - 1]
    console.log(redo)
    if (redo.name === 'add-product') {
      // let itemsClone = JSON.parse(JSON.stringify(items)) as ProductProps[]
      add(redo.data)
      setRedoList(redoList.splice(0, redoList.length - 1))
      addUndo({ name: 'add-product', data: redo.data } as ActivityProps)
    }  else if (redo.name === 'press-item') {
      let itemsClone = JSON.parse(JSON.stringify(items)) as ProductProps[]
      if (redo.index !== null) {
        itemsClone[redo.index].status = itemsClone[redo.index].status === 'check' ? 'uncheck' : 'check'
        setItems(itemsClone)
        setRedoList(redoList.splice(0, redoList.length - 1))
        addUndo({ name: 'press-item', data: itemsClone[redo.index], index: redo.index } as ActivityProps)
      }
    }
  }

  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <Text>Show</Text>
        <Text onPress={() => onTextPress('ALL')} style={[ styles.text, showState === 'ALL' ? styles.textActive : styles.textInactive ]} >All</Text>
        <Text onPress={() => onTextPress('ACTIVE')} style={[ styles.text, showState === 'ACTIVE' ? styles.textActive : styles.textInactive ]}>Active</Text>
        <Text onPress={() => onTextPress('COMPLETE')} style={[ styles.text, showState === 'COMPLETE' ? styles.textActive : styles.textInactive ]}>Complete</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ padding: 5}} >
          <Button title='Undo' onPress={onUndoPress} disabled={undoList.length === 0} />
        </View>
        <View style={{ padding: 5}} >
          <Button title='Redo' onPress={onRedoPress} disabled={redoList.length === 0} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 10
  },
  textActive: {
    color: 'blue'
  },
  textInactive: {
    color: '#000'
  }
})