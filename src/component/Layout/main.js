import React, {Fragment} from 'react';
import Header from '../Header/index.js';
import Sidebar from '../Sidebar/index.js';

const Main = props => {
  return (
    <Fragment>
      <Header />
      <div className="cotainer-fluid">
        <div className="row">
          <Sidebar />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              {props.children}
            </div>
          </main>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
