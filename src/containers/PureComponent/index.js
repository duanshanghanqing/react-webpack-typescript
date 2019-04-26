import React from 'react';
import { renderRoutes } from 'react-router-config';

export default ({ route }) => (
  <React.Fragment>
    {renderRoutes(route.routes)}
  </React.Fragment>
);
