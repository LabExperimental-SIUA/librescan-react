import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    margin: '0px 0px 10px 0px',
    borderRadius: '5px',
    border: '2px solid #eee',
    ':hover': {
      backgroundColor: '#ddd'
    }
  },
  active: {
    backgroundColor: "#0090ee",
    ':hover': {
      backgroundColor: '#005b96'
    }
  },
  imagesBoxContainer: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
  },
  groupLabel: {
    textAlign: 'center'
  },
  separator:{
    border: '1px solid #eee',
  }
});