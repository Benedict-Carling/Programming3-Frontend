import Button from "@material-ui/core/Button";

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
