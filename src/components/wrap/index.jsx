import { CSSTransition } from 'react-transition-group';
import './index.styl';

const TBJ_HISTORY_KEY = 'TBJ_HISTORY_KEY';
const histories = (sessionStorage.getItem(TBJ_HISTORY_KEY) || '').split(',').filter(Boolean);
const curHistroy = {
  next: true,
  key: ''
};
const animateDirection = (location) => {
  const key = location.pathname + '_' + location.search;
  const prevIndex = histories.indexOf(curHistroy.key);
  const curIndex = histories.indexOf(key);
  curHistroy.key = key;
  if (curIndex >= prevIndex) {
    curHistroy.next = true;
  } else {
    curHistroy.next = false;
  }
  if (curIndex === -1) {
    histories.push(curHistroy);
  }
  return curHistroy.next;
};

const wrapAnimation = (WrappedComponent) => {
  return class extends React.Component {
    constructor (props) {
      super(props);
      this.state = {};
    }

    render () {
      return (
        <CSSTransition
          in={this.props.match !== null}
          classNames='slide-next'
          timeout={500}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <WrappedComponent {...this.props} />
        </CSSTransition>
      )
    }
  }
};

export default wrapAnimation;