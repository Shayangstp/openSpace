import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {};

// export const handleUserIp = createAsyncThunk(
//   "auth/handleUserIp",
//   async (obj, { dispatch, getState }) => {
//     try {
//       const getUserIpRes = await getUserIp();
//       if (getUserIpRes.data.code === 200) {
//         dispatch(RsetUserIp(getUserIpRes.data.ip));
//       } else {
//         errorMessage("خطا!");
//       }
//     } catch (ex) {
//       console.log(ex);
//     }
//   }
// );

const mainSlices = createSlice({
  name: "main",
  initialState,
  reducers: {
    RsetCustomerLogginPage: (state, { payload }) => {
      return { ...state, customerLogginPage: payload };
    },
  },
});

export const { RsetCustomerLogginPage } = mainSlices.actions;

export const selectCustomerPannel = (state) => state.main.customerPannel;

export default mainSlices.reducer;
