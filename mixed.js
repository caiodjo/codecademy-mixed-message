const vacation = {
    _destination: {
        Brazil: ['Manaus', 'Rio de Janeiro', 'Sao Paulo'],
        US: ['San Diego', 'New York', 'Pheonix'],
        'United Kingdom': ['Londres', 'Leicester', 'Manchester']
    },
    _seasons: ['autumn', 'spring', 'summer', 'winter'],
    _airlines:['Fly Emirades', 'Codecademy Air', 'Full Stack Emirades'],

    getTrip(){
        const countriesArr = Object.keys(this._destination);
        const citiesArr = Object.values(this._destination);
        const countryIndex = Math.floor(Math.random()*countriesArr.length);
        const cityIndex = Math.floor(Math.random()*citiesArr[countryIndex].length);
        return `${citiesArr[countryIndex][cityIndex]} - ${countriesArr[countryIndex]}` ;
    },
    get seasons(){
        if(this._seasons){
            return this._seasons;
        }
    },
    get airlines(){
        if(this._airlines){
            return this._airlines;
        };
    },
}

const getDestiny = (obj) =>{
    const destiny = obj.getTrip();
    return destiny;
}
const getSeason = (obj) =>{
    const season = obj.seasons[Math.floor(Math.random()*obj.seasons.length)];
    return season;
}
const getAirline = (obj) =>{
    const airline = obj.airlines[Math.floor(Math.random()*obj.airlines.length)]
    return airline
}

const getVacation = (destiny, season, comp) =>{
    return `You should trip to: ${destiny} at next ${season}, go talk to ${comp}`
}

console.log(getVacation(getDestiny(vacation),getSeason(vacation), getAirline(vacation)));