import PropTypes from "prop-types";
import { FaStopwatch } from "react-icons/fa";

function Task({ title, description, category, timeLog, categoryColor }) {
  return (
    <div className="h-1/3 bg-Gray rounded-2xl m-4 pt-3 pb-2 pl-5 pr-0 flex flex-col">
      <div className="flex justify-between items-center">
        <p className="text-Black font-medium">{title}</p>
        <p className={`${categoryColor} rounded-l-2xl p-2 text-xs`}>{category}</p>
      </div>
      <div className="border-b-2 border-gray-300 text-sm pb-3 p-2 w-full h-1/2 flex flex-col">
        <p className="w-full h-full overflow-auto break-words text-sm">
          {description}
        </p>
      </div>
      <div className="flex items-center gap-2 mt-3 bg-White p-2 rounded-2xl mb-3" style={{width:"45%"}}>
        <FaStopwatch className="text-xl" />
        <p className="text-sm text-Black">{timeLog}</p>
      </div>
    </div>
  );
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  timeLog: PropTypes.string.isRequired,
  categoryColor: PropTypes.string.isRequired,
};

export default Task;