import React, { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import Loading from "./pages/components";
import store from "./store";
import "./App.css";
import 'antd/dist/antd.css'

const Page = lazy(() => import("./pages"));
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Suspense
        fallback={
          <div>
            <Loading />
          </div>
        }
      >
        <Page />
      </Suspense>
    </Provider>
  );
};

export default App;
