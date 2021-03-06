import React from "react"
import { Layout } from "../Typings"
import { StyledText } from "./StyledText"

interface TextProps extends React.HTMLProps<HTMLDivElement> {
  layout: Layout
  postscript?: boolean
  html?: string
}

export const Text: React.SFC<TextProps> = props => {
  const { html, layout, postscript } = props
  const child = html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : props.children
  return (
    <StyledText className="article__text-section" layout={layout} postscript={postscript}>
      {child}
    </StyledText>
  )
}
