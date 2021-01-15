import Button from "@material-ui/core/Button";

/* Funtion to open the preferred email app of your PC which will use the parameters passed 
from ForgotPassword:
      - email: email address of the person we are sending an email to
      - subject: subject (title) of the email
      - body: content of the email
*/
const Emailsender = ({ email, subject, body, children }) => {
  let params = subject || body ? "?" : "";
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

  return (
    <a href={`mailto:${email}${params}`}>
      {children}
      <Button color="primary">SEND EMAIl</Button>
    </a>
  );
};

export default Emailsender;
