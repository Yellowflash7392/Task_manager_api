const nodemailer = require("nodemailer");

const transporter= nodemailer.createTransport( {
    service: "hotmail",
    auth:{
        user:"nodetmapi@outlook.com",
        pass:"soumya@123"
    }

} )

const sendWelcomeEmail= (email,name)=>{
    transporter.sendMail({
            from:"nodetmapi@outlook.com",
            to: email,
            subject:"Thanks for joining",
            text: `Welocme ${name}`
        }
    )
}

const sendCancellationEmail= (email,name)=>{
    transporter.sendMail({
            from:"nodetmapi@outlook.com",
            to: email,
            subject:"Good bye",
            text: `Good bye ${name} any suggestions`
        }
    )
}

module.exports={
    sendWelcomeEmail,
    sendCancellationEmail
}