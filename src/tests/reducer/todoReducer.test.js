import { todoReducer } from "../../reducer/todoReducer";
import { data } from '../fixtures/data'

describe('todoReducer', () => {

    test('should add new item', () => {
        const value = { id: 4, title: "luffy", done: false }
        const res = todoReducer(data, { type: "add", payload: value })
        expect(res).toEqual([...data, value])
    })

    test('should edit item', () => {
        const value = { id: 1, title: "luffy" }
        const res = todoReducer(data, { type: "edit", payload: value })
        expect(res).toEqual(data)
    })

    test('should toggle done', () => {
        const value = { id: 1, done: true }
        const res = todoReducer(data, { type: "done", payload: value })
        console.log(res);
        console.log(data);
        

        expect(res).toEqual(data)
    })

    test('should remove item', () => {

        const value = 1
        const res = todoReducer(data, { type: "remove", payload: value })
        expect(res).toEqual([data[1], data[2]])
    })





})
