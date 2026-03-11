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

export const submitContactRequestAsync = createAsyncThunk(
  "contactUs/submitContactRequest",
  async (contactData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    });

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
