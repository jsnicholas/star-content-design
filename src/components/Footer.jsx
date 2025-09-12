// import footer images
import footer1 from "../assets/desktop/footer-1.jpg";
import footer2 from "../assets/desktop/footer-2.jpg";
import footer3 from "../assets/desktop/footer-3.jpg";
import footer4 from "../assets/desktop/footer-4.jpg";

//import libraries
import { useForm, ValidationError } from '@formspree/react';

// Formspree implementation
function ContactForm() {
  const [state, handleSubmit] = useForm("xandkjeo");
  if (state.succeeded) {
      return <p>Thanks for reaching out. Someone will be in contact with you soon!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" aria-hidden="false">
        Your Name
      </label>
      <input
        id="name"
        type="text" 
        name="name"
        placeholder="Your Name"
      />
      <label htmlFor="email" aria-hidden="false">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Your Email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
      	aria-hidden="false"
        id="message"
        name="message"
        placeholder="Enter your message."
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

function Footer() {
  return (
    <footer className="h-fit w-full">
      <div className="hidden md:grid grid-cols-4 h-96 w-full">
        <div
          className="bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${footer1})`,
          }}
        ></div>
        <div
          className="bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${footer2})`,
          }}
        ></div>
        <div
          className="bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${footer3})`,
          }}
        ></div>
        <div
          className="bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${footer4})`,
          }}
        ></div>
      </div>
      <div className="flex flex-col gap-6 p-16 bg-success" id="contact">
        <span
          className="font-serif text-4xl text-center"
          style={{ color: "#225F4F" }}
        >
          Contact Us
        </span>
        <section className="contact">
        <ContactForm />
        </section>
        <div className="flex gap-4 justify-center">
          © Star Content Design
        </div>
      </div>
    </footer>
  );
}
export default Footer;
