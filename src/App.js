import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { Provider } from "react-redux";
import store from "./store"
import Board from './components/Bord';
import AchievementInput from './components/AchievementInput';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Board />
        <AchievementInput />
      </Provider>
    </ChakraProvider>
  );
}

export default App;
