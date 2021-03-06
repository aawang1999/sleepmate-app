import { React, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../components/Styles'
import SolidButton from '../components/SolidButton'
import { LinearGradient } from 'expo-linear-gradient'
import { getNextDay } from '../utils/date-utils'

const Asleep = ({ navigation }) => {
  const [blinking, setBlinking] = useState(0);
  const date = new Date();

  var nextDate = getNextDay(date); // returns [day, num, month];

  useEffect(() => {
    const interval = setInterval(() => {
      setBlinking((blinking) => blinking + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (blinking === 5) {
    navigation.navigate('Awake');
  }
  return (
    <LinearGradient
      colors={['rgba(0, 51, 102, 1)', 'rgba(41, 43, 44, 1)']}
      style={styles.container}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.time}>7</Text><Text style={[styles.time, {opacity: (blinking % 2)}]}>:</Text><Text style={styles.time}>59 AM</Text>
        </View>
        <Text style={styles.date}>{nextDate[0]}, {nextDate[2]} {nextDate[1]}</Text>
        <SolidButton
          style={styles.button}
          title='Wake Up'
        />
      </View>
    </LinearGradient>
  )
}

export default Asleep