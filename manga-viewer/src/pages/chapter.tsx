import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Col, Row, Image } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isNil, noop } from "lodash";
import { selectChapterDetailData } from "./states/selector";
import { BookListEntity, PageEntity } from "./states/types";

interface Props {
  bookTitleDetail: BookListEntity | undefined | null;
  bookChapterDetail: number | undefined | null;
}

const Chapter: React.FC<Props> = (props) => {
  const { bookChapterDetail } = props;
  const chapterDetail = useSelector(selectChapterDetailData);
  const [count, setCount] = useState<number>(1);
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
        <div className="page-container">
          <div
            className="previous"
            style={{
              cursor: `${count <= 1 ? "default" : "pointer"}`,
            }}
            onClick={count <= 1 ? noop : () => setCount(count - 1)}
          >
            <LeftOutlined className="arrow-icon" />
          </div>
          <div className="main-page">
            {pageDetail && (
              <div>
                <Image
                  width={pageDetail.image.width / 2}
                  height={pageDetail.image.height / 4}
                  src={pageDetail.image.file}
                />
              </div>
            )}
          </div>
          <div
            className="next"
            style={{
              cursor: `${count >= pageLength ? "default" : "pointer"}`,
            }}
            onClick={count >= pageLength ? noop : () => setCount(count + 1)}
          >
            <RightOutlined className="arrow-icon" />
          </div>
        </div>
      </Col>
      <Col span={24}>
        <div className="page-footer">{`${count}/${pageLength}`}</div>
      </Col>
    </Row>
  );
};

export default Chapter;
