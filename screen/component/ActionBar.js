import _ from 'lodash';
import React, {Component} from 'react';
import {Alert, StyleSheet} from 'react-native';
import {Colors, Typography, View, ActionBar, PageControl, Carousel} from 'react-native-ui-lib'; //eslint-disable-line


export default class ActionBarScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0
    };
  }

  render() {
    return (
      <View flex bg-grey80 >
        <PageControl
          containerStyle={[styles.pageControl, styles.absoluteContainer]}
          numOfPages={6}
          currentPage={this.state.currentPage}
          color={Colors.grey10}
          size={15}
        />
        <Carousel
          containerStyle={{flex: 1}}
          onChangePage={currentPage => this.setState({currentPage})}
          initialPage={this.state.currentPage}
        >
          <View style={styles.page}>
            <ActionBar
              actions={[
                {label: 'Delete', onPress: () => Alert.alert('delete'), red30: true},
                {label: 'Replace Photo', onPress: () => Alert.alert('replace photo')},
                {label: 'Edit', onPress: () => Alert.alert('edit')}
              ]}
            />
          </View>

          <View style={styles.page}>
            <ActionBar
              backgroundColor={Colors.primary}
              actions={[
                {label: 'Hide', onPress: () => Alert.alert('hide'), white: true},
                {label: 'Add Discount', onPress: () => Alert.alert('add discount'), white: true},
                {label: 'Duplicate', onPress: () => Alert.alert('duplicate'), white: true}
              ]}
            />
          </View>

          <View style={styles.page}>
            <ActionBar actions={[{label: 'Delete', red30: true}, {label: 'Edit'}]}/>
          </View>

          <View style={styles.page}>
            <ActionBar centered actions={[{label: 'Send as Contact'}, {label: 'Archive Chat'}]}/>
          </View>

          <View style={styles.page}>
            <ActionBar
              centered
              actions={[
                {label: 'Bold', labelStyle: {color: Colors.grey10, ...Typography.text60, fontWeight: '400'}},
                {label: 'Italic', text60: true, labelStyle: {fontStyle: 'italic', color: Colors.grey10}},
                {label: 'Link', text60: true, labelStyle: {textDecorationLine: 'underline', color: Colors.grey10}}
              ]}
            />
          </View>

         
        </Carousel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1
  },
  pageControl: {
    zIndex: 1
  },
  absoluteContainer: {
    position: 'absolute',
    bottom: 150,
    left: 0,
    right: 0
  }
});