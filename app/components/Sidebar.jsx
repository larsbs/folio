import React from 'react';

import 'less/components/sidebar.less';


const Sidebar = ({ openedFiles }) => (
  <div className="sidebar">
    <div className="title">
      Open Files
    </div>
    <section className="open-files">
      <ul>
        {openedFiles.map(file => (
          <li className="active">
            {file} <i className="fa fa-fw fa-times" />
          </li>
        ))}
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
