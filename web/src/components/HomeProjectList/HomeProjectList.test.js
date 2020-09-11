import { render } from '@redwoodjs/testing'

import HomeProjectList from './HomeProjectList'

describe('HomeProjectList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomeProjectList />)
    }).not.toThrow()
  })
})
