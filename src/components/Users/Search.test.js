
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from './Search';

configure({adapter: new Adapter()});

const dummyFunc = () => {

};

describe('<Search />', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<Search searchUsers={dummyFunc} clearUsers={dummyFunc} showClear={true} setAlert={dummyFunc} />);
    });

    it('should render 1 form with class form', () => {
        expect(wrapper.find('form.form')).toHaveLength(1);
    });

    it('should render 2 input elements', () => {
      expect(wrapper.find('input')).toHaveLength(2);
  });

    it('should render 1 clear button if showClear is true', () => {
      // wrapper.setProps({ name: 'bar' });
      expect(wrapper.find('button.btn')).toHaveLength(1);
    });

    it('should render 0 clear button if showClear is false', () => {
      wrapper.setProps({ showClear: false });
      expect(wrapper.find('button.btn')).toHaveLength(0);
    });
});
