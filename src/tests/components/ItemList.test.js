import { shallow } from "enzyme";
import { ItemList } from "../../components/ItemList";
import { data } from "../fixtures/data"

describe('ItemList', () => {

    test('should render itemList with no data', () => {
        const wrapper = shallow(<ItemList data={[]} />)
        expect(wrapper).toMatchSnapshot()
    })

    test('should render itemlist with', () => {
        const wrapper = shallow(<ItemList data={data} />)
        expect(wrapper).toMatchSnapshot()
    })
    


})
