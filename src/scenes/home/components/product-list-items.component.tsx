import React from 'react'
import { ListRenderItemInfo, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { useStoreActions, useStoreState } from '../../../store';
import { ProductProps, ActivityProps } from '../../../store/models/product';
import { LayoutListItems } from './layout-list-items.component';

export const  ProductListItems = (): React.ReactElement => {
  const [listItem, setListItem] = React.useState<ProductProps[]>([]); 

  const items = useStoreState(s => s.product.items)
  const showState = useStoreState(s => s.product.showState)

  const setItems = useStoreActions(s => s.product.setItems)
  const addUndo = useStoreActions(a => a.product.addUndo)
  const setRedoList = useStoreActions(a => a.product.setRedoList)

  React.useEffect(() => {
    if (showState === 'ALL') { setListItem(items) }
    else if (showState === 'ACTIVE') { setListItem(items.filter(item =>  item.status === 'uncheck')) }
    else if (showState === 'COMPLETE') { setListItem(items.filter(item =>  item.status === 'check')) }
    
  }, [showState])

  React.useEffect(() => {
    if (showState === 'ALL') { setListItem(items) }
    else if (showState === 'ACTIVE') { setListItem(items.filter(item =>  item.status === 'uncheck')) }
    else if (showState === 'COMPLETE') { setListItem(items.filter(item =>  item.status === 'check')) }
  }, [items])

  const onItemPress = (index: number) => {
    let itemsClone = JSON.parse(JSON.stringify(items))
    itemsClone[index].status =  itemsClone[index].status === 'check' ? 'uncheck' : 'check'
    setItems(itemsClone)
    addUndo({ name: 'press-item', data: itemsClone[index], index: index } as ActivityProps)
    setRedoList([])
  }

  const renderItem = ({ item, index }: ListRenderItemInfo<ProductProps>) => {
    return (
      <TouchableHighlight onPress={() => onItemPress(index)}>
        <View style={styles.itemContainer}>
          <Text style={{ textDecorationLine: item.status === 'uncheck' ? 'none' : 'line-through' }}>{item.name}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  return (
      <LayoutListItems data={listItem} renderItem={renderItem}  />
  )
}

const styles = StyleSheet.create({
  itemContainer: { 
    borderBottomWidth: 1, 
    borderBottomColor: 'red', 
    height: 50, 
    justifyContent: 'center', 
    padding: 20 
  }
})