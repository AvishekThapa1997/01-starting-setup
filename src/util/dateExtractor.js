const getFullDate  = (date) => {
    const month = getMonth(date);
    const year = getYear(date);
    const day = getDay(date)
    return {
        month : month,
        year : year,
        day : day
    }
}
const getMonth = (date) => date.toLocaleString("en-US", { month: "long" });
const getYear = (date) => date.getFullYear();
const getDay = (date) => date.toLocaleString("en-US", { day: "2-digit" });
export default getFullDate;
export {getMonth,getDay,getYear}