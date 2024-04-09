import React from "react";

const WorkDetailComponent: React.FC<string> = (textelment: string) => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">{textelment}</h1>
          <p className="text-gray-500 text-sm">2022/1/2</p>
        </div>
        <section className="mt-4">
          <p>{/* Content here */}</p>
        </section>
      </div>
    </div>
  );
};

export { WorkDetailComponent };
