import React from 'react';

import 'less/components/sidebar.less';


const File = ({ file, fileIndex, isActive, onClick }) => (
  <li className={isActive ? 'active' : ''} onClick={() => onClick(fileIndex)}>
    <i className="fa fa-fw fa-times" />
    <span className="filename">{file.name}</span>
    <span className="filepath">{file.path}</span>
  </li>
);

const Sidebar = ({ openedFiles, activeFileIndex, onClickFile }) => (
  <div className="sidebar">
    <div className="title">
      Open Files
    </div>
    <section className="open-files">
      <ul>
        {openedFiles.map((file, i) => (
          <File
            file={file}
            fileIndex={i}
            isActive={i === activeFileIndex}
            onClick={onClickFile}
            key={i} />
        ))}
      </ul>
    </section>
    <section className="buttons">
      <button>Open File</button>
    </section>
  </div>
);


export default Sidebar;
