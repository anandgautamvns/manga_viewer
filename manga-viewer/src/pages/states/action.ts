import { APIError } from "../../types";
import {
  RequestBookListPending,
  REQUEST_BOOK_LIST_PENDING,
  BookListResponse,
  RequestBookListSuccess,
  REQUEST_BOOK_LIST_SUCCESS,
  RequestBookListFailure,
  REQUEST_BOOK_LIST_FAILURE,
  BookListEntity,
  RequestBookDetailFailure,
  RequestBookDetailPending,
  RequestBookDetailSuccess,
  REQUEST_BOOK_DETAIL_FAILURE,
  REQUEST_BOOK_DETAIL_SUCCESS,
  REQUEST_BOOK_DETAIL_PENDING,
  ChapterDetailEntity,
  RequestChapterDetailFailure,
  RequestChapterDetailPending,
  RequestChapterDetailSuccess,
  REQUEST_CHAPTER_DETAIL_FAILURE,
  REQUEST_CHAPTER_DETAIL_PENDING,
  REQUEST_CHAPTER_DETAIL_SUCCESS,
} from "./types";

export const requestBookListPending = (): Promise<RequestBookListPending> =>
  Promise.resolve({
    type: REQUEST_BOOK_LIST_PENDING,
  });

export const requestBookListSuccess = (
  payload: BookListResponse
): RequestBookListSuccess => ({
  type: REQUEST_BOOK_LIST_SUCCESS,
  payload,
});

export const requestBookListFailure = (
  error: APIError | null
): RequestBookListFailure => ({
  type: REQUEST_BOOK_LIST_FAILURE,
  payload: error,
});

export const requestBookDetailPending = (
  payload: number
): Promise<RequestBookDetailPending> =>
  Promise.resolve({
    type: REQUEST_BOOK_DETAIL_PENDING,
    payload,
  });

export const requestBookDetailSuccess = (
  payload: BookListEntity
): RequestBookDetailSuccess => ({
  type: REQUEST_BOOK_DETAIL_SUCCESS,
  payload,
});

export const requestBookDetailFailure = (
  error: APIError | null
): RequestBookDetailFailure => ({
  type: REQUEST_BOOK_DETAIL_FAILURE,
  payload: error,
});

export const requestChapterDetailPending = (
  payload: number
): Promise<RequestChapterDetailPending> =>
  Promise.resolve({
    type: REQUEST_CHAPTER_DETAIL_PENDING,
    payload,
  });

export const requestChapterDetailSuccess = (
  payload: ChapterDetailEntity
): RequestChapterDetailSuccess => ({
  type: REQUEST_CHAPTER_DETAIL_SUCCESS,
  payload,
});

export const requestChapterDetailFailure = (
  error: APIError | null
): RequestChapterDetailFailure => ({
  type: REQUEST_CHAPTER_DETAIL_FAILURE,
  payload: error,
});
