// import FormData from 'form-data';
// import Mailgun from 'mailgun.js';

// const mailgun = new Mailgun(FormData);

// const mg = mailgun.client({
//   username: 'api',
//   key: import.meta.env.VITE_MAILGUN_API || 'key-yourkeyhere',
//   url: 'https://api.mailgun.net', // Use 'https://api.eu.mailgun.net' for EU infrastructure
// });

// const sendEmail = async () => {
//   try {
//     const response = await mg.messages.create('sandbox537b2f9980714c99bdb85f98a0a8a009.mailgun.org', {
//       from: "Excited User <mailgun@sandbox537b2f9980714c99bdb85f98a0a8a009.mailgun.org>",
//       to: ["andreamussari01@gmail.com"],
//       subject: "Hello",
//       text: "Testing some Mailgun awesomeness!",
//     });
//     console.log('Email sent:', response);
//   } catch (error) {
//     console.error('Error sending email:', error);
//   }
// };

// export const sender = {
//   send : sendEmail
// }
