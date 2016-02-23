import React from 'react';

import 'less/components/sidebar.less';


const File = ({ file, fileIndex, isActive, onClickFile, onClickRemove }) => (
  <li className={isActive ? 'active' : ''} onClick={() => onClickFile(fileIndex)}>
    <i className="fa fa-fw fa-times" onClick={event => {
      event.stopPropagation();
      onClickRemove(fileIndex);
    }} />
    <span className="filename">{file.name}{file.saved || ! file.path ? '' : ' *'}</span>
    <span className="filepath">{file.path}</span>
  </li>
);

const Sidebar = ({
  openedFiles,
  activeFileIndex,
  onClickFile,
  onClickRemove,
  onClickOpenFile,
}) => (
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
            onClickFile={onClickFile}
            onClickRemove={onClickRemove}
            key={i} />
        ))}
      </ul>
    </section>
    <section className="buttons">
      <button onClick={onClickOpenFile}>Open File</button>
    </section>
  </div>
);


export default Sidebar;
