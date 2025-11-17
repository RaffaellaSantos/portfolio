import React from "react";

const TechBadge: React.FC<{ icon: React.ElementType; label: string }> = ({
  icon: Icon,
  label,
}) => (
  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 border border-gray-200">
    <Icon className="h-4 w-4 mr-1.5" />
    {label}
  </span>
);

export default TechBadge;
