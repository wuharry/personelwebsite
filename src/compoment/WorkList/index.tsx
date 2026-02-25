import React from 'react';
import { Link } from 'react-router-dom';

import { type WORKPROPS } from '../../types';

interface WorkListProps {
  dataSource: WORKPROPS[];
}

export const WorkList: React.FC<WorkListProps> = ({ dataSource }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      <ul className="space-y-4">
        {dataSource &&
          dataSource.map((item) => (
            <li key={item.id} className="group">
              <Link
                to={`/works/${item.id}`}
                className="block overflow-hidden rounded-lg shadow-md"
              >
                <div className="w-full">
                  <img
                    src={item.cover}
                    alt={item.title}
                    className="h-64 w-full rounded-t-lg object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-700">{item.content}</p>
                  <div className="mt-3 flex items-center">
                    {item.tags && (
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-500">
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
