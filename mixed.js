const vacation = {
    _destination: {
        brazil: ['manaus', 'rio de janeiro', 'sao paulo'],
        uea: ['california', 'new york', 'colorado'],
    },
    _seasons: ['autumn', 'fall', 'summer', 'winter'],

    getTrip(){
        const country = Math.floor(Math.random()*Object.keys(this._destination).length);
        console.log(country);
        console.log(this._destination.uea);
        console.log(this._destination[0]);
        const city = Math.floor(Math.random()*this._destination[country].length);
        return `${this._destination[country][city]} - ${this._destination[country]}` ;
    },
    get seasons(){
        if(this._seasons){
            return this._seasons;
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

const getVacation = (destiny, season) =>{
    return `You should trip to: ${destiny} at next ${season}.`
}

console.log(getVacation(getDestiny(vacation),getSeason(vacation)));