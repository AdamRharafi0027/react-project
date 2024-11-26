
import './container.css'
const Container= props => {
  return (
        <div className="cont">
          {props.children} 
        </div>
  );
};

export default Container;