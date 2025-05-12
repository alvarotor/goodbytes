import { Header } from "./header"
import Footer from "./footer"

export default function Contact() {
    return (
        <>
            <Header />
            <div class="innerbg">
                <div class="wrap">
                    <h1>Contact</h1>
                </div>
                </div>
                <div class="wrap">
                <div id="content">
                    <p>
                    Please fill out the form below or send me an e-mail and I'll get back
                    to you asap. Thank you!
                    </p>

                    <link rel="stylesheet" href="content/form.css" media="all" />
                    <form
                    id="contact"
                    method="post"
                    action="mailto:goodbytes23@gmail.com"
                    enctype="text/plain"
                    >
                    <fieldset>
                        <label for="name">Name</label>
                        <br />
                        <input id="name" name="name" type="text" value="" />
                    </fieldset>
                    <fieldset>
                        <label for="email">Email</label>
                        <br />
                        <input id="email" name="email" type="email" value="" />
                    </fieldset>
                    <fieldset>
                        <label for="company">Company</label>
                        <br />
                        <input id="company" name="company" type="text" value="" />
                    </fieldset>
                    <fieldset>
                        <label for="message">Message</label>
                        <br />
                        <textarea id="message" name="message" rows={8}></textarea>
                    </fieldset>
                    <button class="btn" type="submit">Send</button>
                    </form>
                </div>
                <div id="sidebar">
                    <div class="contact-info">
                    <h2>Contact details</h2>
                    {/* <p>
                                <strong>Tel.:</strong>
                            </p>
                            <p>+55 21 993038359</p> */}
                    <p>
                        <strong>Email:</strong>
                    </p>
                    <p>goodbytes23 (@) gmail.com</p>
                    <p>
                        <strong>City:</strong>
                    </p>
                    <p>
                        Valencia
                        <br />(Spain)
                    </p>
                    </div>
                </div>       
            </div>
            <Footer />
        </>
    );
}