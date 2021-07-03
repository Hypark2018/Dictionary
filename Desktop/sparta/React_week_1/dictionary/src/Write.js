import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { createWord, addDictionaryFB } from "./redux/modules/word";

const Write = (props) => {
  // dispatch를 만들었어요!
  const dispatch = useDispatch();

  // 여기에서 ref도 세개 잡아줄 거예요. (과제 요구사항에서 ref로 input의 텍스트를 받아와달라고 했으니, ref를 써봅시다!)
  // 각각 word_ref, desc_ref, example_ref라고 이름 붙였어요.
  // 초기값은 null입니다! (<input ref={~~}/> <- 여기에서 ref= 다음에 나오는 {}에 넣어주기 전까지는 아무 값도 없단 뜻으로요!)

  const word_ref = React.useRef(null);
  const desc_ref = React.useRef(null);
  const example_ref = React.useRef(null);

  const addWord = () => {
    //   가짜 데이터가 어떻게 생겨야 할까? 미리 생김새부터 떠올려봅니다.
    //  1. {} <- 이런 딕셔너리 안에,
    //  2. id, word, desc, example이 들어간다!
    //     - 그럼 생김새는? {id: ~~~, word: ~~~, desc: ~~~, example: ~~~} 이렇게 생겨야죠!
    //  3. 그럼 word, desc, example은 어디에서 가져올까요? -> ref에서 가져와야겠죠!
    //     - useRef를 먼저 잡아주고, input의 ref에 넣어줍니다. 그리고 ref담고 있는 변수명.currect로 가져오면 끝!

    const word = {
      id: "word_11111", // id는 임시로 아무거나 넣어요
      word: word_ref.current.value, // input에서 text값에 접근하려면 ~~.value로 접근해요. (word_ref.current가 input이에요.)
      desc: desc_ref.current.value,
      example: example_ref.current.value,
    };

    // 리덕스에 가짜 데이터를 넣어볼게요!
    dispatch(addDictionaryFB(word));
    // 데이터를 넣고 나면 목록 페이지로 이동합시다.
    props.history.replace('/');
  };

  return (
    <React.Fragment>
      <Title>단어 추가하기</Title>
      <InputWrapper>
        <p>단어</p>
        <input ref={word_ref} />
      </InputWrapper>

      <InputWrapper>
        <p>설명</p>
        <input ref={desc_ref} />
      </InputWrapper>

      <InputWrapper>
        <p>예시</p>
        <input ref={example_ref} />
      </InputWrapper>

      {/* 추가 버튼을 누르면 추가할 가짜데이터를 미리 꾸려볼게요. */}
      <Button onClick={addWord}>추가하기</Button>
    </React.Fragment>
  );
};

// 제목 스타일을 잡아줄 거예요.
const Title = styled.h1`
  width: 90vw;
  margin: 8px auto;
`;

// input이 들어갈 부분을 감싸줄거예요. 배경색도 흰색으로 줘볼게요!
// 이 div 아래에 있는 p 태그에 접근할 때는 & > p로 접근할 수 있어요.
// 이 div 아래에 있는 input 태그에 접근할 때는 & > input으로 접근할 수 있어요.
const InputWrapper = styled.div`
  width: 90vw;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  margin: 8px auto;
  box-sizing: border-box;
  background-color: #ffffff;
  & > p {
    text-decoration: underline;
    font-size: 8px;
    color: #888888;
    margin: 4px 0px;
  }

  & > input {
    border: 1px solid #000000;
    width: 100%;
    padding: 2px 4px;
    margin: 4px 0px;
    box-sizing: border-box;
  }
`;

// 추가하기 버튼 스타일을 잡아줄거예요.
const Button = styled.button`
  background-color: #6100ff;
  color: #ffffff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 8px 0px;
  margin: 16px;
`;

export default Write;
