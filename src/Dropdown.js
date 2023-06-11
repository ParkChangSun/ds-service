import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import korLabel from "./korlabel";

const Dropdown = ({ label, formData, setFormData, elements }) => {
  const [display, setDislpay] = useState(label);

  return (
    <div className="flex flex-col w-1/4">
      <p className="text-l">{korLabel[label]}</p>
      <button className="group relative w-full border-2 border-solid border-blue-500 flex justify-between items-center rounded">
        <p className="px-4">{display}</p>
        <span className="p-2">
          <FontAwesomeIcon icon={faCaretDown} />
        </span>
        <div className="group-focus:block hidden absolute z-50 text-left top-full min-w-full w-max mt-1 bg-white">
          <ul className="text-left border rounded">
            {Object.entries(elements).map(([cat, val]) => (
              <li
                key={cat}
                onClick={() => {
                  setFormData({ ...formData, [label]: val });
                  setDislpay(cat);
                }}
                className="px-4 py-1 hover:bg-gray-300 border-b"
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>
      </button>
    </div>
  );
};

export default Dropdown;
