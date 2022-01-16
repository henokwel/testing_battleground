import { shallow } from "enzyme";
import App from "../../App";
import { MyProvider } from "../fixtures/provider";



describe('App', () => {
    test('should render App', () => {

        const wrapper = shallow(<App />,
            { wrappingComponent: MyProvider }
        )
        expect(wrapper).toMatchSnapshot()
    })

})
