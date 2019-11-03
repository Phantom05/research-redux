import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styled from 'styled-components';

const Styled ={
  Editor:styled.div`
    .editorClassName{
      border:1px solid #ececec;
      min-height:200px;
      cursor:text
    }
  `
}

class PlainWriteTemplate extends Component {
  render() {
    const { handleClickWriteBtn } = this.props;
    return (
      <div>
        <button onClick={() => handleClickWriteBtn('view')}>뒤로가기</button> <br />
        <Styled.Editor>
          <Editor
            // editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
          // onEditorStateChange={this.onEditorStateChange}
          />
        </Styled.Editor>
      </div>
    );
  }
}

export default PlainWriteTemplate;