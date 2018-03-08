import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  imagesSidebar: {
    order: 1,
    flexGrow: 1,
    alignSelf: 'stretch',
    position: 'absolute',
    top: '60px',
    bottom: 0,
    overflowY: 'scroll',
    backgroundColor: 'white'
  },
  imagesBoxContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '2px'
  }
});