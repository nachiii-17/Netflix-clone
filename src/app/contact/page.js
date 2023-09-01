import ContactCard from "@/app/components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "@/app/components/ContactForm";

const page = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact us</h1>
        <ContactCard />
        <section className={styles.contact_section}>
          <h2>
            We'd Love to hear <span> from you </span>
          </h2>
          <ContactForm />
        </section>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7536.891662721769!2d72.8801868!3d19.175720199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1689325364624!5m2!1sen!2sin"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className={styles.mapping}
      ></iframe>
    </>
  );
};

export default page;
