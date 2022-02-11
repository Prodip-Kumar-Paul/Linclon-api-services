// import vimeo from "vimeo";
// let Vimeo = vimeo.Vimeo;
// let client = new Vimeo(
//   "4e7062886f8c80b11b64a1d69dd32c4448915959",
//   "hrrdQ5ldXA5nhSGkP0CPsdECPgP4epmhkby6k7pZhdfuNH+vaD9+ILITfQKSbOjbm1MAQO8HqKdKkV9K6E6av0M+6VeU4N9SHF41q5Y9bzHwRLChfeElLr+7DEhCZ5p4",
//   "1ebd3dabbe08c0267fec72b215cc305e"
// );

// export const uploadVideo = (req, res, next) => {
    
//   const file_name = "/users/165593012/videos";
//   console.log(file_name);
//   console.log("working");
//   console.log(client);
//   client.upload(
//     file_name,
//     {
//       name: "Untitled",
//       description: "The description goes here.",
//     },
//     function (uri) {
//       console.log("Your video URI is: " + uri);
//     },
//     function (bytes_uploaded, bytes_total) {
//       var percentage = ((bytes_uploaded / bytes_total) * 100).toFixed(2);
//       console.log(bytes_uploaded, bytes_total, percentage + "%");
//     },
//     function (error) {
//       console.log("Failed because: " + error);
//     }
//   );
// };

// export const videoLink=(req,res,next)=>{
//   client.request(uri + '?fields=link', function (error, body, statusCode, headers) {
//     if (error) {
//       console.log('There was an error making the request.')
//       console.log('Server reported: ' + error)
//       return
//     }
  
//     console.log('Your video link is: ' + body.link)
//   })
// }