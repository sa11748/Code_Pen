import React  , { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { xml } from '@codemirror/lang-xml';
import { css } from '@codemirror/lang-css';
import { oneDark } from '@codemirror/theme-one-dark';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCompressAlt , faExpandAlt } from '@fortawesome/free-solid-svg-icons';

export default  function Editor(props) {
  const { language, displayName,value,onChange} = props;

  const [open , setOpen] = useState(true);

  const handleEditorChange = (value , viewUpdate) => {
    onChange(value);
  };

  return (
    <div className={ `editor-container ${open ? '' : 'collapsed'}`}>
      <div className= 'editor-title'>
        {displayName}
        <button
        type = "button"
        className='expand-collapsed-btn'
        onClick={() => setOpen(prevOpen => !prevOpen)}>
          <FontAwesomeIcon icon = {open ? faCompressAlt : faExpandAlt} />
          </button>
      </div>
      <CodeMirror
        value={value}
        height="200px"
        theme={oneDark}
        extensions={[
          language === 'javascript' && javascript(),
          language === 'xml' && xml(),
          language === 'css' && css()
        ].filter(Boolean)}
        onChange={handleEditorChange}
        options = {{
          lineNumbers : true
        }}
      />
    </div>
  );
}
