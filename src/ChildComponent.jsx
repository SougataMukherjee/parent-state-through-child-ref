import { useImperativeHandle, forwardRef, useRef } from "react";
import PropTypes from "prop-types";
const ChildComponent = forwardRef((props, ref) => {
  const handleChangeParentBackgroundColor = () => {
    props.changeParentBackgroundColor("lightblue");
  };

  const childRef = useRef();
  const doSomethingInChild = () => {
    if (childRef.current) {
      childRef.current.style.backgroundColor = "white";
    }
  };

  useImperativeHandle(ref, () => ({
    doSomethingInChild: () => doSomethingInChild(),
  }));

  return (
    <div ref={childRef}>
      <h2>Child Component</h2>
      <button onClick={handleChangeParentBackgroundColor}>Child Button</button>
    </div>
  );
});

ChildComponent.displayName = "ChildComponent";
ChildComponent.propTypes = {
  changeParentBackgroundColor: PropTypes.func.isRequired,
};

export default ChildComponent;
