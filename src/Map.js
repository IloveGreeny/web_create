import "./Map.css"

export default function Map() {
    return (
    <div>
        <div className="contact-in">
            <div className="contact-form">
                <input type="text" placeholder="Name" className="contact-form-txt"/>
                <input type="text" placeholder="Email" className="contact-form-txt"/>
                <textarea placeholder="Text" className="contact-form-txtar"></textarea>
                <input type="submit" name="Submit" className="contact-form-btn"/>
            </div>
                <div className="contact-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97583.88432375477!2d44.418527418380634!3d40.15350050866109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa2dab8fc8b5b%3A0x3d1479ae87da526a!2z1LXWgNaH1aHVtiwg1YDVodW11aHVvdW_1aHVtg!5e0!3m2!1shy!2s!4v1648660873336!5m2!1shy!2s"
                            width="70%"
                            height="auto"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                </div>
        </div>
    </div>
    )
}
