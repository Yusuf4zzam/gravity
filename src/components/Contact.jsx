import HeadContent from "./HeadContent";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="container mx-auto px-2">
        <HeadContent
          HeadText="Contact Us"
          paraText="We are always open to discuss new value-adding partnerships. Do reach out if you are an exchange or a project looking for liquidity; an algorithmic trader or a software developer looking to improve the markets with us or just have a great idea you can’t wait to share with us!"
        />

        <div className="flex justify-center">
          <a
            className="uppercase font-semibold tracking-wide sm:text text-xs-sm py-4 px-8 text-white"
            href="#"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}
