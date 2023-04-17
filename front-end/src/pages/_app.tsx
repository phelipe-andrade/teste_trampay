import MainContainer from '@/components/MainContainer';
import { DefaultTheme, ThemeProvider } from "styled-components"; 
import { GlobalStyles } from "../styles/global-styles";
import type { AppProps } from 'next/app';
import { combineTheme, light, dark } from '@/styles/theme';
// import {Provider} from 'react-redux';
// import store from '@/store/configureStore';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={combineTheme(light)}>
      <MainContainer><Component {...pageProps} /></MainContainer>
      <GlobalStyles/>
    </ThemeProvider>
  )
}