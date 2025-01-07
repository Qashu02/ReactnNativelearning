

import React, { useState } from 'react';
import Swipeable  from 'react-native-gesture-handler';
function SwipeCheck(props) {
    const [swipeDirection, setSwipeDirection] = useState(null);

    const onSwipedLeft = () => {
      setSwipeDirection('left');
      console.log('Swiped left!');
    };
  
    const onSwipedRight = () => {
      setSwipeDirection('right');
      console.log('Swiped right!');
    };
  
    return (
      <Swipeable
        renderRightActions={() => <View style={{ backgroundColor: 'red' }} />}
        onSwipedLeft={onSwipedLeft}
        onSwipedRight={onSwipedRight}
      >
        {/* Your content here */}
      </Swipeable>
    );
  };


export default SwipeCheck;