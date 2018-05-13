const professionalsData = [{
        id: 1,
        "name": " Sumanth ",
        "phone_no": "8008800888",
        "services_list": ["yoga_at_home", "yoga_classes"],
        locations: ["500008", "500091"],
        avg_rating: 4.5
    },
    {
        id: 2,
        "name": " Mahesh  ",
        "phone_no": "8008800888",
        "services_list": ["ac_service_repair", "air_cooler_repair", "microwave_repair", "refrigerator_repair"],
        locations: ["500008", "500091"],
        avg_rating: 4
    },
    {
        id: 3,
        "name": " Suresh  ",
        "phone_no": "8008800888",
        "services_list": ["ac_service_repair", "air_cooler_repair", "microwave_repair", "refrigerator_repair"],
        locations: ["500008", "500091"],
        avg_rating: 3,

    }, {
        id: 4,
        "name": " Sathish  ",
        "phone_no": "8008800888",
        "services_list": ["ac_service_repair", "air_cooler_repair", "microwave_repair", "refrigerator_repair"],
        locations: ["500008", "500091"],
        avg_rating: 2.5,
    }, {
        id: 5,
        "name": " John  ",
        "phone_no": "8008800888",
        "services_list": ["ac_service_repair", "air_cooler_repair", "microwave_repair", "refrigerator_repair"],
        locations: ["500008", "500091"],
        avg_rating: 1.5,

    }, {
        id: 6,
        "name": " Jagadhish  ",
        "phone_no": "8008800888",
        "services_list": ["ac_service_repair", "air_cooler_repair", "microwave_repair", "refrigerator_repair"],
        locations: ["500008", "500091"],
        avg_rating: 4.5,

    },

];

const genericComments = [{
    id:1,
    text: " Comment 1",
    username: "xxxxxx",
    date: "2018-04-28"
}, {
    id:2,
    text: " Comment 2",
    username: "Adam",
    date: "2018-04-28"
}, {
    id:3,
    text: " Comment 3",
    username: "John",
    date: "2018-04-18"
}, {
    id:4,
    text: " Comment 4",
    username: "Mike",
    date: "2018-03-08"
}, {
    id:5,
    text: " Comment 5",
    username: "Matt",
    date: "2018-05-21"
}]



function getProfessionalsByService(service_key, pincode) {
    return new Promise((resolve, reject) => {
        try {

            const professionals = professionalsData.filter(prof => prof.locations.includes(pincode)
                  /* && prof.services_list.includes(service_key) //removed this condition as professonals data is less . */
            );
            resolve(professionals || []);
        } catch (e) {
            reject(e);
        }
    });
}

function getProfessionalDetails(profId) {
    return new Promise((resolve, reject) => {
        try {
            let professionalDetails = professionalsData.find(prof => 
                prof.id == profId
            );
            professionalDetails.comments = genericComments;
            professionalDetails.desc = "Professional description "

            resolve(professionalDetails);
        } catch (e) {
            reject(e);
        }
    });
}

export default {
    getProfessionalsByService,
    getProfessionalDetails
}