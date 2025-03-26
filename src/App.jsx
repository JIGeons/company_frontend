import './App.css'
import { useEffect, useState } from "react";
import {createBrowserRouter, RouterProvider, Outlet, Navigate} from "react-router-dom";
import axios from "axios";

// Components
import Footer from "./Components/Footer/Footer.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import AdminNavbar from "./Components/AdminNavbar.jsx";

import MainPage from "./Page/MainPage/MainPage.jsx";
import About from "./Page/About/About.jsx";
import Leadership from "./Page/Leadership/Leadership.jsx";
import Board from "./Page/Board/Board.jsx";
import Services from "./Page/Services/Services.jsx";
import Contact from "./Page/Contact/Contact.jsx";

import AdminLogin from "./Page/Admin/AdminLogin.jsx";
import AdminPosts from "./Page/Admin/AdminPosts.jsx";
import AdminCreatePost from "./Page/Admin/AdminCreatePost.jsx";
import AdminEditPost from "./Page/Admin/AdminEditPost.jsx";
import AdminContacts from "./Page/Admin/AdminContacts.jsx";

function AuthRedirectRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/auth/verify-token",
          {},
          { withCredentials: true }
          );

        setIsAuthenticated(true);
      } catch(error) {
        console.log("토큰 인증 실패: ", error);
        setIsAuthenticated(false);
      }
    }

    verifyToken();
  }, []);

  if (isAuthenticated === null) {
    return null;
  }

  // replace -> 현재 페이지를 새로운 페이지로 대체하여 이전 페이지로 돌아갈 수 없게 한다.
  // isAuthenticated가 false인 경우 Outlet을 사용하여 로그인 페이지로 다시 이동
  return isAuthenticated ? <Navigate to="/admin/posts" replace /> : <Outlet />;
}

function ProtectedRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/auth/verify-token",
          {},
          { withCredentials: true }
        );

        setIsAuthenticated(response.data.isValid);
        setUser(response.data.user);
      } catch(error) {
        console.log("토큰 인증 실패: ", error);
        setIsAuthenticated(false);
        setUser(null);
      }
    }

    verifyToken();
  }, []);

  if (isAuthenticated === null) {
    return null;
  }

  return isAuthenticated ? (
    <Outlet context={{ user }} />
  ) : (
    <Navigate to="/admin" replace />
  )

}

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

function AdminLayout() {
  return (
    <>
      <AdminNavbar />
      <Outlet />
    </>
  )
}

// createBrowserRouter를 사용해 중첩 라우팅을 구성
// -> 페이지 이동 시 Navbar, Footer는 재랜더링 없이 Outlet만 렌더링
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { /* default 페이지 */
        index: true,
        element: <MainPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/leadership",
        element: <Leadership />,
      },
      {
        path: "/board",
        element: <Board />,
      },
      {
        path: "/our-services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }
    ]
  }, {
    /* 로그인 페이지에서는 navigation bar나 footer가 없기 때문에 새로운 path로 만들어 줌 */
    path: "/admin",
    element: <AuthRedirectRoute />,
    children: [{
      index: true,
      element: <AdminLogin />,
    }]
  },
  {
    /* 로그인 페이지에서는 navigation bar나 footer가 없기 때문에 새로운 path로 만들어 줌 */
    path: "/admin",
    element: <ProtectedRoute />,  /* ProtectedRoute를 통해 토큰 검증, 토큰이 유효하다면 layout을 출력 */
    children: [
      {
        element: <AdminLayout/>,
        children: [
          {
            path: "posts",
            element: <AdminPosts />,
          }, {
            path: "create-post",
            element: <AdminCreatePost />,
          }, {
            path: "edit-post/:id",
            element: <AdminEditPost />,
          }, {
            path: "contacts",
            element: <AdminContacts />,
          }
        ]
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
