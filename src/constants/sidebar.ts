import { SidebarProps } from "components/navLink";
import icons from "./icons";

export const sidebar: SidebarProps[] = [
  {
    title: "Dashboard",
    icon: icons.active_dashboard,
    activeIcon: icons.dashboard,
    link: "/",
  },
  {
    title: "Schools",
    icon: icons.active_school,
    activeIcon: icons.school,
    link: "/schools",
  },
  {
    title: "Subscriptions",
    icon: icons.subscriptions,
    activeIcon: icons.active_subscriptions,
    link: "/subscriptions",
  },
  {
    title: "Admin panel",
    icon: icons.admin_panel,
    activeIcon: icons.active_admin_panel,
    link: "/admin-panel",
  },
  {
    title: "Approvals",
    icon: icons.approvals,
    activeIcon: icons.active_approvals,
    link: "/approvals",
  },
  {
    title: "Help request",
    icon: icons.help_request,
    activeIcon: icons.active_help_request,
    link: "/help-request",
  },
  {
    title: "Blog",
    icon: icons.blog,
    activeIcon: icons.active_blog,
    link: "/blog",
  },
  {
    title: "Audit log",
    icon: icons.audit_logs,
    activeIcon: icons.active_audit_logs,
    link: "/audit-log",
  },
  {
    title: "Settings",
    icon: icons.settings,
    activeIcon: icons.active_settings,
    link: "/settings",
  },
];
