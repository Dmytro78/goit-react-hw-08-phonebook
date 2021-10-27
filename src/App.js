import { Switch } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import Container from "./components/Container/Container";
import NavAppBar from "./components/AppBar/NavAppBar";
import operations from "./redux/auth/authOperations";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { getIsFetchingCurrent } from "./redux/auth/authSelectors";

const LoginView = lazy(() => import("./view/LoginView/LoginView"));
const RegisterView = lazy(() => import("./view/RegisterView/RegisterView"));
const HomeView = lazy(() => import("./view/HomeView/HomeView"));
const ContactsView = lazy(() => import("./view/ContactsView/ContactsView"));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <>
          <NavAppBar />
          </>
        <Suspense
          fallback={
            <Loader
              style={{ textAlign: "center", marginTop: "15px" }}
              type="Bars"
              color="#1b5e20"
              height={80}
              width={80}
            />
          }
        >
          <Switch>
            <PublicRoute exact path="/" restricted>
              <HomeView />
            </PublicRoute>
            <PublicRoute path="/register" restricted>
              <RegisterView />
            </PublicRoute>
            <PublicRoute path="/login" restricted>
              <LoginView />
            </PublicRoute>
            <PrivateRoute path="/contacts">
              <ContactsView />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </Container>
    )
  );
}
