export default function Contact() {
    return (
        <>
            <h3>Contact Me</h3>
            <form className="contact-form">
                <div className="input-group">
                    <input type="text" name="full-name" id="full-name" placeholder="Full Name..."/>
                    <input type="email" name="email-address" id="email-address" placeholder="Email Address..." />
                </div>
                <textarea name="message" id="message" placeholder="Send a Message..."></textarea>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}