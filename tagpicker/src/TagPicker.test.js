import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

import TagPicker from './TagPicker';

describe('<TagPicker />', () => {
  it('Renders without crashing', () => {
     mount(<TagPicker />);
  });
});