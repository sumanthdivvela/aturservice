
const  categories = [ {id:"1"  , name: "Repairs" , desc : " Any items repairs " , icon:"" , serviceKeys : ["repair"]  } ,
{id:"2"  , name: "Health & Wellness" , desc : " Health & Wellness" , icon:""  , 
serviceKeys : ["salon", "spa" , "yoga" , "fitness" , "physio", "diet"] } ,
{id:"3"  , name: "Home cleaning" , desc : " Home cleaning " , icon:"" ,   serviceKeys : ["home" , "cleaning"]} ,
{id:"4"  , name: "Bussiness & Tax" , desc : " Bussiness & Tax " , icon:"" ,   serviceKeys : ["tax" , "company", "bussiness" ,"account"  ,"gst"]} ,
{id:"5"  , name: "Pernsonal & More" , desc : " Pernsonal & More " , icon:"" ,   serviceKeys : ["photo" , "care", "makeup" ,"tutor"]} ,
{id:"6"  , name: "Wedding & Events" , desc : " Wedding & Events " , icon:"" ,   serviceKeys : ["photo" , "event", "wed" ,"party" , "planner", "cater"]}  ];



const proServicesData =[{"key_name":"air_cooler_repair","display_name":"Air Cooler Repair","font_name":"0","city_key":"city_hyderabad_v2"},{"key_name":"astrologer","display_name":"Astrologer","font_name":"e","city_key":"city_hyderabad_v2","url":"/hyderabad-astrologer"},{"key_name":"ac_service_repair","display_name":"AC Service and Repair","font_name":"S","city_key":"city_hyderabad_v2","url":"/hyderabad-ac-service-repair"},{"key_name":"plans_designs","display_name":"Plans and Designs","font_name":"e","city_key":"city_hyderabad_v2"},{"key_name":"bridal_mehendi_artist","display_name":"Mehendi Artists","font_name":"e","city_key":"city_hyderabad_v2","url":"/hyderabad-bridal-mehendi-artist"},{"key_name":"architect","display_name":"Construction","font_name":"e","city_key":"city_hyderabad_v2","url":"/hyderabad-architect"},{"key_name":"chartered_accountants","display_name":"Chartered Accountant","font_name":"v","city_key":"city_hyderabad_v2"},{"key_name":"wood_furniture_contractor","display_name":"Furniture and Wood work","font_name":"e","city_key":"city_hyderabad_v2","url":"/hyderabad-wood-furniture-contractor"},{"key_name":"yoga_classes","display_name":"Yoga at Studio","font_name":"!","city_key":"city_hyderabad_v2","url":"/hyderabad-yoga-classes"},{"key_name":"physiotherapist","display_name":"Physiotherapy at Home","font_name":"4","city_key":"city_hyderabad_v2","url":"/hyderabad-physiotherapist"},{"key_name":"spa_at_home","display_name":"Spa at Home for Women","font_name":"e","city_key":"city_hyderabad_v2"},{"key_name":"salon_at_home","display_name":"Salon at Home","font_name":"7","city_key":"city_hyderabad_v2","url":"/hyderabad-salon-at-home"},{"key_name":"guitar_lessons_at_home","display_name":"Guitar Lessons at Home","font_name":"B","city_key":"city_hyderabad_v2","url":"/hyderabad-guitar-lessons-at-home"},{"key_name":"yoga_at_home","display_name":"Yoga Trainer at Home","font_name":"R","city_key":"city_hyderabad_v2","url":"/hyderabad-yoga-at-home"},{"key_name":"cctv_dealers","display_name":"CCTV Cameras and Installation","font_name":"e","city_key":"city_hyderabad_v2","url":"/hyderabad-cctv-dealers"},{"key_name":"fitness_trainer_at_home","display_name":"Fitness Trainer at Home","font_name":"A","city_key":"city_hyderabad_v2","url":"/hyderabad-fitness-trainer-at-home"},{"key_name":"agencies_elderly_care_attendees","display_name":"Elder Care at Home","font_name":":","city_key":"city_hyderabad_v2"},{"key_name":"party_makeup_artist","display_name":"Party Makeup Artist","font_name":"L","city_key":"city_hyderabad_v2","url":"/hyderabad-party-makeup-artist"},{"key_name":"wedding_makeup_artists","display_name":"Bridal Makeup Artist","font_name":"L","city_key":"city_hyderabad_v2","url":"/hyderabad-wedding-makeup-artists"},{"key_name":"wedding_planner","display_name":"Wedding Planner","font_name":"z","city_key":"city_hyderabad_v2","url":"/hyderabad-wedding-planner"},{"key_name":"bollywood_dance_classes","display_name":"Bollywood Dance Classes","font_name":"%","city_key":"city_hyderabad_v2","url":"/hyderabad-bollywood-dance-classes"},{"key_name":"bathroom_renovation","display_name":"Bathroom Renovation","font_name":":","city_key":"city_hyderabad_v2"},{"key_name":"professional_bathroom_cleaning","display_name":"Bathroom Deep Cleaning","font_name":"U","city_key":"city_hyderabad_v2","url":"/hyderabad-professional-bathroom-cleaning"},{"key_name":"baby_photographers","display_name":"Baby Portfolio Photographer","font_name":"T","city_key":"city_hyderabad_v2","url":"/hyderabad-baby-photographers"},{"key_name":"birthday_party_planners","display_name":"Birthday Party Planner","font_name":"V","city_key":"city_hyderabad_v2","url":"/hyderabad-birthday-party-planners"},{"key_name":"pre_bridal_beauty_packages","display_name":"Pre Bridal Beauty Packages","font_name":"7","city_key":"city_hyderabad_v2"},{"key_name":"ca_small_business","display_name":"CA for Small Business","font_name":"v","city_key":"city_hyderabad_v2","url":"/hyderabad-ca-small-business"},{"key_name":"microwave_repair","display_name":"Microwave Repair","font_name":"e","city_key":"city_hyderabad_v2","url":"/hyderabad-microwave-repair"},{"key_name":"pre_wedding_shoot_photographers","display_name":"Pre-Wedding Shoot","font_name":"6","city_key":"city_hyderabad_v2","url":"/hyderabad-pre-wedding-shoot-photographers"},{"key_name":"property_lawyer","display_name":"Real Estate Lawyer","font_name":"e","city_key":"city_hyderabad_v2"},{"key_name":"mobile_repair","display_name":"Mobile Repair","font_name":"M","city_key":"city_hyderabad_v2","url":"/hyderabad-mobile-repair"},{"key_name":"graphics_logo_designers","display_name":"Graphics Designer","font_name":"e","city_key":"city_hyderabad_v2","url":"/hyderabad-graphics-logo-designers"},{"key_name":"professional_home_cleaning","display_name":"Home Deep Cleaning","font_name":"Y","city_key":"city_hyderabad_v2","url":"/hyderabad-professional-home-cleaning"},{"key_name":"carpenters","display_name":"Carpenter","font_name":"u","city_key":"city_hyderabad_v2","url":"/hyderabad-carpenters"},{"key_name":"tax_filing","display_name":"CA for Income Tax Filing","font_name":"v","city_key":"city_hyderabad_v2","url":"/hyderabad-tax-filing"},{"key_name":"professional_carpet_cleaning","display_name":"Carpet Cleaning","font_name":"W","city_key":"city_hyderabad_v2","url":"/hyderabad-professional-carpet-cleaning"},{"key_name":"computer_repair","display_name":"Computer Repair","font_name":"I","city_key":"city_hyderabad_v2"},{"key_name":"company_registration","display_name":"CA/CS for Company Registration","font_name":"v","city_key":"city_hyderabad_v2","url":"/hyderabad-company-registration"},{"key_name":"car_cleaning","display_name":"Car Cleaning","font_name":"t","city_key":"city_hyderabad_v2","url":"/hyderabad-car-cleaning"},{"key_name":"tax_registration","display_name":"CA for Tax Registration","font_name":":","city_key":"city_hyderabad_v2","url":"/hyderabad-tax-registration"},{"key_name":"commerce_home_tutors","display_name":"Commerce Home Tutor","font_name":"e","city_key":"city_hyderabad_v2"},{"key_name":"guitar_classes","display_name":"Guitar Classes","font_name":"B","city_key":"city_hyderabad_v2","url":"/hyderabad-guitar-classes"},{"key_name":"pest_control","display_name":"Pest Control","font_name":"3","city_key":"city_hyderabad_v2","url":"/hyderabad-pest-control"},{"key_name":"professional_sofa_cleaning","display_name":"Sofa Cleaning","font_name":"P","city_key":"city_hyderabad_v2","url":"/hyderabad-professional-sofa-cleaning"},{"key_name":"wedding_caterers","display_name":"Wedding Caterers","font_name":"?","city_key":"city_hyderabad_v2","url":"/hyderabad-wedding-caterers"},{"key_name":"birthday_party_caterers","display_name":"Party Caterer","font_name":"V","city_key":"city_hyderabad_v2","url":"/hyderabad-birthday-party-caterers"},{"key_name":"lawyers","display_name":"Lawyer","font_name":"K","city_key":"city_hyderabad_v2","url":"/hyderabad-lawyers"},{"key_name":"nutritionists","display_name":"Dietician","font_name":"N","city_key":"city_hyderabad_v2","url":"/hyderabad-nutritionists"},{"key_name":"divorcelawyers","display_name":"Divorce Lawyer","font_name":"K","city_key":"city_hyderabad_v2"},{"key_name":"logo_designers","display_name":"Logo Designers","font_name":"e","city_key":"city_hyderabad_v2"},{"key_name":"professional_kitchen_cleaning","display_name":"Kitchen Deep Cleaning","font_name":"H","city_key":"city_hyderabad_v2","url":"/hyderabad-professional-kitchen-cleaning"},{"key_name":"Web_designer","display_name":"Web Designer & Developer","font_name":"e","city_key":"city_hyderabad_v2","url":"/hyderabad-Web-designer"},{"key_name":"zumba_dance_classes","display_name":"Zumba Fitness Dance","font_name":"@","city_key":"city_hyderabad_v2"},{"key_name":"interior_designers","display_name":"Interiors","font_name":"D","city_key":"city_hyderabad_v2","url":"/hyderabad-interior-designers"},{"key_name":"packer_mover_local","display_name":"Packers & Movers","font_name":"O","city_key":"city_hyderabad_v2","url":"/hyderabad-packer-mover-local"},{"key_name":"refrigerator_repair","display_name":"Refrigerator Repair","font_name":"e","city_key":"city_hyderabad_v2","url":"/hyderabad-refrigerator-repair"},{"key_name":"electricians","display_name":"Electrician","font_name":"y","city_key":"city_hyderabad_v2","url":"/hyderabad-electricians"},{"key_name":"personal_party_photographers","display_name":"Event Photographer","font_name":"2","city_key":"city_hyderabad_v2","url":"/hyderabad-personal-party-photographers"},{"key_name":"house_painters","display_name":"House Painters","font_name":"e","city_key":"city_hyderabad_v2","url":"/hyderabad-house-painters"},{"key_name":"laptop_repair","display_name":"Laptop Repair","font_name":"I","city_key":"city_hyderabad_v2","url":"/hyderabad-laptop-repair"},{"key_name":"tutor_at_home","display_name":"Home Tutor","font_name":"e","city_key":"city_hyderabad_v2","url":"/hyderabad-tutor-at-home"},{"key_name":"tv_repair","display_name":"TV Repair","font_name":"e","city_key":"city_hyderabad_v2","url":"/hyderabad-tv-repair"},{"key_name":"plumbers","display_name":"Plumber","font_name":"5","city_key":"city_hyderabad_v2","url":"/hyderabad-plumbers"},{"key_name":"tutors_mathematics","display_name":"Mathematics Tutor","font_name":"e","city_key":"city_hyderabad_v2","url":"/hyderabad-tutors-mathematics"},{"key_name":"ro_repair","display_name":"RO or Water Purifier Repair","font_name":"9","city_key":"city_hyderabad_v2","url":"/hyderabad-ro-repair"},{"key_name":"house_party_cleaning","display_name":"Pollution Free Home","font_name":"Y","city_key":"city_hyderabad_v2"},{"key_name":"contractor","display_name":"Renovation","font_name":"d","city_key":"city_hyderabad_v2","url":"/hyderabad-contractor"},{"key_name":"geyser_reapir","display_name":"Geyser / Water Heater Repair","font_name":"0","city_key":"city_hyderabad_v2","url":"/hyderabad-geyser-reapir"},{"key_name":"gst_services","display_name":"GST Registration & Migration Services","font_name":":","city_key":"city_hyderabad_v2"},{"key_name":"apple_product_repair","display_name":"iPhone, iPad, Mac Repair","font_name":"q","city_key":"city_hyderabad_v2","url":"/hyderabad-apple-product-repair"},{"key_name":"washing_machine_repair","display_name":"Washing Machine Repair","font_name":"b","city_key":"city_hyderabad_v2","url":"/hyderabad-washing-machine-repair"},{"key_name":"kitchen_remodelling","display_name":"Modular Kitchens","font_name":"D","city_key":"city_hyderabad_v2"},{"key_name":"maternity_photographers","display_name":"Maternity Photographer","font_name":"0","city_key":"city_hyderabad_v2","url":"/hyderabad-maternity-photographers"},{"key_name":"outstation_taxi","display_name":"Outstation Taxi","font_name":":","city_key":"city_hyderabad_v2"},{"key_name":"wedding_photographers","display_name":"Wedding Photographer","font_name":"9","city_key":"city_hyderabad_v2","url":"/hyderabad-wedding-photographers"},{"key_name":"vastu_consultant","display_name":"Vastu Shastra Consultants","font_name":":","city_key":"city_hyderabad_v2"}];

