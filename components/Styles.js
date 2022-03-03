import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#003366'
  },
  navContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerContainer: {
    margin: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  scrollView: {
    display: 'flex',
    width: '100%'
  },
  title: {
    fontSize: 24,
    letterSpacing: 0.25,
    color: '#f7f7f7',
    marginTop: 48,
    fontWeight: '600'
  },
  smallTitle: {
    fontSize: 18,
    letterSpacing: 3,
    color: '#f7f7f7',
    fontWeight: '600'
  },
  subtitle: {
    fontSize: 16,
    letterSpacing: 0.5,
    color: '#f7f7f7',
    fontWeight: '600',
    marginTop: 18,
    alignSelf: 'center'
  },
  time: {
    fontSize: 48,
    letterSpacing: 0.25,
    color: '#f7f7f7',
    marginBottom: 9,
    fontWeight: '600'
  },
  date: {
    fontSize: 20,
    letterSpacing: 0.25,
    color: '#f7f7f7',
    marginBottom: 36,
    fontWeight: '600'
  },
  chartContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  chartLabel: {
    color: '#f7f7f7'
  },
  xAxisLabelContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    width: '90%',
    marginBottom: 32
  },
  yAxisLabelContainer: {
    display: 'flex',
    width: 50,
    height: 200,
    justifyContent: 'space-around'
  }
})

const solidButtons = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 50,
    elevation: 3,
    backgroundColor: '#90acc8',
  },
  text: {
    fontSize: 20,
    letterSpacing: 0.25,
    color: '#f7f7f7',
    fontWeight: '600'
  }
})

const fillButtons = StyleSheet.create({
  button: {
    borderRadius: 10
  }
})

const iconButtons = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 9,
    paddingHorizontal: 18,
    width: 72,
  },
  image: {
    width: 50,
    height: 50
  }
})

const borderedPics = StyleSheet.create({
  image: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#f7f7f7',
    width: 150,
    height: 150
  }
})

export { styles, solidButtons, fillButtons, iconButtons, borderedPics }