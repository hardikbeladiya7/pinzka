'use client'
import useUser from "@/hooks/useUser";
import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const ContactUs = () => {
  const [contact, setContact] = useState({ name: '', email: '', message: '' });
  const { contactUs } = useUser();

  useEffect(() => {

    const script = document.createElement('script');
    script.src = '/ad_script.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };

  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  }

  const save = async () => {
    const { name, email, message } = contact;
    if (name.length && email.length && message.length) {
      const res = await contactUs(contact);
      setContact({ name: '', email: '', message: '' });
    }
  }

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider", padding: "15px" }}>
      <Box className="ad250">
        <ins className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-4238460264484843"
          data-ad-slot="9018076593"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
      </Box>
      <Box className="contact_us_bg">
        <input placeholder="enter your name" name="name" onChange={handleChange} />
        <input placeholder="enter your Email" name="email" style={{ marginTop: "10px" }} onChange={handleChange} />
        <textarea
          rows={5}
          placeholder="enter your Message"
          style={{ marginTop: "10px" }}
          name="message"
          onChange={handleChange}
        />
        <Button
          className="contained_button"
          variant="contained"
          style={{ marginTop: '10px' }}
          onClick={save}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ContactUs;
