import Content from "../Content/Content"
import { SectionTitle, SectionWrapper } from "./styles"

function Section(data: SectionProps) {
  return (
    <SectionWrapper>
      <SectionTitle>Section Block</SectionTitle>
      <Content />
    </SectionWrapper>
  )
}

export default Section