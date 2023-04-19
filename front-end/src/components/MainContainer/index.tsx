import { DefaultTheme, ThemeProvider } from 'styled-components';
import Footer from '../Footer';
import Header from '../Header'
import Message from '../Message';
import * as Styled from './styles';
import { ChildProps } from '@/protocols/ChildProps';
import { GlobalStyles } from '@/styles/global-styles';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ITheme } from '@/store/theme';
import { combineTheme, dark, light } from '@/styles/theme';


export default function MainContainer({children}: ChildProps) {
  const themeApp = useSelector((state: ITheme) => state.theme);
  const [theme, setTheme] = useState<DefaultTheme>(combineTheme(light));

  useEffect(() => {      
    themeApp === 'light' ? setTheme(combineTheme(light)) : setTheme(combineTheme(dark)) ;
  }, [themeApp])

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header/>
        <Message/>
        <Styled.Container>
          {children}
        </Styled.Container>
        <Footer/>
        <GlobalStyles/>
      </ThemeProvider>
    </>
  )
}