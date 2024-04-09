import React from "react";
import { Link } from "react-router-dom";
import { WORKPROPS } from "../../types";

interface WorkListProps {
  dataSource: WORKPROPS[];
}

export const WorkList: React.FC<WorkListProps> = ({ dataSource }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <ul className="space-y-4">
        {dataSource &&
          dataSource.map((item) => (
            <li key={item.id} className="group">
              <Link
                to={`/works/${item.id}`}
                className="block rounded-lg overflow-hidden shadow-md"
              >
                <div className="w-full">
                  <img
                    src={item.cover}
                    alt={item.title}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-700">{item.content}</p>
                  <div className="flex items-center mt-3">
                    {item.tags && (
                      <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-500 rounded-full bg-gray-100">
                        {item.tags.map((tag, index) => (
                          <span key={index} className="mr-2">
                            {tag}
                          </span>
                        ))}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
