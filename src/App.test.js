
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Navbar from './components/Layout/Navbar';
import Search from './components/Users/Search';
import Users from './components/Users/Users';

configure({adapter: new Adapter()});

describe('<App />', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('should render 1 div with class container', () => {
        expect(wrapper.find('div.container')).toHaveLength(1);
    });

    it('should render 1 Navbar component', () => {
      expect(wrapper.find(Navbar)).toHaveLength(1);
    });

    it('should render 1 Search component', () => {
      expect(wrapper.find(Search)).toHaveLength(1);
    });

    it('should render 1 Users component', () => {
      expect(wrapper.find(Users)).toHaveLength(1);
    });


});
