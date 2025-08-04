import _AnimatedList from './AnimatedList';
import AnimatedListItem from './AnimatedListItem';

const AnimatedList = Object.assign(_AnimatedList, {
  Item: AnimatedListItem,
});

export default AnimatedList;
