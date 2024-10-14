import PropTypes from 'prop-types';

function Sidebutton({ Icon, Title, isActive, onClick }) {
  return (
    <button
      className={`flex items-center gap-2 p-2 rounded-full ${
        isActive ? "bg-Black text-White" : "bg-White text-Black"
      }`}
      onClick={onClick}
    >
      <Icon className="text-xl" />
      <span>{Title}</span>
    </button>
  );
}

Sidebutton.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  Title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Sidebutton;
