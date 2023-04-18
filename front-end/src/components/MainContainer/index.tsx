import Footer from '../Footer';
import Header from '../Header'
import Message from '../Message';
import * as Styled from './styles';
import { ChildProps } from '@/protocols/ChildProps';


export default function MainContainer({children}: ChildProps) {
  return (
    <>
      <Header/>
      <Message/>
      <Styled.Container>
        {children}
      </Styled.Container>
      <Footer/>
    </>
  )
}