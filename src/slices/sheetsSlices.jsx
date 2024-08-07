import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  sheetsView: 0,
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
  },
});

export const { RsetSheetsView } = sheetsSlices.actions;

export const selectSheetsView = (state) => state.sheets.sheetsView;

export default sheetsSlices.reducer;
