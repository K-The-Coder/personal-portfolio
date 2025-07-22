import Input from "../components/Input";
import Button from "../components/Button";
import TextArea from "../components/TextArea";

export default function Contact() {
  return (
    <>
      <h3>Contact Me</h3>
      <form className="contact-form">
        <div className="input-group">
          <Input
            type="text"
            name="full-name"
            id="full-name"
            placeholder="Full Name..."
          />
          <Input
            type="email"
            name="email-address"
            id="email-address"
            placeholder="Email Address..."
          />
        </div>
        <TextArea
          name="message"
          id="message"
          placeholder="Send a Message..."
        ></TextArea>
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}
