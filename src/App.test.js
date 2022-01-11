// import { render, screen } from '@testing-library/react';
import React from 'react'
import App from './App';
import { shallow } from 'enzyme';


test('renders learn react link', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toMatchSnapshot()
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
