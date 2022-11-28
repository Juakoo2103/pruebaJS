import { Meteor } from 'meteor/meteor';
import { PacientesCollection } from '../imports/api/PacientesCollection';



Meteor.startup(() => {
    const count = PacientesCollection.find().count();

    if (count === 0) {
        PacientesCollection.insert({
            
                
                rut: "18051235-7",
                name: "Joaquin Eduardo",
                apellidom: "Cabello",
                apellidof: "Gonzalez",
                region: "Region Metropolitana de Santiago",
                comuna: "Puente Alto",
                postal: "12345678"
              
        });
        PacientesCollection.insert({
                rut: "18051235-7",
                name: "Joaquin Eduardo",
                apellidom: "Cabello",
                apellidof: "Gonzalez",
                region: "Region Metropolitana de Santiago",
                comuna: "Puente Alto",
                postal: "12345678"
        });
        PacientesCollection.insert({
            rut: "18051235-7",
            name: "Alexandra Ninoska",
            apellidom: "Morales",
            apellidof: "Arce",
            region: "Region Metropolitana de Santiago",
            comuna: "Puente Alto",
            postal: "12345678"
        });
    }
});