// import { MdLocalPizza as icon } from 'react-icons/md';

export default {
    name: "contact",
    title: 'Contact Form',
    type: 'document',
    icon: () => '✍🏻',
    // icon,
    fields: [
        {
            name: 'name',
            title: 'Who is our point of contact?',
            type: 'string',
            description: 'Their name is...?',
            validation: Rule => Rule.required().min(1).max(100)
        },
        // slugify example @ 11:45 in video. I don't need that option here. 
        {
            name: 'town',
            title: 'Township',
            type: 'string',
            description: 'I need help at...',
            validation: Rule => Rule.max(100)
        },
        {
            name: 'region',
            title: 'Region',
            type: 'string',
            options: {
                list: [
                    {value: 'waterdeep', title: 'Sword Coast/Waterdeep'},
                    {value: 'chult', title: 'Chultan Peninsula'},
                    {value: 'moonshae', title: 'Moonshae Isles'},
                    {value: 'amn', title: 'Amn/Athkatla'},
                    {value: 'tethyr', title: 'Tethyr/Zazesspur'},
                    {value: 'calimshan', title: 'Calimshan/Calimport'},
                    {value: 'mulhorand', title: 'Mulhorand/Skuld'},
                    {value: 'unther', title: 'Unther/Ulthalass'},
                    {value: 'chessenta', title: 'Chessenta/Cimbar'},
                    {value: 'thay', title: 'Thay/Bezantur'},
                    {value: 'icewindDale', title: 'Icewind Dale'},
                    {value: 'underdark', title: 'Underdark'},
                    {value: 'faerun', title: 'Other Faerun - please describe in detail'},
                    {value: 'anotherPlane', title: 'Another Plane - how will we get there?'},
                ]
            }
        },
        {
            name: 'info',
            title: 'How can we help?',
            type: 'text',
            description: 'Describe what is troubling you',
            validation: Rule => Rule.required().min(1).max(1000)
        },
        {
            name: 'emergency',
            title: 'Is this an emergency?',
            type: 'boolean',
            description: 'Only select this if someone is in immediate danger',
            initialValue: false,           
        },
        {
            name: 'date',
            title: 'Date Submitted',
            type: 'datetime',
            initialValue: (new Date()).toISOString()
        },

    ],
orderings: [
    {
        title: "Date Submitted",
        name: 'date',
        by:[{field: "emergency", direction: "desc"}, { field: "date", direction: "asc" }]
    },
   ],

preview: {
    select: {
        name: 'name',
        region: 'region',
        emergency: 'emergency',
        date: 'date',
    },
    prepare: (fields) => {
        console.log(fields.region);

        function timeAgo(ISOdate){
            console.log(ISOdate, "running time Math...");

            const date = new Date(ISOdate);
            const seconds = Math.floor((new Date() - date) / 1000);
            var intervalType;

            var interval = Math.floor(seconds / 31536000);
            if (interval >= 1) {
                intervalType = 'year';
            } else {
                interval = Math.floor(seconds / 2592000);
                if (interval >= 1) {
                intervalType = 'month';
                } else {
                interval = Math.floor(seconds / 86400);
                if (interval >= 1) {
                    intervalType = 'day';
                } else {
                    interval = Math.floor(seconds / 3600);
                    if (interval >= 1) {
                    intervalType = "hour";
                    } else {
                    interval = Math.floor(seconds / 60);
                    if (interval >= 1) {
                        intervalType = "minute";
                    } else {
                        interval = seconds;
                        intervalType = "second";
                    }
                    }
                }
                }
            }

            if (interval > 1 || interval === 0) {
                intervalType += 's';
            }

            // const timeAgo = interval + ' ' + intervalType;
            return interval + ' ' + intervalType + " ago";

        };
        fields.date = timeAgo(fields.date);
        
        return {
            title: `${fields.name} in ${fields.region.charAt(0).toUpperCase() + fields.region.slice(1)}`,
            subtitle: fields.date,
            media: () => fields.emergency ? '🚨' : '📫',
        }
    },
},
}