import React from 'react';
import { shallow } from 'enzyme';
import { Image } from '../components/Image';

// move to setuptest
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'
Enzyme.configure({ adapter: new Adapter() });
// move to setuptest

const fn = jest.fn();

describe('<Image /> snapshot;', () => {
  it('renders with attributes provided', () => {
    const output = shallow(<Image url='url' alt='alt' forwardref={fn} />);
    expect(toJson(output)).toMatchSnapshot();
  });
});