import { useEffect, useState } from 'react';
import * as Styled from './styles';

export default function Message({message = "teste", status = 400}:{status: number, message: string, show: boolean}) {
  const [close, setClose] = useState<boolean>(false);
  
  useEffect(() => {
    setTimeout(() => {
     setClose(true)
    }, 5000);
    
  }, [])

  return (
    <Styled.Wrapper className={close ? '' : 'active'}>
      <Styled.Close onClick={() => setClose(false)}>X</Styled.Close>
      <p>{message}</p>
    </Styled.Wrapper>
  )
}