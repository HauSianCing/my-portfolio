import React, { useState, useRef, useEffect } from "react";
import Modal from '@material-ui/core/Modal';
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { TextField } from "@material-ui/core";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
export const Contact = () => {
    const emailRef = useRef("email");
    const nameRef = useRef("name");
    const descriptionRef = useRef("description");
    const [loading, setLoading] = useState(false);
    const [messageSent, setMessageSent] = useState(false);

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
            setOpen(false);
            setLoading(false);
            await emailjs.send(serviceId, templateId, {
                name: nameRef.current.value,
                recipient: emailRef.current.value,
                message: descriptionRef.current.value
            });
            setMessageSent(true);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => emailjs.init("zW-BHOZgglv8ifbYY"), []);

    return (

        <div className="Contact">
            <div className="message">
                {messageSent ? <AlertBox visible={true} /> : null}
            </div>
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
                                <TextField ref={emailRef} type="email" id="email" name="email" required label="Email:" variant="standard" />
                                <TextField ref={descriptionRef} type="text" name="message" id="message" required label="Message:" variant="standard" />
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

const AlertBox = ({ visible }) => {
    const [isVisible, setIsVisible] = useState(visible);

    useEffect(() => {
        if (visible) {
            setIsVisible(true);
            const timeout = setTimeout(() => {
                setIsVisible(false);
            }, 3000);

            return () => clearTimeout(timeout);
        }
    }, [visible]);

    return (
        <div className={`alert-box ${isVisible ? "" : "fade-out"}`}>
            <Alert severity="success">
                Your Message has been Successfully Sent </Alert>
        </div>
    );
};