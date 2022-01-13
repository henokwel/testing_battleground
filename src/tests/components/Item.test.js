import React from 'react'
import { mount, shallow } from "enzyme";
import { Item } from "../../components/Item";
import { data } from '../../data';
// import { data } from "../fixtures/data";

import { MyProvider } from '../fixtures/provider';
import { Context } from '../../context/MyContext';


describe('Item', () => {

    test('should render item with data', () => {
        const wrapper = shallow(
            <Item {...data[0]} />,
            { wrappingComponent: MyProvider }
        )
        expect(wrapper).toMatchSnapshot()
    })

    // test the crud fn and simulate action

    test('should toggle edit mode', () => {

        const wrapper = shallow(
            <Item {...data[0]} />,
            { wrappingComponent: MyProvider }
        )


        // edit init state should be false
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find("button").at(0).text()).toBe("Edit")

        // edit  state should be true after click

        wrapper.find("button").at(0).simulate("click")
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find("button").at(0).text()).toBe("Done")


        // toggle edit
        // state edit = true
        // change value
        // state edit = false
        // dispatch new value
        // check payload state
    })

    test('should edit title with new value', () => {

        const value = "Zoro";
        const dispatchValue = { type: "edit", payload: { id: data[0].id, title: value } }
        const useDisptach = jest.fn()
        const dispatch = jest.fn()
        useDisptach.mockReturnValue(dispatch)


        const wrapper = shallow(
            <Item {...data[0]} />,
            { wrappingComponent: MyProvider }
        )

        // const wrapper = mount(
        //     < MyProvider >
        //         <Item {...data[0]} dispatch={dispatch} />
        //     </MyProvider>
        // )

        // Toggle Edit button
        wrapper.find("button").at(0).simulate("click")
        expect(wrapper.find("button").at(0).text()).toBe("Done")

        // Change value
        wrapper.find("input").at(0).simulate("change", {
            target: {
                value
            }
        })

        // Expect value change
        expect(wrapper.find("input").at(0).prop("value")).toEqual(value)


        // disptach change, aka toggle  Edit, now Done btn
        // wrapper.find("button").at(0).simulate("click")
        // expect(wrapper.context().dispatc)
        // expect(wrapper.find("button").at(0)).toHaveBeenCalled()
        // expect(wrapper.find("button").at(0).text()).toBe("Edit")

        // expect(dispatch).toHaveBeenLastCalledWith(dispatchValue)
        // expect(dispatch).toHaveBeenCalled()
    })

    // test('should remove item', () => {
    //     const value = 1

    //     const wrapper = shallow(
    //         <Item {...data[0]} />,
    //         { wrappingComponent: MyProvider }
    //     )

    //     wrapper.find("button").at(1).simulate("click", {
    //         target: {
    //             value
    //         }
    //     })
    // })



})





