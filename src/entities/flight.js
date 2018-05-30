class Flight {
    constructor(id, altitude, flightNumber = "(hidden)", bound, manufacturer, model, origin, destination, companyName){
    this.id = id;
    this.altitude = altitude;
    this.flightNumber = flightNumber;
    this.bound = (bound > 180) ? "W" : "E";
    this.manufacturer = manufacturer;
    this.model = model;
    this.origin = origin;
    this.destination = destination;
    this.companyName = companyName;
    this.logo = (companyName) ? `https://logo.clearbit.com/${companyName.split(" ").join("").toLowerCase()}.com` : `https://logo.clearbit.com/airplanemanager.com`;
    }
}

export default Flight;