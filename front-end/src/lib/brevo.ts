import { TransactionalEmailsApi, SendSmtpEmail } from "@getbrevo/brevo";

const emailAPI = new TransactionalEmailsApi();
emailAPI.setApiKey(0, import.meta.env.VITE_BREVO_API)

const Brevo = {
    emailAPI,
    message: new SendSmtpEmail()
}

export default Brevo