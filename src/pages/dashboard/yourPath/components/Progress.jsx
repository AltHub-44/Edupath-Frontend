import * as React from "react";
import PropTypes from "prop-types";

const Progress = React.forwardRef(({ className, value, total = 100, color = "bg-blue300", ...props }, ref) => {
  const percentage = Math.min((value / total) * 100, 100);

  return (
    <div
      ref={ref}
      className={`relative h-2 w-full overflow-hidden rounded-full bg-gray-100 ${className || ''}`.trim()}
      {...props}
    >
      <div
        className="absolute inset-0 bg-gray-100"
      />
      <div
        className={`absolute inset-0 h-full ${color} transition-all`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
});

Progress.displayName = "Progress";

Progress.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number.isRequired,
  total: PropTypes.number,
  color: PropTypes.string,
};

export { Progress };