import { Bookmark, Brain, LayoutDashboardIcon, Search, TextSearch, User } from "lucide-react";

export const sidebarItems = {
  links: [
    { label: "داشبورد", href: "/", icon: LayoutDashboardIcon },
    { label: "مدیریت کاربران", href: "/userManagment", icon: User },
    {
      label: "جستجوی متنی",
      href: "/textSearch",
      icon: TextSearch,
      subitems: true,
    },
    { label: "جستجوی پیشرفته", href: "/advanceSearch", icon: Search, subitems: true },
    { label: "تخصیص شده", href: "/personCheck", icon: Bookmark },
    { label: "تحلیل تماس", href: "/callAnalyser", icon: Brain },
  ],
  // extras: (
  //   <div>
  //     <SideBarButton icon={MoreHorizontal} className="flex gap-2">بیشتر</SideBarButton>
  //   </div>
  // ),
};
