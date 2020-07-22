import React from 'react';
import { Radio } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import style from '../../style/materialUI';

const useStyles = makeStyles({
    root: style().radioButton,
    checked:style().checked
});


const CustomRadioButton = (props) => {
    const classes = useStyles();

    const clickHandler = (e) => {
        props.setOption(props.value)
    }

    return (
        <div className="flexRow" onClick={clickHandler}>
            <div className="flexRow">
            <Radio
                checked={props.checked}
                size="medium"
                classes={{ root: classes.root, checked: classes.checked }}
            />
            <label>{props.label}</label>
            </div>
            <span>819$</span>
        </div>
    );

}
export default CustomRadioButton;