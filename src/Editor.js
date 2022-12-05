import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

export default function Editor(props) {
  const { language, displayName, onChange, value } = props;

  const [open, setOpen] = useState(true);

  function handlechange(editor, data, value) {
    onChange(value);
  }
  return (
    <div className={`editor-container ${open ? "" : "collapsed"} `}>
      <div className="editor-title">
        {displayName}
        <button
          onClick={() => setOpen((prevOpen) => !prevOpen)}
          type="button"
          className="expand-collapse-btn"
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handlechange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          linewrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
        }}
      />
    </div>
  );
}
