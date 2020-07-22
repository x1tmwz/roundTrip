const nightsCalculation=(endDate,startDate)=>{
    return new Date(endDate).getDate()-new Date(startDate).getDate() -1
}
export default nightsCalculation;