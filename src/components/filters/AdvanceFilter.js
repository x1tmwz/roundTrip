import React, { useEffect, useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import language from '../../language/hebrew.json'
import RatingCheckBox from './AdvanceFilter/RatingCheckBox';
import GusetBaseCheckBox from './AdvanceFilter/GusetBaseCheckBox'
import PriceRange from './AdvanceFilter/PriceRange';
import TextFilter from './AdvanceFilter/TextFilter';
import { Collapse } from 'react-collapse';



const advanceFilterComponent = () => (
    <>
        <div className="white-border-bottom">
            <p>{language.advanceFilter.filteringResults}</p>
        </div>
        <div className="white-border-bottom">
            <RatingCheckBox />
        </div>
        <div className="white-border-bottom">
            <PriceRange />
        </div>
        <div className="white-border-bottom">
            <GusetBaseCheckBox />
        </div>
        <TextFilter />
    </>
);

const AdvanceFilter = (props) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 760);
    const [isOpen, setIsOpen] = useState(false);

    const toggleAdvanceFilter = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const handleResize =()=> {
            if (window.innerWidth <= 760) {
                setIsMobile(true)
            } else
                setIsMobile(false)

        }
        window.addEventListener('resize', handleResize);
        return ()=>{
            window.removeEventListener('resize',handleResize);
        }
    }, [])


    return (
        <div className="advanceFilter-container">
            {isMobile && <div onClick={toggleAdvanceFilter}>{language.advanceFilter.advanceFilter} {isOpen?<ExpandLessIcon/>:<ExpandMoreIcon />}</div>}
            {isMobile ? <Collapse isOpened={isOpen}>{advanceFilterComponent()}</Collapse> : advanceFilterComponent()}

        </div>




    );
}


export default AdvanceFilter;