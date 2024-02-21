import { LoaderUser, Menu } from 'components';
import './App.scss';
import { useState } from 'react';

const componentsMap = {
  menu: <Menu />,
  loader: <LoaderUser />,
};

const App = () => {
  const [currentComponent, setCurrentComponent] = useState(null);

  return (
    <div className="app">
      <ul className="app__components-list">
        {Object.keys(componentsMap).map((item) => (
          <div
            key={item}
            onClick={() => setCurrentComponent(item)}
            className="app__component"
          >
            {item}
          </div>
        ))}
      </ul>

      {componentsMap[currentComponent]}
    </div>
  );
};

export default App;
