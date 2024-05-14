import sgMail from '@sendgrid/mail';

export const sendEmail = async (to, subject, text) => {
  sgMail.setApiKey('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');

  const msg = {
    to,
    from: 'info@didactic-syntax.org',
    subject,
    text,
  };

  try {
    await sgMail.send(msg);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error(error);
  }
};