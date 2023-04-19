import { ChangeEvent, useContext, useEffect, useRef } from 'react';
import * as Styled from './styles';
import { useDispatch } from 'react-redux';
import { themeApp } from '@/store/theme';
import { getLocalStorage, setLocalStorage } from '@/helper/localStorage';

export default function ChangeTheme() {
  const dispatch = useDispatch();

  const inputTheme = useRef<HTMLInputElement>(null);

  function handleTheme(event: ChangeEvent<HTMLInputElement>) {   
    const typeTheme = event.target.checked ? 'dark' : 'light';
    dispatch(themeApp(typeTheme));
    setLocalStorage('theme', typeTheme)
  }

  useEffect(() => {
    const typeTheme = getLocalStorage('theme');
    if (inputTheme.current && typeTheme) {
      inputTheme.current.checked = typeTheme != 'light';
      dispatch(themeApp(typeTheme));
    }
  },[dispatch])

  return (
    <Styled.Container>
      <input ref={inputTheme} onChange={handleTheme} type="checkbox" className="checkbox" id="chk"/>
      <label className="label" htmlFor="chk">
        <div className="ball"></div>
      </label>
    </Styled.Container>
  )
}