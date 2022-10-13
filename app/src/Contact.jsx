import React, { useState } from "react";
import "./contact_us.css";
import validator from "validator";

const Contact = () => {
    const [emailError, setEmailError] = useState("");
    const validateEmail = (e) => {
        var email = e.target.value;

        if (validator.isEmail(email)) {
            setEmailError("Valid Email :)");
        } else {
            setEmailError("Enter valid Email!");
        }
    };
    return (
        <>
            <div className="contact">
                <div className="container2">
                    <div className="contact-parent">
                        <div className="contact-child child1">
                            <p>
                                <i className="fas fa-map-marker-alt"></i>{" "}
                                Address <br />
                                <span>
                                    {" "}
                                    Street Address
                                    <br />
                                    City, State and country
                                </span>
                            </p>
                            <p>
                                <i className="fas fa-phone-alt"></i> Let's Talk{" "}
                                <br />
                                <span>9876543219</span>
                            </p>
                            <p>
                                <i className=" far fa-envelope"></i> General
                                Support <br />
                                <span>contact@example.com</span>
                            </p>
                        </div>
                        <div className="contact-child child2">
                            <div className="inside-contact">
                                <h2>Contact Us</h2>
                                <form
                                    action="https://formsubmit.co/8061512ad2851c728c88eb72b41b5733"
                                    method="POST"
                                >
                                    <input
                                        id="txt_name"
                                        name="name"
                                        type="text"
                                        placeholder="Full Name *"
                                        required
                                    />

                                    <pre>
                                        <input
                                            id="txt_email"
                                            name="email"
                                            type="email"
                                            placeholder="Email *"
                                            onChange={(e) => validateEmail(e)}
                                            required
                                        />
                                        <span
                                            style={{
                                                fontWeight: "bold",
                                                color: "red",
                                                display: "flex",
                                            }}
                                        >
                                            {emailError}
                                        </span>
                                    </pre>

                                    <input
                                        id="txt_subject"
                                        name="subject"
                                        type="text"
                                        placeholder="Subject *"
                                        required
                                    />

                                    <textarea
                                        id="txt_message"
                                        name="message"
                                        rows="4"
                                        cols="20"
                                        placeholder="Your message *"
                                        required
                                    ></textarea>
                                    <input
                                        type="submit"
                                        id="btn_send"
                                        value="SEND"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
