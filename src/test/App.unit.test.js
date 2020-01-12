
import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import obj from '../all-component';

enzyme.configure({ adapter: new Adapter() });

Object.keys(obj).forEach(componentName => {
  const Component = obj[componentName];
  describe(`Component: ${componentName}`, () => {
    test(`${componentName} renders with default props`, () => {
      const wrapper = shallow(<Component />);
      expect(wrapper).toMatchSnapshot();
    });
  });
}); 
