// word.js
/**
 * 액션 타입을 정해주고, 
 * 액션 생성자를 만들고,
 * 리듀서를 만들어줘요!
 * 
 * 그리고 나면, configureStore.js에서 rootReducer로 묶어주고 -> 미들웨어랑 엮어서 -> 스토어를 만들어줍니다.
 */

import {firestore} from "../../firebase";

const dictionary_db = firestore.collection("dictionary");


// Actions
const LOAD = "word/LOAD";
const CREATE = "word/CREATE";

// wordList에 있던 가짜 데이터를 initialState로 옮겨옵니다.
const initialState = {
  word_list: [
    {
      id: "list_0",
      word: "ㅎ1ㅎ1",
      desc: "히히를 변형한 단어. 숫자 1을 'ㅣ'로 쓴다.",
      example: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1",
    },
    {
      id: "list_1",
      word: "ㅎ1ㅎ1",
      desc: "히히를 변형한 단어. 숫자 1을 'ㅣ'로 쓴다.",
      example: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1",
    },
    {
      id: "list_2",
      word: "ㅎ1ㅎ1",
      desc: "히히를 변형한 단어. 숫자 1을 'ㅣ'로 쓴다.",
      example: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1",
    },
    {
      id: "list_3",
      word: "ㅎ1ㅎ1",
      desc: "히히를 변형한 단어. 숫자 1을 'ㅣ'로 쓴다.",
      example: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1",
    },
  ],
};

// Action Creators
export const loadWord = (word_list) => {
  return { type: LOAD, word_list };
};

export const createWord = (word) => {
  return { type: CREATE, word };
};

export const loadDictionaryFB = () => {
  return function (dispatch) {
    dictionary_db.get().then(docs => {
      let dic_data = [];

      docs.forEach((doc) => {
        if(doc.exists) {
          dic_data = [...dic_data, {id: doc.id, ...doc.data()}];
        }
        });
        console.log(dic_data);
        dispatch(loadWord(dic_data));
    });
  }
}

export const addDictionaryFB = (word) => {
  return function (dispatch) {
    let dictionary_data = {word: word.word, desc: word.desc, example: word.example };

    dictionary_db.add(dictionary_data).then(docRef => {
      dictionary_data = {...dictionary_data, id: docRef.id};
      dispatch(createWord(dictionary_data));
    })
  }
}



// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "word/LOAD": {
      if(action.word_list.length > 0) {
        return { word_list: action.word_list };
      }
      
      return state;
    }

    case "word/CREATE":
        // 받아온 데이터를 추가한 새 리스트 만들기
      const new_word_list = [...state.word_list, action.word];

    //   state를 갈아끼워요
      return {...state, word_list: new_word_list };

    default:
      return state;
  }
}
