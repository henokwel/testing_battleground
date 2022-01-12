import React from 'react'
import { shallow } from "enzyme";
import { Item } from "../../components/Item";
import { data } from '../../data';
// import { data } from "../fixtures/data";

import { MyProvider } from '../fixtures/provider';



describe('Item', () => {


    test('should render item with data', () => {

        // const disptach = jest.fn()
        const wrapper = shallow(
            <Item {...data[0]} />,

            { wrappingComponent: MyProvider }
        )

        expect(wrapper).toMatchSnapshot()
    })


    // test the crud fn and simulate action


})

