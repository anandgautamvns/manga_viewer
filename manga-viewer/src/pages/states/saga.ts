import { call, put, takeLatest } from "redux-saga/effects";
import { APIService } from "../../APIService";
import { WithMeta } from "../../types";
import {
  requestBookListSuccess,
  requestBookListFailure,
  requestBookDetailFailure,
  requestBookDetailSuccess,
  requestChapterDetailFailure,
  requestChapterDetailSuccess,
} from "./action";
import {
  BookListEntity,
  BookListResponse,
  ChapterDetailEntity,
  RequestBookDetailPending,
  RequestBookListPending,
  RequestChapterDetailPending,
  REQUEST_BOOK_DETAIL_PENDING,
  REQUEST_BOOK_LIST_PENDING,
  REQUEST_CHAPTER_DETAIL_PENDING,
} from "./types";

export function* requestBookList() {
  try {
    const response: BookListResponse = yield call(APIService.getBookList);
    yield put(requestBookListSuccess(response));
  } catch (error: any) {
    yield put(requestBookListFailure(error));
  }
}

export function* RequestBookDetail(action: WithMeta<RequestBookDetailPending>) {
  try {
    const response: BookListEntity = yield call(
      APIService.getBookDetails,
      action.payload
    );
    yield put(requestBookDetailSuccess(response));
    yield call(action.meta.resolve);
  } catch (error: any) {
    yield put(requestBookDetailFailure(error));
    yield call(action.meta.reject);
  }
}

export function* requestChapterDetail(
  action: WithMeta<RequestChapterDetailPending>
) {
  try {
    const response: ChapterDetailEntity = yield call(
      APIService.getChapterDetails,
      action.payload
    );
    yield put(requestChapterDetailSuccess(response));
    yield call(action.meta.resolve);
  } catch (error: any) {
    yield put(requestChapterDetailFailure(error));
    yield call(action.meta.reject);
  }
}

export function* moduleSaga() {
  yield takeLatest(REQUEST_BOOK_LIST_PENDING, requestBookList);
  yield takeLatest(REQUEST_BOOK_DETAIL_PENDING, RequestBookDetail);
  yield takeLatest(REQUEST_CHAPTER_DETAIL_PENDING, requestChapterDetail);
}

export default moduleSaga;
