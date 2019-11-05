
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Users from './Users';
import Spinner from '../Layout/Spinner';


configure({adapter: new Adapter()});


describe('<Users />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Users users={[]} loading={true}  />);

    });

    it('should render Spinner if loading is true', () => {
        expect(wrapper.find(Spinner)).toHaveLength(1);
    });

    it('should render 1 div if loading is true', () => {
      wrapper.setProps({ loading: false })
      expect(wrapper.find('div')).toHaveLength(1);
    });
});
