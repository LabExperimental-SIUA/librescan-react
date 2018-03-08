import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  container: {
    border: 'dashed 1px green',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 2
  },
  activeImagesContainer:{
    border: 'dashed 1px blue',
    display: 'flex',
    flexGrow: 2,
    flexDirection: 'row'
  },
  activeImageBox: {
    border: 'dashed 1px black',
    flexGrow: 1,
    width: '300px',
    height: '300px',
    alignSelf: 'center'
  }
});