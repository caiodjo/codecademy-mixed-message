const vacation = {
    _destination: {
        Brazil: ['Manaus', 'Rio de Janeiro', 'Sao Paulo'],
        UEA: ['California', 'New York', 'Colorado'],
    },
    _seasons: ['autumn', 'spring', 'summer', 'winter'],
    _companies:['Fly Emirades', 'Codecademy Air', 'Full Stack Emirades'],

    getTrip(){
        const countries = Object.keys(this._destination);
        const cities = Object.values(this._destination);
        const country = Math.floor(Math.random()*countries.length);
        const city = Math.floor(Math.random()*cities[country].length);
        return `${cities[country][city]} - ${countries[country]}` ;
    },
    get seasons(){
        if(this._seasons){
            return this._seasons;
        }
    },
    get companies(){
        if(this._companies){
            return this._companies;
        }
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
const getCompany = (obj) =>{
    const company = obj.companies[Math.floor(Math.random()*obj.companies.length)]
    return company
}

const getVacation = (destiny, season, comp) =>{
    return `You should trip to: ${destiny} at next ${season}, go talk to ${comp}`
}

console.log(getVacation(getDestiny(vacation),getSeason(vacation), getCompany(vacation)));