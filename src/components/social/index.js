import React from 'react'

import Icon from '../icon'

const Social = props => {
  const twitterUrl = 'https://www.twitter.com/naruthkongurai'
  const githubUrl = 'https://www.github.com/naruthk'
  const linkedinUrl = 'https://www.linkedin.com/in/naruthkongurai'

  return (
    <ul className="list-unstyled position-relative ml-5 mt-3 zindex-1">
      <li className="mb-3">
        {/* <a href={twitterUrl} title="twitter" target="_blank"> */}
        <Icon name="twitter" size="2x" />
        {/* </a> */}
      </li>
      <li className="mb-3">
        {/* <a
          href={linkedinUrl}
          className="text-white"
          title="linkedin"
          target="_blank"
        > */}
        <Icon name="linkedin" size="2x" />
        {/* </a> */}
      </li>
      <li className="mb-3">
        {/* <a
          href={githubUrl}
          className="text-white"
          title="github"
          target="_blank"
        > */}
        <Icon name="github" size="2x" />
        {/* </a> */}
      </li>
    </ul>
  )
}

export default Social
