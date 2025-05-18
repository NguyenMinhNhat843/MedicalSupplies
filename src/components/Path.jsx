import { Link } from "react-router-dom";

const Path = ({ paths }) => {
  return (
    <div className="breadcrumb mb-4">
      {paths.map((path, index) => (
        <span key={index}>
          <Link to={path.link} className="text-blue-600 hover:underline">
            {path.label}
          </Link>
          {index < paths.length - 1 && " > "}
        </span>
      ))}
    </div>
  );
};

export default Path;
