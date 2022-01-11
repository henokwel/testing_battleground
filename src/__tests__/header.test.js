
import { shallow } from "enzyme";
import { Header } from "../components/Header";


describe('Header', () => {
    test('should render Header ', () => {

        const wrapper = shallow(<Header />)
        expect(wrapper).toMatchSnapshot()
    })

    test('should render correct text', () => {
        const wrapper = shallow(<Header />)
        expect(wrapper.find("h1").text()).toBe("Header")
    })
})



