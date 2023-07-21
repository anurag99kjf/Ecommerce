/**
 *
 * Run:
 *
 */
const Mailjet = require('node-mailjet')
const mailjet= Mailjet.apiConnect("60d26e0a13913f853d918d5664ccd95d","7c40fe9b7bb3d26e5930ef8a3412c158");

  module.exports=function(email,token,callback){
    const request = mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
          {
            From: {
              Email: 'nish63348@gmail.com',
              Name: 'Anurag Kumar Singh',
            },
            To: [
              {
                Email: email,
                Name: 'we dont need',
              },
            ], 
            Subject: 'One last step',
            TextPart: 'If you enjoy purchase expensive products verify quickly',
            HTMLPart:
              `<h1>OMG its working</h1>
              <a href="http://127.0.0.1:8000/verifymail/?token=${token}">Click Here</a>
              `
          },
        ],
      })
      request
        .then(result => {
          console.log(result.body)
          callback(null,result.body);
        })
        .catch(err => {
          console.log(err);
          callback(err,null);
        })
  }
 