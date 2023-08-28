import React, { useState, useRef, useEffect } from "react";
import Modal from '@material-ui/core/Modal';
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { TextField } from "@material-ui/core";
export const Contact = () => {
    const emailRef = useRef("email");
    const nameRef = useRef("name");
    const descriptionRef = useRef("description");
    const [loading, setLoading] = useState(false);

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = "service_qsqu3ab";
        const templateId = "template_rdcewdd";
        try {
            setLoading(true);
            await emailjs.send(serviceId, templateId, {
                name: nameRef.current.value,
                recipient: emailRef.current.value,
                message: descriptionRef.current.value
            });
            alert("Email has been sent");
            setOpen(false);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => emailjs.init("zW-BHOZgglv8ifbYY"), []);

    return (
        <div className="Contact">
            <h1 className="contactHeader">
                Let's Work Together
            </h1>
            <div style={{ display: 'block', padding: 30 }}>
                <div className="get-in-touch" onClick={handleOpen}>
                    <p> Get in Touch </p>
                </div>
                <Modal
                    onClose={handleClose}
                    open={open}
                    className="contactModal"
                >
                    <div className="contactBody">
                        <section className="form-class">
                            <form className="for" onSubmit={handleSubmit}>
                                <TextField ref={nameRef} id="name" name="name" required label="Name:" variant="standard" />
                                <TextField id="standard-basic" ref={emailRef} type="email" name="email" required label="Email:" variant="standard" />
                                <TextField ref={descriptionRef} type="text" name="message" id="message" required label="Comment:" variant="standard" />
                                <button className="send" type="submit" >
                                    Send
                                </button>
                            </form>
                        </section>
                    </div>
                </Modal>
            </div>
        </div>
    );


}