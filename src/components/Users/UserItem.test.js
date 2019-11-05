
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserItem from './UserItem';

configure({adapter: new Adapter()});


describe('<UserItem />', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<UserItem user={{}}  />);
    });

    it('should render 1 div with class card', () => {
        expect(wrapper.find('div.card')).toHaveLength(1);
    });

    it('should render 1 img with class round-img', () => {
      expect(wrapper.find('img.round-img')).toHaveLength(1);
    });
    
    it('should render 1 h3 with', () => {
      expect(wrapper.find('h3')).toHaveLength(1);
    });

    it('should render 1 anchor with class btn', () => {
      expect(wrapper.find('a.btn')).toHaveLength(1);
    });


});
