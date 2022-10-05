import { Col, Row, Image } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isNil, noop } from "lodash";
import { selectChapterDetailData } from "./states/selector";
import { BookListEntity, PageEntity } from "./states/types";

interface Props {
  bookTitleDetail: BookListEntity | undefined | null;
  bookChapterDetail: number | undefined | null;
  count: number;
  setCount: (count: number)=> void;
}

const Chapter: React.FC<Props> = (props) => {
  const { count, setCount} = props;
  const chapterDetail = useSelector(selectChapterDetailData);
  const [pageDetail, setPageDetail] = useState<PageEntity>();
  const [pageLength, setPageLength] = useState<number>(0);

  useEffect(() => {
    if (!isNil(chapterDetail)) {
      const page = chapterDetail?.pages[count - 1];
      setPageDetail(page);
      setPageLength(chapterDetail?.pages.length);
    }
  }, [count, chapterDetail]);

  return (
    <Row>
      <Col span={24}>
        {pageDetail && (
          <div className="page-container">
            <div
              className="previous"
              style={{
                cursor: `${count <= 1 ? "default" : "pointer"}`,
                height: `${pageDetail.image.height / 2}px`,
              }}
              onClick={count <= 1 ? noop : () => setCount(count - 1)}
            ></div>
            <div className="main-page">
              <div>
                <Image
                  width={pageDetail.image.width / 2}
                  height={pageDetail.image.height / 2}
                  src={pageDetail.image.file}
                />
              </div>
            </div>
            <div
              className="next"
              style={{
                cursor: `${count >= pageLength ? "default" : "pointer"}`,
                height: `${pageDetail.image.height / 2}px`,
              }}
              onClick={count >= pageLength ? noop : () => setCount(count + 1)}
            ></div>
          </div>
        )}
      </Col>
      <Col span={24}>
        <div className="page-footer">{`${count}/${pageLength}`}</div>
      </Col>
    </Row>
  );
};

export default Chapter;
