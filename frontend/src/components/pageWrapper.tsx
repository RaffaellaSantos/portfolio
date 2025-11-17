import React from "react";

const PageWrapper: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="container mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
    <div className="bg-white shadow-xl rounded-2xl p-10 md:p-16 border border-gray-100">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">{title}</h1>
      <div>{children}</div>
    </div>
  </div>
);

export default PageWrapper;
