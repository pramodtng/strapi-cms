module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];


// module.exports = {
//       load: {
//         before: ["timer", "responseTime", "logger", "cors", "responses", "gzip"],
//         order: [],
//         after: ["parser", "router"],
//       },
//       settings: {
//         timer: {
//           enabled: true,
//         },
//         cors: {
//           enabled: true,
//           origin: [
//            "https://tashielectronicsbackend.tashicell.com/"
//           ],
//         },
//       },
//     };