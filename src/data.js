const journeys = [
    {
        id: 1,
        title: "Mount Fuji",
        picture_url: "https://source.unsplash.com/WLxQvbMyfas",
        date: { from: new Date("2021-01-12"), to: new Date("2021-01-24") },
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        location: {
            country: "Japan",
            google_maps_url: "https://goo.gl/maps/84VaMk1KntkQEeW58",
        },
    },
    {
        id: 2,
        title: "Sydney Opera House",
        picture_url: "https://source.unsplash.com/JmuyB_LibRo",
        date: { from: new Date("2021-05-27"), to: new Date("2021-06-08") },
        description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.",
        location: {
            country: "Australia",
            google_maps_url: "https://goo.gl/maps/NTH1onuPChCG3UKn8",
        },
    },
    {
        id: 3,
        title: "Geirangerfjord",
        picture_url: "https://source.unsplash.com/3PeSjpLVtLg",
        date: { from: new Date("2021-10-01"), to: new Date("2021-11-18") },
        description: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
        location: {
            country: "Norway",
            google_maps_url: "https://goo.gl/maps/A8tDiMSuaxPtNJm4A",
        },
    },
];

export { journeys };