import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import {FullScreenLoading} from 'components/base/loading';
import {MypageInfo, Mypartners} from 'components/common/info';
import {OptionContainer} from 'containers/mypage';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,

    '& .MuiTabs-indicator': {
      display: 'none'
    }
  },
  tabbar: {
    backgroundColor: 'white',
    color: '#777777',
    boxShadow: 'none',
    width: '480px',
    transform: 'translateY(1px)'
  },
  tabitem: {
    border: '1px solid #E2E7EA',
    borderRadius: '10px 10px 0 0',
    fontWeight: 'bold',
    '&.Mui-selected': {
      borderBottom: 'none',
      color: '#54ACDF',
    }
  },
  tabpanel: {
    position: 'relative',
    border: '1px solid #E2E7EA',
    borderRadius: '0 10px 0 0',
    backgroundColor: theme.palette.background.paper,
    boxShadow: '2px 2px 5px rgba(36, 53, 51, 0.2)',
    height: '650px',
  }
}));

export default function TabBar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const {
    onChange,
    initData,
    pending,
    countryData,
    cityData,
    onSubmit,
    partnerList,
    handleClick,
    userCode,
    openModal
  } = props;
  // tab change func
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if(newValue){
      handleClick({type: 'viewModify', view: 'false'})();
    }
  };

  const loadingStyleConf = {
    position: 'absolute',
    backgroundColor: 'white'
  }


  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.tabbar}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab className={classes.tabitem} label="Information" {...a11yProps(0)} />
          <Tab className={classes.tabitem} label="Partners" {...a11yProps(1)} />
          <Tab className={classes.tabitem} label="Option" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel className={classes.tabpanel} value={value} index={0}>
        {pending.getInfoResult && <FullScreenLoading styleConf={loadingStyleConf} />}
        <MypageInfo
         initData={initData.myinfo}
         viewModify={initData.viewModify}
         countryData={countryData}
         cityData={cityData}
         onChange={onChange}
         userCode={userCode}
         handleClick={handleClick}
         openModal={openModal}
         />
      </TabPanel>
      <TabPanel className={classes.tabpanel} value={value} index={1}>
        {pending.getPartnerResult && <FullScreenLoading styleConf={loadingStyleConf} />}
        <Mypartners
          initData={initData.infoPartners}
          onSubmit={onSubmit}
          partnerList={partnerList}
          handleClick={handleClick}
        />
      </TabPanel>
      <TabPanel className={classes.tabpanel} value={value} index={2}>
        <OptionContainer 
          handleClick={handleClick}
        />
      </TabPanel>
    </div>
  );
}
