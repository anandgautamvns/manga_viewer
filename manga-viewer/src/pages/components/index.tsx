import { Spin } from "antd";
import React from "react";
import styles from "./index.module.css";

const Loading: React.FC = () => {
  return (
    <div className={styles.loading}>
      <Spin size="large" />
    </div>
  );
};

export default Loading;
