import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  imagesStudioContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10px'
  }
});

const sidebarStyles = {
  root: {
    position: 'absolute',
    top: 30,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  sidebar: {
    display: 'flex',
    zIndex: 2,
    position: 'absolute',
    top: 30,
    bottom: 0,
    transition: 'transform .3s ease-out',
    WebkitTransition: '-webkit-transform .3s ease-out',
    willChange: 'transform',
    overflowY: 'auto',
    backgroundColor: 'white',
    padding: '20px'
  },
  content: {
    position: 'absolute',
    top: 30,
    left: 0,
    right: 0,
    bottom: 0,
    overflowY: 'scroll',
    WebkitOverflowScrolling: 'touch',
    transition: 'left .3s ease-out, right .3s ease-out',
  },
  overlay: {
    zIndex: 1,
    position: 'fixed',
    top: 30,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    visibility: 'hidden',
    transition: 'opacity .3s ease-out, visibility .3s ease-out',
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  dragHandle: {
    zIndex: 1,
    position: 'fixed',
    top: 30,
    bottom: 0,
  },
};

export { sidebarStyles };