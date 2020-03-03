import React from 'react';
import styled from 'styled-components';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const editorConfiguration = {
  toolbar: [],
  width: '100%',
  border:0,
};

function PlainEditor(props) {
  const { content, onChange,onBlur,disabled, height } = props;
  console.log(content,'content PlainEditor');
  return (
    <Styled.PlainEditor height={height}>
      <CKEditor
        className="PlainEditor"
        disabled={disabled}
        editor={ClassicEditor}
        config={editorConfiguration}
        data={content}

        onChange={(event, editor) => {
          const data = editor.getData();
          onChange && onChange({ event, editor, data })
        }}
        onBlur={(event, editor) => {
          const data = editor.getData();
          onBlur && onBlur({ event, editor, data })
          // console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          // console.log('Focus.', editor);
        }}
      />
    </Styled.PlainEditor>
  );
}

export default PlainEditor;


const Styled = {
  PlainEditor: styled.div`
      width: 100%;
    .PlainEditor{
      border:0;
      height:300px;
      border:1px solid red
    }
    .ck.ck-editor__main>.ck-editor__editable{
      border:0;
    }
    .ck.ck-editor{
      width:100%;
    }
    .ck.ck-editor__top.ck-reset_all{
      display:none;
    }
    .ck.ck-content.ck-editor__editable.ck-editor__editable_inline,.ck-focused{
      border:0 !important;
      box-shadow:none;
      ${prop=> prop.height && `height:${prop.height}px`};
      border:1px solid red;
    }
  `
}

