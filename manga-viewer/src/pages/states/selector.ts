import { createSelector } from "reselect";
import { AppState } from "../../rootReducer";
import { ModuleState } from "./types";

export const selectModuleState = (state: AppState) => state.module;

export const selectBookListData = createSelector(
  selectModuleState,
  (item: ModuleState) => item.bookList.data
);
export const selectBookListLoading = createSelector(
  selectModuleState,
  (item: ModuleState) => item.bookList.loading
);

export const selectBookDetailData = createSelector(
  selectModuleState,
  (item: ModuleState) => item.bookDetail.data
);
export const selectBookDetailLoading = createSelector(
  selectModuleState,
  (item: ModuleState) => item.bookDetail.loading
);

export const selectChapterDetailData = createSelector(
  selectModuleState,
  (item: ModuleState) => item.chapterDetail.data
);
export const selectChapterDetailLoading = createSelector(
  selectModuleState,
  (item: ModuleState) => item.chapterDetail.loading
);
