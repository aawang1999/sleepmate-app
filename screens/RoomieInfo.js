import React from 'react'
import { ScrollView, Dimensions, View, Text } from 'react-native'
import { styles } from '../components/Styles'
import Header from '../components/Header'
import { LinearGradient } from 'expo-linear-gradient'
import BorderedPic from '../components/BorderedPic'
import DisplayField from '../components/DisplayField'
import DisplayButton from '../components/DisplayButton'
import { useDispatch } from 'react-redux'
import { openDatabase, updateItem, insertItem } from '../utils/database-utils'
import * as Actions from '../redux/actions'


const RoomieInfo = (props) => {
  const dispatch = useDispatch();
  const database = openDatabase('Profiles.db');
  const notificationsDatabase = openDatabase('Notifications.db');
  const simulateAcceptRequest = (props) => {
    updateItem(database, 'Profiles', 'friendship_status="friended"', `id=${props['route']['params']['id']}`);
    let name = `${props['route']['params']['first_name']} ` + (props['route']['params']['middle_name'] === '' ? '' : props['route']['params']['middle_name'] + ' ') + `${props['route']['params']['last_name']}`;
    insertItem(notificationsDatabase, 'Notifications', 'name, status', `"${name}", "accepted"`);
    try {
      dispatch(Actions.incrementNotifications());
    } catch (error) {
      throw error;
    }
    props.navigation.navigate('Roomies');
  }

  let displayField =
    <React.Fragment>
      <Text style={{
        color: '#f7f7f7',
        marginTop: 8,
      }}>
        Status: Pending
      </Text>
      <Text style={{
        color: '#f7f7f7',
        marginBottom: 32,
      }}>
        Username: {props['route']['params']['username']}
      </Text>
      <DisplayButton
        name="Simulate user accepting request"
        onPress={() => simulateAcceptRequest(props)}
      />
    </React.Fragment>;
  if (props['route']['params']['friendship_status'] === 'friended') {
    displayField =
      <React.Fragment>
        <Text style={{
          color: '#f7f7f7',
          marginTop: 8,
        }}>
          Joined {props['route']['params']['join_month']} {props['route']['params']['join_year']}
        </Text>
        <Text style={{
          color: '#f7f7f7',
          marginBottom: 32,
        }}>
          Username: {props['route']['params']['username']}
        </Text>
        <DisplayField name='Sleep Quality' desc={props['route']['params']['sleep_quality']}></DisplayField>
        <DisplayField name='Average Bedtime' desc={props['route']['params']['average_bedtime']}></DisplayField>
        <DisplayField name='Average Wakeup' desc={props['route']['params']['average_wakeup']}></DisplayField>
      </React.Fragment>
  }

  return (
    <LinearGradient
      colors={['rgba(0, 51, 102, 1)', 'rgba(41, 43, 44, 1)']}
      style={styles.container}
    >
      <Header
        pageName='ROOMMATES'
        leftIcon='chevron-back-circle-outline'
        leftPage='Roomies'
      />
      <ScrollView style={styles.scrollView}>
        <View style={{ display: 'flex', alignItems: 'center' }}>
          <BorderedPic
            size={Dimensions.get('window').width * 0.9}
            image={props['route']['params']['link']}
            sleeping_opacity={props['route']['params']['sleeping_status'] === 'sleeping' ? 1 : 0}
          />
          <Text style={{
            fontSize: 24,
            letterSpacing: 0.25,
            color: '#f7f7f7',
            marginTop: 32,
            fontWeight: '600'
          }}
          >{props['route']['params']['first_name'] + ' ' + (props['route']['params']['middle_name'] === '' ? '' : props['route']['params']['middle_name'] + ' ') + props['route']['params']['last_name']}</Text>
          {displayField}
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

export default RoomieInfo