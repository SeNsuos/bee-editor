import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import '../style/toolBar.scss'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);
const ToolBar = () => {
    const classes = useStyles();
    return(
        <div className='toolBar_contaner'>
           <div className={`${classes.root} btn_wrapper`}>
                <Button variant="contained" color="primary">保存</Button>
                <Button variant="contained" color="primary">导出</Button>
                <Button variant="contained" color="primary">生成二维码</Button>
                <Button variant="contained" color="primary">预览</Button>
            </div>
        </div>
    )
}

export default ToolBar;