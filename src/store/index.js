import { userReducer } from "./slices/users";
import albumsApi from "./apis/albumsApi";

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    users: userReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumsApi.middleware);
  },
});

setupListeners(store.dispatch);

export { store };
export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/removeUser";
export {
  useFetchAlbumsQuery,
  useDeleteAlbumMutation,
  useAddAlbumMutation,
} from "./apis/albumsApi";
