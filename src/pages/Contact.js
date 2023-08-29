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
    const descriptionRef = useRef("message");
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
                {messageSent ? <AlertBox visible={true} setMessageSent={setMessageSent} /> : null}
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
                                <TextField inputRef={nameRef} id="name" name="name" required label="Name:" variant="standard" type="text" />
                                <br/><br/>
                                <TextField inputRef={emailRef} id="email" name="email" required label="Email:" variant="standard" type="email" />
                                <br/><br/>
                                <TextField inputRef={descriptionRef} id="message" name="message" required label="Message:" variant="standard" type="text" />
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

const AlertBox = ({ visible, setMessageSent }) => {
    const [isVisible, setIsVisible] = useState(visible);

    useEffect(() => {
        if (visible) {
            setIsVisible(true);
            const timeout = setTimeout(() => {
                setIsVisible(false);
                setMessageSent(false);
            }, 5000);

            return () => {
                clearTimeout(timeout);
            };
        }
    }, [visible, setMessageSent]);

    return (
        <div className={`alert-box ${isVisible ? "" : "fade-out"}`}>
            <Alert severity="success"onClose={() => setMessageSent(false)}>
                Your Message has been Successfully Sent
            </Alert>
        </div>
    );
};