import React from 'react';

import 'less/components/sidebar.less';


const File = ({ file, onClick }) => (
  <li className={file.active ? 'active' : ''} onClick={() => onClick(file)}>
    <i className="fa fa-fw fa-times" />
    <span className="filename">{file.name}</span>
    <span className="filepath">{file.path}</span>
  </li>
);

const Sidebar = ({ openedFiles, onClickFile }) => (
  <div className="sidebar">
    <div className="title">
      Open Files
    </div>
    <section className="open-files">
      <ul>
        {openedFiles.map(file => (
          <File file={file} onClick={onClickFile} />
        ))}
      </ul>
    </section>
    <section className="buttons">
      <button>Open File</button>
    </section>
  </div>
);


export default Sidebar;
