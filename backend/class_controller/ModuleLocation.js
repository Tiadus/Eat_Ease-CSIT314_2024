class ModuleLocation {
    constructor() {}

    toRadians(degrees) {
        return degrees * Math.PI / 180;
    }
      
    haversine(lat1, lon1, lat2, lon2) {
        
        // Radius of the Earth in kilometers
        const R = 6371.0;
        
        // Convert latitude and longitude from degrees to radians
        const lat1Rad = this.toRadians(lat1)
        const lon1Rad = this.toRadians(lon1);
        const lat2Rad = this.toRadians(lat2);
        const lon2Rad = this.toRadians(lon2);
        
        // Haversine formula
        const dLon = lon2Rad - lon1Rad;
        const dLat = lat2Rad - lat1Rad;
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(lat1Rad) * Math.cos(lat2Rad) *
                    Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;
        
        return distance;
    }
}

module.exports = ModuleLocation;