import '../../App.css';
import { Children } from 'react';
 
function Title({children}) {
  return (
    <div className="RowList">
      {Children.map(children, child =>
        <h2 className="fruits">
          {child}
        </h2>
      )}
    </div>
  );
}

export default Title;
