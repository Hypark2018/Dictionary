import React, { useEffect } from 'react';
import { Route } from 'react-router';
import {BrowserRouter} from "react-router-dom";

import styled from "styled-components";

import Write from "./Write";
import WordList from "./WordList";

import {loadDictionaryFB, addDictionaryFB } from "./redux/modules/word";

import {firestore} from "./firebase";
import { useDispatch } from 'react-redux';

/**
 * BrowserRouter를 사용해서 라우터를 잡아줍니다.
 * /에는 목록 페이지를, /write에는 작성 페이지를 엮어줍니다. (path는 각각의 주소를, component에는 각각 페이지를 담당하는 컴포넌트를 넣어줘요!)
 * 
 */



// const mapDispatchToProps = (dispatch) => ({
//   load: () => {
//     dispatch(loadDictionaryFB());
//   },
//   create: (new_word) => {
//     dispatch(addDictionaryFB(new_word));
//   },
// });




const App = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDictionaryFB());
  }, []);



  return (
    <React.Fragment>
      <Wrapper>
        <BrowserRouter>
          <Route path="/" exact component={WordList} />
          <Route path="/write" exact component={Write} />
        </BrowserRouter>
      </Wrapper>
    </React.Fragment>
  );
}


// 가장 바깥에 있을 div 스타일을 잡아줄거예요.
const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #E2FFF8;
`;


export default App;
