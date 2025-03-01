import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import categorys from "../data/categorys";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Category = () => {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        {categorys.map((category) => (
          <div key={category.id} className="flex justify-between items-center">
            <div className="flex justify-between items-center text-normal cursor-pointer text-header-text py-4">
              <FontAwesomeIcon icon={category.icon} className="pe-2" />
              <h2 className="pe-4">{category.name}</h2>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
