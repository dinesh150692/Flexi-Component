module.exports = Object.freeze({
    config: {  
        items:[  
            {      
                "name":"personname",
                "label":"Person's Name",
                "type":"TextField",
            },
            {  
                "name":"states",
                "label":"Person's state",          
                "type":"DropDown",
                "values":[  
                    "Maharashtra",
                    "Kerala",
                    "Tamil Nadu"
                ]
            },
            {      
                "name":"personnumber",
                "label":"Person's No.",
                "type":"Number",
            },

        ]
    }
});
    