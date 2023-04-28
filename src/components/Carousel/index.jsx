import React, { useState } from 'react'

import ItemsCarousel from 'react-items-carousel';
import { Button } from '@mui/material';

const Carousel = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
      <div style={{ padding: `0 ${chevronWidth}px` }}>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={2}
          gutter={20}
          leftChevron={<Button>{'<'}</Button>}
          rightChevron={<Button>{'>'}</Button>}
          outsideChevron
          chevronWidth={chevronWidth}
        >
          <div style={{ height: 200, background: '#EEE' }}>First card</div>
          <div style={{ height: 200, background: '#EEE' }}>Second card</div>
          <div style={{ height: 200, background: '#EEE' }}>Third card</div>
          <div style={{ height: 200, background: '#EEE' }}>Fourth card</div>
        </ItemsCarousel>
      </div>
    );
}

export default Carousel