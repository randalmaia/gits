import React from 'react'
import renderer from 'react-test-renderer'

import Footer from '../footer.js'

function Link(props) {
  return <a href={props.page}>{props.children}</a>;
}


describe('With Enzyme', () => {
  it('App shows "Hello world!"', () => {
    const component = renderer.create(<Link></Link>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})