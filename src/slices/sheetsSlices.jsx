import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  sheetsView: 0,
  sheetsSize: 50,
};

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

const sheetsSlices = createSlice({
  name: "sheets",
  initialState,
  reducers: {
    RsetSheetsView: (state, { payload }) => {
      return { ...state, sheetsView: payload };
    },
    RsetSheetsSize: (state, { payload }) => {
      return { ...state, sheetsSize: payload };
    },
  },
});

export const { RsetSheetsView, RsetSheetsSize } = sheetsSlices.actions;

export const selectSheetsView = (state) => state.sheets.sheetsView;
export const selectSheetsSize = (state) => state.sheets.sheetsSize;

export default sheetsSlices.reducer;
