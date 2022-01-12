import React, { useContext, useEffect } from 'react'
import { shallow } from "enzyme";
import { Item } from "../../components/Item";
import { data } from '../../data';
// import { data } from "../fixtures/data";
import { Context, useMyContext } from '../../context/MyContext';



describe('Item', () => {


    test('should render item with data', () => {

        const MyProvider = ({ children }) => {
            const originalUseContext = useContext;
            const useContextSpy = jest.spyOn(React, 'useContext');
            useContextSpy.mockImplementation(contextType =>
                contextType === Context ? 'context_value' : originalUseContext(contextType)
            );

            useEffect(() => {
                return () => {
                    useContextSpy.mockRestore();
                };
            }, [useContextSpy]);

            return children;
        };


        // const disptach = jest.fn()
        const wrapper = shallow(
            <Item {...data[0]} />,
            { wrappingComponent: MyProvider, }
        )


        expect(wrapper).toMatchSnapshot()

    })


})

