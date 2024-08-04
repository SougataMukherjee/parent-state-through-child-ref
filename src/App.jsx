import { useRef } from "react";
import ChildComponent from "./ChildComponent";
const ParentComponent = () => {
  const parentRef = useRef();
  const childRef = useRef();
  const changeParentBackgroundColor = (color) => {
    parentRef.current.style.backgroundColor = color;
  };
  const handleButtonClick = () => {
    if (childRef.current) {
      childRef.current.doSomethingInChild();
    }
  };
  return (
    <div ref={parentRef}>
      <h1>Parent Component</h1>
      <button onClick={handleButtonClick}>Parent Button</button>
      <ChildComponent
        changeParentBackgroundColor={changeParentBackgroundColor}
        ref={childRef}
      />
    </div>
  );
};
export default ParentComponent;
