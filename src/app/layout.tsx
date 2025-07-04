import type { Metadata } from "next";
import "@/styles/index.scss";
import ReduxProvider from "@/store/ReduxProvider";
import { UIProvider } from "@/UI";
import { Layout } from "@/app/.pages";

export const metadata: Metadata = {
  title: "Refme",
  description: "",
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (<>
    <ReduxProvider>
      <UIProvider>
        <html lang="en">
          <head>
            <link rel="icon" type="image/svg" href="/icons/logo.svg" />
          </head>
          <body>
            <Layout>
              {children}
            </Layout>
          </body>
        </html>
      </UIProvider>
    </ReduxProvider>
  </>);
}
