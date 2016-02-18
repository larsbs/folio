import React from 'react';

import 'less/components/sidebar.less';


const File = ({ file }) => (
  <li className={file.active ? 'active' : ''}>
    <i className="fa fa-fw fa-times" />
    <span className="filename">{file.name}</span>
    <span className="filepath">{file.path}</span>
  </li>
);

const Sidebar = ({ openedFiles }) => (
  <div className="sidebar">
    <div className="title">
      Open Files
    </div>
    <section className="open-files">
      <ul>
        {openedFiles.map(file => (
          <File file={file} />
        ))}
      </ul>
    </section>
    <section className="buttons">
      <button>Open File</button>
    </section>
  </div>
);


export default Sidebar;
