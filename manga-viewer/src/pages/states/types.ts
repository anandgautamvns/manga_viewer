import { Action } from "redux";
import { APIError, ReduxAction } from "../../types";

export const REQUEST_BOOK_LIST_PENDING = `REQUEST_BOOK_LIST_PENDING`;
export const REQUEST_BOOK_LIST_SUCCESS = `REQUEST_BOOK_LIST_SUCCESS`;
export const REQUEST_BOOK_LIST_FAILURE = `REQUEST_BOOK_LIST_FAILURE`;

export const REQUEST_BOOK_DETAIL_PENDING = `REQUEST_BOOK_DETAIL_PENDING`;
export const REQUEST_BOOK_DETAIL_SUCCESS = `REQUEST_BOOK_DETAIL_SUCCESS`;
export const REQUEST_BOOK_DETAIL_FAILURE = `REQUEST_BOOK_DETAIL_FAILURE`;

export const REQUEST_CHAPTER_DETAIL_PENDING = `REQUEST_CHAPTER_DETAIL_PENDING`;
export const REQUEST_CHAPTER_DETAIL_SUCCESS = `REQUEST_CHAPTER_DETAIL_SUCCESS`;
export const REQUEST_CHAPTER_DETAIL_FAILURE = `REQUEST_CHAPTER_DETAIL_FAILURE`;

export type RequestBookListPending = Action<typeof REQUEST_BOOK_LIST_PENDING>;
export type RequestBookListSuccess = ReduxAction<
  BookListResponse,
  typeof REQUEST_BOOK_LIST_SUCCESS
>;
export type RequestBookListFailure = ReduxAction<
  APIError | null,
  typeof REQUEST_BOOK_LIST_FAILURE
>;

export type RequestBookDetailPending = ReduxAction<
  number,
  typeof REQUEST_BOOK_DETAIL_PENDING
>;
export type RequestBookDetailSuccess = ReduxAction<
  BookListEntity,
  typeof REQUEST_BOOK_DETAIL_SUCCESS
>;
export type RequestBookDetailFailure = ReduxAction<
  APIError | null,
  typeof REQUEST_BOOK_DETAIL_FAILURE
>;

export type RequestChapterDetailPending = ReduxAction<
  number,
  typeof REQUEST_CHAPTER_DETAIL_PENDING
>;
export type RequestChapterDetailSuccess = ReduxAction<
  ChapterDetailEntity,
  typeof REQUEST_CHAPTER_DETAIL_SUCCESS
>;
export type RequestChapterDetailFailure = ReduxAction<
  APIError | null,
  typeof REQUEST_CHAPTER_DETAIL_FAILURE
>;

export type ModuleAction =
  | RequestBookListPending
  | RequestBookListSuccess
  | RequestBookListFailure
  | RequestBookDetailPending
  | RequestBookDetailSuccess
  | RequestBookDetailFailure
  | RequestChapterDetailPending
  | RequestChapterDetailSuccess
  | RequestChapterDetailFailure;

export type ModuleState = {
  bookList: {
    data: BookListResponse;
    loading: boolean;
    error: APIError | null;
  };
  bookDetail: {
    data: BookListEntity | null;
    loading: boolean;
    error: APIError | null;
  };
  chapterDetail: {
    data: ChapterDetailEntity | null;
    loading: boolean;
    error: APIError | null;
  };
};

export type BookListEntity = {
  id: number;
  title: string;
  chapter_ids: number[];
};

export type ImageEntity = {
  id: number;
  file: string;
  width: number;
  height: number;
  created_at: string;
  updated_at: string;
};

export type PageEntity = {
  id: number;
  page_index: number;
  image: ImageEntity;
};

export type ChapterDetailEntity = {
  id: number;
  title: string;
  book: BookListEntity;
  chapter_index: string;
  pages: PageEntity[];
};

export type BookListResponse = BookListEntity[];
