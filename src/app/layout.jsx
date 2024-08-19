// import { Inter } from "next/font/google";
import { iranSans } from "@/lib/font";
import "./globals.css";
import ReduxStoreProviders from "@/providers/ReduxStoreProviders";
import DashboardRoot from "@/components/dashboard/DashboardRoot";
import "react-calendar-datetime-picker/dist/style.css";

export const metadata = {
  title: "OpenSpaceDemo",
  description: "constructore PM Demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={iranSans.className}>
        <DashboardRoot>
          <ReduxStoreProviders>{children}</ReduxStoreProviders>
        </DashboardRoot>
      </body>
    </html>
  );
}
