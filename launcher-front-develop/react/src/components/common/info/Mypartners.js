import React, { useEffect } from "react";
import styled from "styled-components";
import { useImmer } from "use-immer";

import { color } from "styles/__utils";
import cx from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";

import { TextLine } from "components/common/textLabel";
import { PartnerListSearchForm } from "components/common/form";

function Mypartners(props) {
  const { initData, partnerList, onSubmit, handleClick } = props;

  const [values, setValues] = useImmer({
    isPartner: "1",
    selectCompany: "",
    setBaseAdd: false,
    myPartnerPage: false,
  });
  const { isPartner, myPartnerPage } = values;

  const classes = useStyles();
  const styleConf = {
    _color: "#777777"
  };
  const textConf = {
    myCode: "고유번호",
    company: "업체명",
    manager: "담당자",
    email: "이메일 주소",
    regionName: "지역",
    type: "타입",
    phone: "연락처",
    address: "주소"
  };

  const changeCont = e => {
    console.log("handle change");
    const eventValue = e.target.value;
    setValues(draft => {
      draft.isPartner = eventValue;
      draft.myPartnerPage = false;
    });
  };
  // const changeContButton = e => {
  //   console.log("handle change");
  //   setValues(draft => {
  //     draft.myPartnerPage = !values.myPartnerPage;
  //   });

  //   handleClick({ type: "getPartner", option: "my" })();
  // };

  const selectCompany = value => {
    setValues(draft => {
      draft.selectCompany = value;
    });
  };

  const handleChange = e => {
    setValues(draft => {
      draft.setBaseAdd = !values.setBaseAdd;
    });
  };

 const companyList =(
  <div className="listCont">
    <PartnerListSearchForm
      selectCompany={selectCompany}
      onSubmit={onSubmit}
      option="my"
      styleConf={{
        searchDivtype: "row",
        radioExist: false,
        buttonExist: false,
        tableHeihgt: 320
      }}
    />
    <div className="btnGnb">
      <Button
        variant="contained"
        className={cx(classes.btn, `blue`)}
        onClick={handleClick({
          type: "addPartner",
          option: "default",
          value: values.selectCompany.value
        })}
      >
        기본 업체로 등록
      </Button>
    </div>
  </div>
 );

 const companyAdd = (
    <>
    <div className="borderCont">
      <div className="contentTitle">
        <p>파트너 검색하기</p>
      </div>
      <PartnerListSearchForm
        selectCompany={selectCompany}
        onSubmit={onSubmit}
        styleConf={{
          searchDivtype: "row",
          radioExist: true,
          buttonExist: false,
          tableHeihgt: 360
        }}
      />
    </div>
    <div className="btnGnb">
      {/* <FormControlLabel
        control={
          <Checkbox
            value="addBaseCompany"
            color="primary"
            checked={values.setBaseAdd}
            onChange={handleChange}
          />
        }
        label="기본 업체로 등록하기"
      /> */}
      <Button
        variant="contained"
        className={cx(classes.btn, `blue`)}
        onClick={handleClick({
          type: "addPartner",
          // option: values.setBaseAdd ? "default" : "", //기본업체 등록 체크박스있을때
          option: "",
          value: values.selectCompany.value
        })}
      >
        추가하기
      </Button>
    </div>
  </>
 );


  return (
    <Styled.MyPageWrap>
      <Styled.SelectBox>

        <div className="radioBox">
          <div className="radioLabel">
            <label>파트너 등록</label>
          </div>
          <div className="radioGroup">
            <RadioGroup
              aria-label="position"
              name="position"
              value={isPartner}
              onChange={changeCont}
              row
            >
              <FormControlLabel
                value="1"
                control={<Radio color="default" size="small" />}
                label={
                  <span className="mypagePartner__input public text">
                    업체 목록
                  </span>
                }
                labelPlacement="end"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="default" size="small" />}
                label={
                  <span className="mypagePartner__input public text">
                    추가 등록하기
                  </span>
                }
                labelPlacement="end"
                onClick={handleClick({ type: "getPartner", option: "all" })}
              />
            </RadioGroup>
          </div>
        </div>
      </Styled.SelectBox>

      <div className="content">
        {isPartner === "1" ? (
            companyList
        ) : (
          companyAdd
        )}
      </div>
    </Styled.MyPageWrap>
  );
}

const Styled = {
  MyPageWrap: styled.div`
    padding: 0 30px;

    .content {
      padding-left: 10px;

      .listCont {
        margin-top: 25px;

        & .contentTitle{
          padding-bottom: 25px;
          border-bottom: 1px solid #E2E7EA;
        }
      }
      .borderCont {
        border: 1px solid #e2e7ea;
        border-radius: 5px;
        padding: 10px;
        padding-top: 0;
        margin-top: 10px;

        .contentTitle {
          margin-top: 10px;
          padding: 3px 15px;
          background-color: #f0f7fb;
        }
      }

      .contentTitle {
        width: 100%;
        padding: 0 9px;

        .titleItem {
          display: inline-block;
          text-align: center;
          &.titleLabel {
            margin-right: 30px;
          }

          &.titleCont {
            color: #777;
          }
        }
      }

      .btnGnb {
        position: absolute;
        right: 55px;
        bottom: 20px;
        text-align: right;
        margin-top: 14px;
      }
    }
  `,
  SelectBox: styled.div`
    position: relative;
    .radioBox {
      display: flex;
      flex-flow: row nowrap;
      padding: 5px;
      border-bottom: 2px solid #777;

      .radioLabel {
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
      }

      .radioGroup {
        margin-left: 30px;
      }
    }
  `,
  MypageListBox: styled.div`
    position: relative;
    margin-top: 25px;
    div + div {
      margin-top: 24px;
    }
  `
};

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  textField: {
    "&.fileInput": {
      flex: "4 1 auto",
      "& >div": {
        width: "100%"
      }
    },
    "&.emailInput": {
      flex: "9 1 auto"
    }
  },
  btn: {
    display: "inline-block",
    margin: "auto",
    border: `1px solid ${color.blue}`,
    boxShadow: "none",
    "&.bold": {
      fontWeight: "bold"
    },
    "&:hover": {
      border: `1px solid ${color.blue}`
    },
    "&.blue": {
      color: `white`,
      background: `${color.blue}`,
      "&:hover": {
        boxShadow: "none",
        background: `${color.blue_hover}`
      }
    },
    "&.white": {
      color: `black`,
      background: `${color.white}`,
      "&:hover": {
        boxShadow: "none",
        background: `${color.white_hover}`
      }
    },
    "&.list": {
      position: "absolute",
      right: "115px",
      top: "50%",
      transform: "translateY(-50%)"
    }
  },
  input: {
    height: 35
  },
  label: {
    fontSize: 14,
    top: `-17%`
  }
}));

export default Mypartners;
