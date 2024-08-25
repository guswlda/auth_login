import { createSlice } from '@reduxjs/toolkit'; // 1. slice 생성
import Cookies from 'js-cookie';

const initialState = {
  // 2. 초기 상태 정의
  authData: Cookies.get('authData') ?
  JSON.parse(Cookies.get('authData')) : null,
};

export const authSlice = createSlice({
  // 3 slice 생성
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      // update 상태값 변경
      state.authData = action.payload.authData;
      Cookies.set('authData', JSON.stringify(action.payload.authData), {
        expires: 1, // 1일 쿠키 유효
      }); // setItem으로 콘솔 application 값을 넣어줌
    },
    logout: (state) => {
      // 상태값 비움
      state.authData = null;
      Cookies.remove('authData');
    },
  },
});

// export const authActions = authSlice.actions;
export const { login, logout } = authSlice.actions;
export default authSlice.reducer; // 4. export 된 함수들을 store에 등록
