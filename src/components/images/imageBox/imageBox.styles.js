import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: '5px'
  },
  imageContainer: {
    display: 'flex',
    position: 'relative'
  },
  loadingSpinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: '#e3e3e3',
    position: 'absolute',
    left: 0,
    fontSize: '1.5em',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: '100%',
    height: '100%'
  }
})