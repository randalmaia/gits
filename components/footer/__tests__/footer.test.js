import React from 'react'
import renderer from 'react-test-renderer'

import Footer from '../footer.js'

describe('On render Footer', () => {
  it('shows the Footer layout', () => {
    const component = renderer.create(<Footer></Footer>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})