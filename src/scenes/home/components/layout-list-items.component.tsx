import React from 'react';
import { FlatList, FlatListProps, ListRenderItem, View, ListViewComponent } from 'react-native';
import { ProductProps } from '../../../store/models/product';

export interface LayoutListItems {
  data: any[];
  renderItem: ListRenderItem<ProductProps> | null | undefined;
}

export const LayoutListItems = (props: LayoutListItems):  React.ReactElement => {
  const { data, renderItem, ...listProps } = props;

  const keyExtractor = (item: any, index: any) => index.toString()

  return(
    <FlatList 
      keyExtractor={keyExtractor}
      data={data}
      extraData={true}
      renderItem={renderItem}
    />
  )
}
