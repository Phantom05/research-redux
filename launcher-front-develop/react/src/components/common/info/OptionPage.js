import React, {useEffect} from 'react';
import { useImmer } from 'use-immer';

import styled from 'styled-components';
import { buttonBlue } from 'styles/__utils';

// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


function OptionPage(props) {
  const {
    workSpace
  } = props;
  const [values, setValues] = useImmer({
    language: "1",
    workSpaceChange: false,
  });
  const {
    language,
  } = values;

  const {
    handleClick
  } = props;
  const typeList = [
    {
      id: "1",
      title: 'Korea'
    },
    {
      id: "2",
      title: 'English'
    }
  ];
  
  const handleChange = e => {
    const event = e.target.value;
    setValues(draft => {
      draft.workSpace = event;
    });
  } 

  const changeWorkSpace = () =>{
    setValues(draft => {
      draft.workSpaceChange = !draft.workSpaceChange;
    });
  }

  const onClick = () => {
    handleClick({type: 'updateWorkSpace'})(workSpace);

    changeWorkSpace();
  }

  const OptionItem = Array.isArray(typeList) && typeList.map((i, index) => {
    return <option key={index} value={i.id} >{i.title}</option>
  });

  const changeCont = (
    values.workSpaceChange?
    <div className="cont">
      <input
      className="path"
      value={workSpace}
      placeholder="지정할 workspace 경로를 넣으세요."
      onChange={handleChange}
      />
    </div>
    :
    <div className="cont">
      <div className="path">
      {workSpace}
      </div>
    </div>
  )

  return (
    <Styled.OptionWrap>
      <div className="optionRow">
        <span className="label">
          WorksSpace
        </span>
        {
          changeCont
        }
        
          <button
            className="folderBtn partner__btn"
            onClick={handleClick({type: 'workspaceModal'})}
            // 모달이 아닌 input 박스 변경되는 디자인일 경우
            // onClick={
            //   values.workSpaceChange?
            //   onClick
            //   :
            //   changeWorkSpace
            // }
          >
              Change
          </button>
      </div>
      {/* <div className="optionRow">
        <span className="label">
          Language
        </span>
        <div className="cont">
          <select 
            id="language" 
            value={language}
            onChange={handleClick({type: 'select'})}
          >
            {
              OptionItem
            }
          </select>
        </div>
        <Button
          onClick={handleClick({ type: "click", option: 'ok' })}
          variant="contained"
          className="partner__btn"
          component="span">OK</Button>
      </div> */}
    </Styled.OptionWrap>
  );
}

const useStyles = makeStyles(theme => ({
  formControl: {
    width: `100%`,
    
  },
}));

const Styled = {
  OptionWrap : styled.div`
    padding: 16px;
  
    & .optionRow{
      height: 26px;

      & .label{
        display: inline-block;
        width: 90px;
      }

      & .cont{
        display: inline-block;
        margin-left: 30px;
        
        input.path{
          
        }

        & select{
          padding: 6px 62px 6px 10px;
          font-size: 14px;

          & option{
            height: 100%;
          }
        }
      }

      & .folderBtn{
        display: inline-block;
        text-align: center;
        padding: 0;
        width: 80px;
        cursor: pointer;
      }
    }

    .optionRow + .optionRow{
      margin-top: 20px;
    }

    .partner__btn{
      ${buttonBlue};
      box-shadow:none;
      margin-left: 60px;
      height: 100%;
      width: 80px;
      &:hover{
        box-shadow:none;
      }
    }

  `,
}

export default OptionPage;