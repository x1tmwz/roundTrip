import React from 'react';
import { v4 as uuid } from 'uuid';


const CustomList = (props) => {
    return (
        <div className={props.classNameContainer}>
            {props.title && <h3 className={props.classNameTitle}>{props.title}</h3>}
            {props.options.map((option) => {
                return (
                    <span key={uuid()} className={props.classNameOption}>{option}</span>
                );

            })}

        </div>
    );
}
export default CustomList;