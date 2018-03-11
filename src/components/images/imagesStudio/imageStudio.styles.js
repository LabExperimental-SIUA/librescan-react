import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 2
  },
  label: {
    textAlign: 'center',
    borderBottom: '2px solid #eee',
    margin: "20px"
  },
  activeImagesContainer:{
    display: 'flex',
    flexGrow: 2,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  activeImageBox: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    alignSelf: 'center'
  },
  imageBoxDecoration: {
    border: '3px solid #eee',
    borderRadius: '5px',
    padding: '5px',
  },
  actionButtonsContainer: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: '2px',
    margin: '15px 20px'
  },
  editButtonsContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignContent: 'space-between',
    marginBottom: '10px'
  },
  editionButton: {
    flex: 1,
    margin: '5px 0px'
  },
  retakeButton: {
    marginLeft: '2px'
  },
  deleteButton: {
    marginRight: '2px'
  }
});