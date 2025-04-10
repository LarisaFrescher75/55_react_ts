

import BlogManagement from "../BlogManagement/BlogManagement"
import { MessageTitle, MessageWrapper } from "./styles"
// import { SectionProps } from "./types"

function Message() {
  return (
    <MessageWrapper>
      <MessageTitle>Message</MessageTitle>
      <BlogManagement />
    </MessageWrapper>
  )
}

export default Message