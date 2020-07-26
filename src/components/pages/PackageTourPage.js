import React, { useEffect } from "react";
import { connect } from "react-redux"
import { setAds } from '../../actions/ad';
import language from '../../language/hebrew.json';
import filterSelector from '../../selectors/filter';
import AdList from '../ads/AdList';
import Filter from '../filters/Filter';
import AdvanceFilter from '../filters/AdvanceFilter';
import creatAds from '../../data/ads';


const PackageTourPage = ({ filterAds, startSetAds }) => {
    useEffect(() => {
        async function fetchData() {
            const ads = await creatAds();
            startSetAds(ads);
        }
        fetchData();
    }, [startSetAds])


    return (
        <div className="content-container">
            <AdvanceFilter />
            <div>
                <Filter />
                <p className="lightRoyalBlueText boldText text-l mr-m">{language.searchResults} {filterAds.length}</p>
                <AdList ads={filterAds} />
            </div>
        </div>
    );
}
const mapStateToProps = (state) => ({
    filterAds: filterSelector(state.ads, state.filter, state.advanceFilter),
})
const mapDispatchToProps = (dispatch) => ({
    startSetAds: (ads) => dispatch(setAds(ads))
})

export default connect(mapStateToProps, mapDispatchToProps)(PackageTourPage);