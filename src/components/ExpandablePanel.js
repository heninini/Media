import { GoChevronLeft, GoChevronDown } from "react-icons/go";
import { useState } from "react";

function ExpandablePanel({ header, children }) {
  const [expanded, setexpanded] = useState(false);
  const handleClick = () => {
    setexpanded(!expanded);
  };
  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center">
        <div className="flex flex-row item-center justify-between">
          <div>{header}</div>
        </div>
        <div className="cursor-pointer" onClick={handleClick}>
          {" "}
          {expanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {expanded && <div className="p-2 border-t">{children}</div>}
    </div>
  );
}
export default ExpandablePanel;
