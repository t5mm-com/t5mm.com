"use client";

import { I18nextProvider } from "react-i18next";

import i18n from "./i18n";

const InnerClientLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </>
  );
};

const ClientLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <InnerClientLayout>{children}</InnerClientLayout>;
};

export default ClientLayout;
