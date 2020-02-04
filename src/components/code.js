import React from 'react'
import { render } from 'react-dom'
import Highlight, { defaultProps } from 'prism-react-renderer'
import dracula from "prism-react-renderer/themes/dracula";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

export const Code = ({ codeString, language, ...props }) => {
  if (props['react-live']) {
    return (
      <LiveProvider code={codeString} noInline={true}>
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
  } else {
    return (
      <Highlight {...defaultProps} code={codeString} language={language} theme={dracula}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  }
}
