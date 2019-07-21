import React from 'react'

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          <link
            href="/img/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link href="/img/favicon.ico" rel="icon" type="image/x-icon" />
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          {/* <script
            async
            src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          /> */}
        </body>
        {/* <script>
          {window.scroll(function() {
            let navigation = document.getElementsByClassName('navigation')[0]
            if (navigation.offSetTop > 100) {
              navigation.classList.add('nav-bg')
            } else {
              navigation.classList.remove('nav-bg')
            }
          })}
        </script> */}
      </html>
    )
  }
}
