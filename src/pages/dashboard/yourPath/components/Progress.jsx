import * as React from "react";
import PropTypes from "prop-types";

const Progress = React.forwardRef(({ className, value, ...props }, ref) => (
  <div
    ref={ref}
    className={`relative h-4 w-full overflow-hidden rounded-full bg-secondary ${className || ''}`.trim()}
    {...props}
  >
    <div
      className="h-full bg-primary transition-all"
      style={{ width: `${value || 0}%` }}
    />
  </div>
));

Progress.displayName = "Progress";

Progress.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number.isRequired,
};

export { Progress };