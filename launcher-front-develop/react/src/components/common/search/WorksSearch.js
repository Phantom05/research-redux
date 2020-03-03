import React, { useEffect } from 'react';
import styled from 'styled-components';
import { font, color } from 'styles/__utils';
import CachedIcon from '@material-ui/icons/Cached';
import cx from 'classnames';
import { useImmer } from 'use-immer';
import { useSelector } from 'react-redux';
import _ from 'lodash';
// import { useDidUpdateEffect } from 'lib/utils';


function WorksSearch(props) {
  const { onSearch, onClick ,type} = props;
  const [values, setValues] = useImmer({
    search:{
      sort: '1',
      type: "",
      search: "",
      first:true,
      isLoad:false
    }
  });

  const { listing:listingReducer} = useSelector(state=>state);
  const curType = listingReducer.works.currentType;
  const isTypeSender = curType === 'sender';
  const isCompleteCard = listingReducer.works.currentCardStage === 5;

  const handleChange = config => {
    const { e, type } = config;
    const targetValue = e.target.value;
    if(type === 'sort' || type === 'type'){
      setValues(draft => {
        // "기공소 담당자"
        draft.search[type] = targetValue;
      });
    }
    if(type === 'search'){
      setValues(draft => {
        draft.search[type] = targetValue;
      });
    }
  }
  const handleKeyUp = config=>{
    const { e } = config;
    if(e.key === 'Enter'){
      onSearch && onSearch(values.search)  
    }
  }
  
  const handleSumbit = config =>{
    console.log(config,'submit');
    onSearch && onSearch(values.search)
  }


  
  const handleClick = config=>{
    console.log(config,'click');
    const {type} = config;
    onClick && onClick({type,value:values.search});
  }

  const searchValue = values.search;


  useEffect(() => {
    const defaultConfig = {
      sort: +searchValue.sort,
      search: searchValue.search,
      type: searchValue.type,
      first: true
    };
    
    if(!listingReducer.works.search.isLoad){
      onSearch && onSearch(defaultConfig);
    }
    
  }, []);


  // DEBUG:
  // useDidUpdateEffect(()=>{
    useEffect(()=>{
    console.log(listingReducer.works.search,'Search listingReducer');  

    if(listingReducer.works.search.isLoad){
      setValues(draft=>{
        draft.search = listingReducer.works.search;
      })
    }else{

    }
    
  },[listingReducer.works.search]);
  
  // console.log(listingReducer.works.search.search,'!!');
  // console.log(values.search);
  // console.log(searchValue.search);

  return (
    <Styled.WorksSearch>
      <div className="WorksSearch__row">
        <div className="WorksSearch__search_box">
          <select
            name="case"
            className="WorksSearch__select"
            value={searchValue.sort}
            onChange={(e) => handleChange({ type: 'sort', e })}>
            <option value="1">Patient Name</option>
            <option value="2">Sender Name</option>
            <option value="3">Receiver Name</option>
            <option value="4">Case Id</option>
          </select>
          <input 
            type="text" 
            className="WorksSearch__input" 
            value={searchValue.search}
            onKeyUp={(e) => handleKeyUp({ type: "search", e })} 
            onChange={(e) => handleChange({ type: "search", e })} 
          />
          <button className="WorksSearch__btn" onClick={handleSumbit}>Seach</button>
        </div>

        <div className="WorksSearch__sort_box">
          <select
            name="case"
            className="WorksSearch__select type"
            value={searchValue.type}
            onChange={(e) => handleChange({ type: 'type', e })}>
            <option value="">All</option>
            <option value="sender">Sender</option>
            <option value="receiver">Receiver</option>
          </select>
          <button 
            className={cx("WorksSearch__btn", "load")} 
            onClick={(e)=>handleClick({type:"load",e})}>LOAD</button>
            <span className={cx("WorkSearch__btn_box",{isShow:isTypeSender && !isCompleteCard})}>
              <button 
                className={cx("WorksSearch__btn", "delete")} 
                onClick={(e)=>handleClick({type:"delete",e})}>DELETE</button>
            </span>
          <button 
            className="WorksSearch__refresh_btn"
            onClick={(e)=>handleClick({type:"refresh",e})}
          ><CachedIcon style={{ fontSize: 30 }} /></button>
        </div>
      </div>

    </Styled.WorksSearch>
  );
}

{/* {isTypeSender &&
  <button 
  className={cx("WorksSearch__btn", "delete")} 
  onClick={(e)=>handleClick({type:"delete",e})}>DELETE</button>
} */}
const Styled = {
  WorksSearch: styled.div`
  .WorkSearch__btn_box{
    position:relative;
    top: 9px;
    display:inline-block;
    width:0;
    /* transition:.5s; */
    overflow:hidden;
    &.isShow{
      width:70px;
    }
  }
  .WorksSearch__row{
    position: relative;
  }

  .WorksSearch__search_box{
    display: inline-block;
    margin-bottom: 15px;
  }

  .WorksSearch__sort_box{
    position: absolute;
    top: -10px;
    right: 0;
    display: inline-block;
  }

  .WorksSearch__select,
  .WorksSearch__input {
    padding: 3px;
    border: 1px solid ${color.gray_font};
    border-radius: 2px;
    ${font(14, color.gray_font)};
    margin-right: 5px;
  }

  .WorksSearch__input {
    padding: 4px;
  }
  .WorksSearch__btn {
    padding: 5px 10px;
    background: ${color.blue};
    ${font(14, color.white)};
    border-radius: 2px;
    margin-right: 5px;
    border: none;
    cursor: pointer;
    transition: all .2s;

    &:hover{
      background: ${color.blue_hover};
    }
    &.isShow{
      visibility:visible;
    }
  }

  .WorksSearch__refresh_btn{
    position: relative;
    top: 8px;
    border: none;
    background: none;
    color: ${color.blue};
    cursor: pointer;
    transition: all .2s;

    &:hover{
      color: ${color.blue_hover};
    }
  }
  
  `
}

export default WorksSearch;