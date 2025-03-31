

import { Lesson10Container, SectionWrapper, SectionTitle, Description } from "./styles";
function Lesson10() {
  return (
    <Lesson10Container>
      <SectionWrapper>
        <SectionTitle>Важность путешествий в жизни человека
        </SectionTitle>
        <Description>
            Путешествия – это не просто перемещение из одного места в другое, а возможность расширить границы своего мировоззрения, обрести новые знания и пережить незабываемые эмоции.
            </Description>
        <Description>
            Путешествия обогащают культурный опыт. Посещая новые страны и города, человек знакомится с традициями, языками, кухней и образом жизни других народов. Это помогает лучше понять мир и избавиться от стереотипов.
            </Description>
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle>Заметки путешественника
        </SectionTitle>

        <NoteBlock>

            <NoteTitle>Путешествуйте налегке</NoteTitle>
            <NoteDescription>
                Чем меньше вещей в вашем рюкзаке, тем легче и приятнее передвигаться. Берите только самое необходимое – документы, деньги, удобную одежду и гаджеты.

            </NoteDescription>

        </NoteBlock>


      </SectionWrapper>
    </Lesson10Container>
  )
}
export default Lesson10;