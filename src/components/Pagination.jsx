import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="flex justify-center items-center py-4">
      {/* Nút Previous */}
      <button
        className="flex justify-center items-center h-10 w-10 bg-slate-200 rounded-full cursor-pointer active:bg-slate-300 disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>

      <span className="px-4">
        {currentPage} / {totalPages}
      </span>

      {/* Nút Next */}
      <button
        className="flex justify-center items-center h-10 w-10 bg-slate-200 rounded-full cursor-pointer active:bg-slate-300 disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
