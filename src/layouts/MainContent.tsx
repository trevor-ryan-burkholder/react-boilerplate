import React from 'react';

const PageLayout = ({ children }: { children: React.ReactNode }) => <>{children}</>;

const MainContent = ({ children }: { children: React.ReactNode }) => {
  return <PageLayout>{children}</PageLayout>;
};

export default MainContent;
