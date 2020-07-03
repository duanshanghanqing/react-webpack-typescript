import React from 'react';
import { renderRoutes } from 'react-router-config';

export default ({ route, match }) => {
  console.log(match);
  return (
    <React.Fragment>
      {renderRoutes(route.routes)}
    </React.Fragment>
  );
};

// export default () => {
//   return (<div>root</div>);
// };
