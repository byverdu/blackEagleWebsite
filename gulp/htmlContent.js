import Handlebars from "handlebars";

const indexBoxHtml = `<h2>Close Protection Special Unit</h2>
<span>
  Professionals for Professionals
</span>
<span>
  <a class="btn btn-primary" href="contact.html">
    Get A Quote
  </a>
</span>`;

const contactBoxHtml = `<h2>Contact Us</h2>`;

const aboutBoxHtml = `<h2>About Us</h2>`;

const servicesBoxHtml = `<h2>Our Services</h2>
<span>
  <a class="btn btn-primary" href="contact.html">
    Get A Quote
  </a>
</span>`;

const successBoxHtml = `<h2 class="success">Your Message has been send succesfully.</h2>`;

const safeString = (content) => {
  return new Handlebars.SafeString(content);
}

export {
  indexBoxHtml,
  contactBoxHtml,
  aboutBoxHtml,
  servicesBoxHtml,
  successBoxHtml,
  safeString
}
