class Flight {
    constructor(id, altitude, flightNumber, bound, manufacturer, model, origin, destination, logo){
    this.id = id;
    this.altitude = altitude;
    this.flightNumber = flightNumber;
    this.bound = (bound > 180) ? "W" : "E";
    this.manufacturer = manufacturer;
    this.model = model;
    this.origin = origin;
    this.destination = destination;
    this.logo = `https://logo.clearbit.com/${logo.split(" ").join("").toLowerCase()}.com`
    }
}

export default Flight;