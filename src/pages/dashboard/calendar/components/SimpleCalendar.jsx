import PropTypes from "prop-types";
import { format } from "date-fns";
import { Icon } from "@iconify/react";

const SimpleCalendar = ({ selected, onSelect }) => {
  const daysInMonth = new Date(
    selected.getFullYear(),
    selected.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    selected.getFullYear(),
    selected.getMonth(),
    1
  ).getDay();

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const isSelected = day === selected.getDate();
    const isToday =
      day === new Date().getDate() &&
      selected.getMonth() === new Date().getMonth() &&
      selected.getFullYear() === new Date().getFullYear();

    days.push(
      <button
        key={day}
        className={`h-10 w-10 rounded-full flex items-center justify-center text-sm ${
          isSelected
            ? "bg-blue-500 text-white"
            : isToday
            ? "border border-blue-500 text-blue-500"
            : "hover:bg-gray-100"
        }`}
        onClick={() =>
          onSelect(new Date(selected.getFullYear(), selected.getMonth(), day))
        }
      >
        {day}
      </button>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="flex justify-between items-center p-4 border-b">
        <button
          className="p-1 hover:bg-gray-100 rounded-full"
          onClick={() =>
            onSelect(
              new Date(selected.getFullYear(), selected.getMonth() - 1, 1)
            )
          }
        >
          <Icon icon="tabler:chevron-left" className="h-5 w-5" />
        </button>
        <h3 className="font-medium">{format(selected, "MMMM yyyy")}</h3>
        <button
          className="p-1 hover:bg-gray-100 rounded-full"
          onClick={() =>
            onSelect(
              new Date(selected.getFullYear(), selected.getMonth() + 1, 1)
            )
          }
        >
          <Icon icon="tabler:chevron-right" className="h-5 w-5" />
        </button>
      </div>
      <div className="p-2">
        <div className="grid grid-cols-7 mb-2">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
            <div
              key={day}
              className="h-8 flex items-center justify-center text-gray-500 text-xs"
            >
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">{days}</div>
      </div>
    </div>
  );
};

SimpleCalendar.propTypes = {
  selected: PropTypes.instanceOf(Date).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default SimpleCalendar;