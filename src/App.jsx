import { useState } from 'react';

const App = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      Current Value {value}
      <button onClick={() => setValue(value + 1)}>Add</button>
    </div>
  );
};

export default App;
