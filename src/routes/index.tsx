import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import ErrorPage from "components/errorPage";
import Loader from "components/loader";
import { Suspense } from "react";

// unauthenticated routes
import UnauthentcatedLayout from "layouts/unauthentcated";
import SignUp from "modules/authencation/signup";
import Signin from "modules/authencation/signin";
import ForgottenPassword from "modules/authencation/forgotten-password";
import VerifyCode from "modules/authencation/verify-code";
import VerifyEmail from "modules/authencation/verify-email";
import SetPassword from "modules/authencation/set-password";
import FourZeroFour from "components/404";

// authenticated routes
import AuthentcatedLayout from "layouts/authentcated";
import Dashboard from "modules/authencated/dashboard";
import Schools from "modules/authencated/schools";
import Subscriptions from "modules/authencated/subscriptions";
import AdminPanel from "modules/authencated/admin-panel";
import Approvals from "modules/authencated/approvals";
import HelpRequest from "modules/authencated/help-request";
import Blogs from "modules/authencated/blogs";
import AuditLogs from "modules/authencated/auditLogs";
import Settings from "modules/authencated/settings";
import Notification from "modules/authencated/notifications";

const MainBody = ({ children }: any) => {
  return (
    <main className="h-dvh w-full tracking-[0.2px] text-black nunito-font overflow-y-scroll">
      {children ? children : <Outlet />}
    </main>
  );
};

export const ISuspense = ({ children }: any) => {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
};

const MainRoutes = () => {
  const modules = createBrowserRouter([
    {
      element: <MainBody />,
      children: [
        {
          path: "/",
          element: <AuthentcatedLayout />,
          children: [
            {
              index: true,
              errorElement: <ErrorPage />,
              element: (
                <ISuspense>
                  <Dashboard />
                </ISuspense>
              ),
            },
            {
              path: "schools",
              errorElement: <ErrorPage />,
              element: (
                <ISuspense>
                  <Schools />
                </ISuspense>
              ),
            },
            {
              path: "subscriptions",
              errorElement: <ErrorPage />,
              element: (
                <ISuspense>
                  <Subscriptions />
                </ISuspense>
              ),
            },
            {
              path: "admin-panel",
              errorElement: <ErrorPage />,
              element: (
                <ISuspense>
                  <AdminPanel />
                </ISuspense>
              ),
            },
            {
              path: "approvals",
              errorElement: <ErrorPage />,
              element: (
                <ISuspense>
                  <Approvals />
                </ISuspense>
              ),
            },
            {
              path: "help-request",
              errorElement: <ErrorPage />,
              element: (
                <ISuspense>
                  <HelpRequest />
                </ISuspense>
              ),
            },
            {
              path: "blog",
              errorElement: <ErrorPage />,
              element: (
                <ISuspense>
                  <Blogs />
                </ISuspense>
              ),
            },
            {
              path: "audit-log",
              errorElement: <ErrorPage />,
              element: (
                <ISuspense>
                  <AuditLogs />
                </ISuspense>
              ),
            },
            {
              path: "settings",
              errorElement: <ErrorPage />,
              element: (
                <ISuspense>
                  <Settings />
                </ISuspense>
              ),
            },
            {
              path: "notifications",
              errorElement: <ErrorPage />,
              element: (
                <ISuspense>
                  <Notification />
                </ISuspense>
              ),
            },
          ],
        },
        {
          path: "/auth",
          element: <UnauthentcatedLayout />,
          children: [
            {
              index: true,
              element: (
                <ISuspense>
                  <SignUp />
                </ISuspense>
              ),
            },
            {
              path: "signin",
              element: (
                <ISuspense>
                  <Signin />
                </ISuspense>
              ),
            },
            {
              path: "forgotten-password",
              element: (
                <ISuspense>
                  <ForgottenPassword />
                </ISuspense>
              ),
            },
            {
              path: "code-confirmation",
              element: (
                <ISuspense>
                  <VerifyCode />
                </ISuspense>
              ),
            },
            {
              path: "email-confirmation",
              element: (
                <ISuspense>
                  <VerifyEmail />
                </ISuspense>
              ),
            },
            {
              path: "set-password/:token",
              element: (
                <ISuspense>
                  <SetPassword />
                </ISuspense>
              ),
            },
          ],
        },
        {
          path: "*",
          element: (
            <ISuspense>
              <FourZeroFour />
            </ISuspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={modules} />;
};

export default MainRoutes;
