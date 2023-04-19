import { useEffect, useMemo, useState } from 'react';
import * as Styled from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { IMessage } from '@/protocols/IMessage';
import { messageApp } from '@/store/message';

export default function Message() {
  const message = useSelector((state: IMessage) => state.message);
  const dispatch = useDispatch();
  const [close, setClose] = useState<boolean>(false);

  function handleClose() {
    setClose(false);
    dispatch(messageApp(['']))
  }

  return (
    <>
      {
        message[0].length > 0 &&

      <Styled.Wrapper className={close ? '' : 'active'}>
        <Styled.Close onClick={handleClose}>X</Styled.Close>
        <p>{message[0]}</p>
      </Styled.Wrapper>
      }
    </>
  )
}