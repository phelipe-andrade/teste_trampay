import MainContainer from '@/components/MainContainer';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '@/store/configureStore';


export default function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
        <MainContainer><Component {...pageProps} /></MainContainer>
    </Provider>
  )
}