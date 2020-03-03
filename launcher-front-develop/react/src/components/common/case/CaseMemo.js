import React from 'react';
import styled from 'styled-components';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const editorConfiguration = {
  toolbar: [],
  width: '100%'
};

function CaseMemo(props) {
  const { content, onChange,onBlur,disabled } = props;
  console.log('CaseMemo : ',content);
  return (
    <Styled.CaseMemo>
      <CKEditor
        className="hello"
        disabled={disabled}
        editor={ClassicEditor}
        config={editorConfiguration}
        // data={`${content}`}
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
    </Styled.CaseMemo>
  );
}

export default CaseMemo;


const Styled = {
  CaseMemo: styled.div`
  .hello{
      background:black;
  }
      width: 100%;
    .ck.ck-editor{
      width:100%;
    }
    .ck.ck-editor__top.ck-reset_all{
      display:none;
    }
  `
}

