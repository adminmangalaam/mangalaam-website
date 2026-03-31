import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type contactUsStateTypes = {
  loading: boolean;
  error: string | null;
  success: boolean;
};

const initialState: contactUsStateTypes = {
  loading: false,
  error: null,
  success: false,
};

const URL = import.meta.env.DEV
  ? "http://localhost:3005"
  : import.meta.env.VITE_API_URL;

export const submitContactRequestAsync = createAsyncThunk(
  "contactUs/submitContactRequest",
  async (contactData: {
    name: string;
    email: string;
    subject: string;
    message: string;
    captchaValue: string | null;
  }) => {
    const response = await fetch(`${URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    });
    console.log("API response status:", response);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to submit contact request.");
    }

    return contactData;
  },
);

const contactUsSlice = createSlice({
  name: "contactUs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitContactRequestAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(submitContactRequestAsync.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.success = true;
      })
      .addCase(submitContactRequestAsync.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Failed to submit contact request.";
        state.success = false;
      });
  },
});

export default contactUsSlice.reducer;
