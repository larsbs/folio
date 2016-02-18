import React from 'react';

import 'less/components/sidebar.less';


const Sidebar = () => (
  <div className="sidebar">
    <div className="title">
      Open Files
    </div>
    <section className="open-files">
      <ul>
        <li className="active">
          LICENSE <i className="fa fa-fw fa-times" />
        </li>
        <li>
          README.md <i className="fa fa-fw fa-times" />
        </li>
      </ul>
    </section>
    <section className="buttons">
      <button>Open File</button>
    </section>
  </div>
);


export default Sidebar;
