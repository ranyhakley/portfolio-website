"use server";

// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown, maxLength: number) => {
  if(!value || typeof value !== "string"){
    return false;
  }
  return true;
}

export const sendEmail = async(formData: FormData) => {
  const senderEmail = formData.get('email');
  const message = formData.get('message');

  if(validateString(senderEmail, 100)){
    return{
      error: "Invalid sender email",
    }
  }

  if(validateString(message, 1000)){
    return{
      error: "Invalid message",
    }
  }

  resend.emails.send({
    from:"onboarding@resend.dev",
    to:"dev.ranyhakley@gmail.com",
    subject:"Mail from portfolio website",
    reply_to: senderEmail as string,
    text: message as string,
  });
};