import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducer";
import "./I18Next";
import Loading from "./components/Loading/Loader";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./server-state/react-query";
import { AuthProvider } from "./state/auth/auth.state";
import { NotificationsProvider } from "@mantine/notifications";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <NotificationsProvider autoClose={4000}>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Suspense fallback={<Loading />}>
            <App />
          </Suspense>
        </Provider>
      </QueryClientProvider>
    </AuthProvider>
  </NotificationsProvider>,
  document.querySelector("#root")
);
