import React, {useState, useEffect} from 'react';
import '../style/settings.scss'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {AppBar,Tabs,Tab, Typography, Button } from '@material-ui/core';
import {
  Box, 
  TextField,
  Accordion, 
  AccordionSummary,
  AccordionDetails,
  FormControl,
  InputLabel,
  NativeSelect
 } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styleConfigs from './styleConfigs/index';
import map from 'lodash/map'
import { HuePicker } from 'react-color'

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: any) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));
  const useStylesBtn = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

  function randerColItem(config: any, field: string) {
    const {
			label,
			// tip = '',
			// labelPlace = 'left',
			// span = 6,
			// type,
			// labelSpan = 4,
			// valueSpan = 20,
			props,
    } = config
    // const [enumData, setEnumDate] = useState([]);


    return(
      <div>
        <form noValidate autoComplete="off" key={field}>   
          {
            !props.enumData && <TextField id="standard-basic" label={label} />
          } 
          {
            props.enumData && props.enumData.length !== 0 && 
            <FormControl key={label} style={{width: '100%'}}>
              <InputLabel htmlFor="demo-customized-select-native">{label}</InputLabel>
              <NativeSelect
                id="demo-customized-select-native"
                value={label}
              >
                <option aria-label="None" value="" />
                {
                  props.enumData && props.enumData.map(($item: any) => {
                    return (
                      <option key={$item.key || $item} value={$item.key || $item}>{$item.label || $item}</option>
                    )
                  })
                }
              </NativeSelect>
            </FormControl>
          }
        </form>
      </div>
    )
  }
  function renderFormItem(styles: any, key: string) {
    return(
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{key}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {map(styles,randerColItem)}
            </Typography>
          </AccordionDetails>
        </Accordion>
    )
  }

  interface settingsProps {
    setParent: Function
  }
const Settings: React.FC<settingsProps> = (props) => {
    const {setParent} = props;
    const classes = useStyles();
    const classesBtn = useStylesBtn()
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
    const [bgColor, setBgColor] = useState('#ffffff')
    useEffect(() => {
      setParent(bgColor);
    })
    return (
        <div className='settings_container'>
            <h3>页面配置</h3>
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="页面基本配置" {...a11yProps(0)} />
                        <Tab label="页面内容配置" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                  <div className='flex'>
                    <p className="title">选择背景颜色：</p>
                    <HuePicker
                        color={bgColor}
                        onChange={(e) => {
                          setBgColor(e.hex)
                        }}
                        className='toLeft'
                    />
                  </div>
                  <div className='flex'>
                    <p className="title">修改标题：</p>
                    <TextField className='toLeft' id="standard-basic" />
                  </div>
                  <div className={'flex' && classesBtn.root}>
                    <Button variant="contained" color="primary">
                        模块上移
                    </Button>
                    <Button variant="contained" color="primary">
                        模块下移
                    </Button>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  {map(styleConfigs,renderFormItem)}
                </TabPanel>
            </div>
        </div>
    )
}
export default Settings;