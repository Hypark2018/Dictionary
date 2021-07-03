import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const WordList = (props) => {
  //   리덕스에 있는 데이터를 가져와요!
  const word_list = useSelector((state) => state.word.word_list);

  return (
    <React.Fragment>
      <Title>My dictionary</Title>
      {word_list.map((w) => {
        return (
          <Card key={w.id}>
            <Text color="#888888" size="8px" underline>
              단어
            </Text>
            <Text>{w.word}</Text>
            <Text color="#888888" size="8px" underline>
              설명
            </Text>
            <Text>{w.desc}</Text>
            <Text color="#888888" size="8px" underline>
              예시
            </Text>
            <Text color="blue">{w.example}</Text>
          </Card>
        );
      })}

      <AddButton
        onClick={() => {
          props.history.push("/write");
        }}
      >
        +
      </AddButton>
    </React.Fragment>
  );
};

// 제목 스타일을 잡아줄 거예요.
const Title = styled.h1`
  width: 90vw;
  margin: 8px auto;
`;

// 목록에 나올 단어들을 각각 카드 뷰로 만들거예요.
// Card는 카드 하나(와이어프레임의 단어, 설명, 예시를 담고 있는 흰색 네모칸 하나! 그게 카드입니다.)의 스타일을 담당해요!
const Card = styled.div`
  width: 90vw;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 4px 16px;
  margin: 8px auto;
  box-sizing: border-box;
  background-color: #ffffff;
`;

// 텍스트 스타일을 잡아줄거예요.
// size라는 props가 있으면 size대로 폰트 크기를 넣어주고,
// underline이라는 props가 있으면 밑줄을 줄거예요.(text-decoration 속성을 사용합니다.)
// color라는 props가 있으면 color대로 텍스트 컬러를 바꿔줄거예요.
const Text = styled.p`
  font-size: ${(props) => (props.size ? `${props.size}` : "16px")};
  ${(props) => (props.underline ? "text-decoration: underline;" : "")}
  ${(props) => (props.color ? `color: ${props.color};` : "")}
  margin: 4px 0px;
`;

// 추가하기 버튼 스타일을 잡아줄거예요.
const AddButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #6100ff;
  color: #ffffff;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default WordList;
