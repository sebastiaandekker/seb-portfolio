import { render } from '@redwoodjs/testing'

import HomeIntro from './HomeIntro'

describe('HomeIntro', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomeIntro />)
    }).not.toThrow()
  })
})
