import React, {Component} from 'react';
import {StyleSheet, Alert, FlatList} from 'react-native';
import {Colors, BorderRadiuses, View, Image, ListItem, Text} from 'react-native-ui-lib';
import orders, {OrderType} from '../../assets/data/orders';
import * as Clipboard from 'expo-clipboard';


export default class BasicListScreen extends Component {

  keyExtractor = (item: OrderType) => item.name;

  renderRow(row: OrderType, id: number) {
    const statusColor = row.inventory.status === 'Paid' ? Colors.green30 : Colors.red30;
    const copyToClipboard = () => {
      Clipboard.setString('ronin:e61bdb6ce91e91fefe19a7db315bd1887ddf50b9');
      alert('key successfully copied to deposit');
  };

    return (
      <View>
        <ListItem 
        height={'100%p'}



style={{backgroundColor:'#f7f9fc', padding:5,borderRadius:12,paddingBottom:5,marginBottom:8}}
          // @ts-expect-error
          activeBackgroundColor={'#f7f9fc'}
          activeOpacity={89}
          height={90.5}
          onPress={copyToClipboard}
        >
          <ListItem.Part left>
            <Image source={{uri: row.mediaUrl}} style={styles.image}/>
          </ListItem.Part>
          <ListItem.Part middle column containerStyle={[styles.border, {paddingRight: 17}]}>
            <ListItem.Part containerStyle={{marginBottom: 3}}>
              <Text grey10 text70 style={{flex: 1, marginRight: 10}} numberOfLines={1}>
                {row.name}
              </Text>
              <Text grey10 text70 style={{marginTop: 2}}>
                {row.formattedPrice}
              </Text>
            </ListItem.Part>
            
          </ListItem.Part>
        </ListItem>
      </View>
    );
  }

  render() {
    return (
      <FlatList
        data={orders}
        renderItem={({item, index}) => this.renderRow(item, index)}
        keyExtractor={this.keyExtractor}
        nestedScrollEnabled
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 54,
    height: 54,
    borderRadius: BorderRadiuses.br20,
    marginHorizontal: 14
  },
  border: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.grey70
  }
});