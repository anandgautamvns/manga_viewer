import { ModuleReducerMap } from "../../types";
import { combineModuleReducers } from "../../utils";
import {
  ModuleState,
  ModuleAction,
  REQUEST_BOOK_LIST_PENDING,
  REQUEST_BOOK_LIST_SUCCESS,
  RequestBookListSuccess,
  REQUEST_BOOK_LIST_FAILURE,
  RequestBookListFailure,
  RequestBookDetailFailure,
  RequestBookDetailSuccess,
  RequestChapterDetailFailure,
  RequestChapterDetailSuccess,
  REQUEST_BOOK_DETAIL_FAILURE,
  REQUEST_BOOK_DETAIL_PENDING,
  REQUEST_BOOK_DETAIL_SUCCESS,
  REQUEST_CHAPTER_DETAIL_FAILURE,
  REQUEST_CHAPTER_DETAIL_PENDING,
  REQUEST_CHAPTER_DETAIL_SUCCESS,
} from "./types";

export const initialState: ModuleState = {
  bookList: {
    data: [],
    loading: false,
    error: null,
  },
  bookDetail: {
    data: null,
    loading: false,
    error: null,
  },
  chapterDetail: {
    data: null,
    loading: false,
    error: null,
  },
};

const moduleReducer: ModuleReducerMap<ModuleState, ModuleAction> = {
  [REQUEST_BOOK_LIST_PENDING](state) {
    return { ...state, bookList: { ...state.bookList, loading: true } };
  },
  [REQUEST_BOOK_LIST_SUCCESS](state, action) {
    const dataList = (action as RequestBookListSuccess).payload;
    return {
      ...state,
      bookList: {
        ...state.bookList,
        data: dataList,
        loading: false,
      },
    };
  },
  [REQUEST_BOOK_LIST_FAILURE](state, action) {
    const error = (action as RequestBookListFailure).payload;
    return {
      ...state,
      bookList: { ...state.bookList, loading: false, error },
    };
  },

  [REQUEST_BOOK_DETAIL_PENDING](state) {
    return { ...state, bookDetail: { ...state.bookDetail, loading: true } };
  },
  [REQUEST_BOOK_DETAIL_SUCCESS](state, action) {
    const data = (action as RequestBookDetailSuccess).payload;
    return {
      ...state,
      bookDetail: {
        ...state.bookDetail,
        data: data,
        loading: false,
      },
    };
  },
  [REQUEST_BOOK_DETAIL_FAILURE](state, action) {
    const error = (action as RequestBookDetailFailure).payload;
    return {
      ...state,
      bookDetail: { ...state.bookDetail, loading: false, error },
    };
  },

  [REQUEST_CHAPTER_DETAIL_PENDING](state) {
    return {
      ...state,
      chapterDetail: { ...state.chapterDetail, loading: true },
    };
  },
  [REQUEST_CHAPTER_DETAIL_SUCCESS](state, action) {
    const data = (action as RequestChapterDetailSuccess).payload;
    return {
      ...state,
      chapterDetail: {
        ...state.chapterDetail,
        data: data,
        loading: false,
      },
    };
  },
  [REQUEST_CHAPTER_DETAIL_FAILURE](state, action) {
    const error = (action as RequestChapterDetailFailure).payload;
    return {
      ...state,
      chapterDetail: { ...state.chapterDetail, loading: false, error },
    };
  },
};

export default combineModuleReducers<ModuleState, ModuleAction>(
  initialState,
  moduleReducer
);
