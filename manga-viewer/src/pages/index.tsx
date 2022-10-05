import { Button, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isNil } from "lodash";
import Chapter from "./chapter";
import {
  requestBookDetailPending,
  requestBookListPending,
  requestChapterDetailPending,
} from "./states/action";
import {
  selectBookDetailData,
  selectBookListData,
  selectChapterDetailData,
} from "./states/selector";
import { BookListEntity } from "./states/types";

const Page: React.FC = () => {
  const dispatch = useDispatch();
  const bookList = useSelector(selectBookListData);
  const bookDetail = useSelector(selectBookDetailData);
  const chapterDetail = useSelector(selectChapterDetailData);
  const [bookTitleDetail, setBookTitleDetail] = useState<BookListEntity>();
  const [bookChapter, setBookChapter] = useState<number>(1);
  const [count, setCount] = useState<number>(1)

  useEffect(() => {
    dispatch<any>(requestBookListPending());
  }, []);

  useEffect(() => {
    if (!isNil(bookList)) {
      if (bookList.length > 0) {
        dispatch<any>(requestBookDetailPending(bookList[0]?.id));
        dispatch<any>(requestChapterDetailPending(bookList[0]?.chapter_ids[0]));
      }
    }
  }, [bookList]);

  useEffect(() => {
    if (!isNil(bookDetail)) {
      dispatch<any>(requestChapterDetailPending(bookDetail?.chapter_ids[0]));
    }
  }, [bookDetail]);

  const handleBookTitle = (data: BookListEntity) => {
    setBookTitleDetail(data);
    dispatch<any>(requestBookDetailPending(data.id));
    setCount(1)
  };

  const handleChapter = (data: number) => {
    setBookChapter(data);
    dispatch<any>(requestChapterDetailPending(data));
    setCount(1)
  };

  return (
    <div className="App">
      <header className="header">
        <Row>
          <Col span={24}>
            <div className="book-title-container">
              {bookList &&
                bookList.map((item: BookListEntity, index: number) => (
                  <div key={index} className="book-title">
                    <Button
                      type={
                        item.title === chapterDetail?.book.title
                          ? "primary"
                          : "default"
                      }
                      title={item.title}
                      onClick={() => handleBookTitle(item)}
                    >
                      {item.title}
                    </Button>
                  </div>
                ))}
            </div>
          </Col>
          <Col span={24}>
            <div className="book-title-container">
              {bookDetail &&
                bookDetail?.chapter_ids.map(
                  (chapterItem: number, index: number) => (
                    <div
                      key={index}
                      className={`book-chapter ${
                        chapterItem === chapterDetail?.id
                          ? "activeChapter"
                          : "deactiveChapter"
                      }`}
                      onClick={() => handleChapter(chapterItem)}
                    >
                      {chapterItem}
                    </div>
                  )
                )}
            </div>
          </Col>
        </Row>
      </header>
      <div className="main-body">
        <Chapter
          bookTitleDetail={bookTitleDetail}
          bookChapterDetail={bookChapter}
          count={count}
          setCount={setCount}
        />
      </div>
    </div>
  );
};

export default Page;