const serviceDetailsStub = {
    imageSrc : "",
    meta_data : { },
    detailedDesc : " Following service is provided to you by Professionals.",

    tasks : [
        {key:"service_item_1" , desc : " Sub task 1" },
        {key:"service_item_2" , desc : " Sub task 2" },
        {key:"service_item_3" , desc : " Sub task 3" },
        {key:"service_item_4" , desc : " Sub task 4" }
    ],

    rateCard : {
        image:"",
        rateList : [ 
        { key:"per_visit", desc: " Service Visit ", billingType: "Per Visit" ,  amount: 350  },
        { key:"hourly", desc: " Service Work ", billingType: "Per Hour" ,  amount: 350  },
        { key:"parts", desc: " Service Part 1 ", billingType: "Each item" ,  amount: 200  },
        ]
    }
}

function getServiceCataegories () {
    return new Promise ((resolve) => {  resolve(categories) });
}
function getServices(qs) {
    const qsLower = qs.toLowerCase();
    return new Promise((resolve) => {

        resolve(proServicesData.filter(serv => serv.display_name.toLowerCase().includes(qsLower)))

    });
}
function getServicesByCategory(catName) {

    return new Promise((resolve, reject) => {
        const category = categories.find(cat => cat.name == catName);
        let promises = []

        category.serviceKeys.forEach(key => promises.push(getServices(key)));

        const cb = resolve => ([...results]) => {

            let servicesList  = results.reduce((a, b) => [...a, ...b])

            servicesList = servicesList.filter((thing, index, self) =>
                index === self.findIndex((t) => (
                    t.key_name === thing.key_name))
            )
            console.log(servicesList);
            resolve(servicesList)
        }

        //Return services which have keys related to service category.
        Promise.all(promises).then(cb(resolve))
            .catch(error => {
                console.error(error);
                reject(error);
            });
    })
}

function getServiceDetails(serviceName){
    return new Promise((resolve, reject) => {
        //This should got backend server to get actual details of service.
        try{

    
       const serviceInfo = proServicesData.find(service => service.key_name === serviceName);
       //TODO: Adding some dummy stub currently, need to be replace with backend actual data.
       let serviceDetails =  Object.assign({},serviceInfo, serviceDetailsStub);

        resolve(serviceDetails);

    }catch(e){
        reject(e);
    }

    })
}

export default {
    getServiceCataegories,
    getServices,
    getServicesByCategory,
    getServiceDetails
}