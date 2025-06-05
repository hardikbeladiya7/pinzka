'use client'
import useUser from "@/hooks/useUser";
import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const Register = () => {
  const [credentials, setCredentials] = useState({ fullname: '', email: '', password: '', c_password: '', coin: 3000 });
  const { register, manageRedirectionAfterAuth } = useUser();

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
    setCredentials({ ...credentials, [name]: value });
  }

  const registerUser = async () => {
    try {
      const res = await register(credentials);
      manageRedirectionAfterAuth(res.data.data);
    } catch (err) {
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
        <input name='fullname' placeholder="Name" onChange={handleChange} />
        <input name='email' placeholder="Email" style={{ marginTop: "10px" }} onChange={handleChange} />
        <input name='password' placeholder="Password" style={{ marginTop: "10px" }} onChange={handleChange} />
        <input name='c_password' placeholder="Confirm Password" style={{ marginTop: "10px" }} onChange={handleChange} />
        <Button
          className="contained_button"
          variant="contained"
          style={{ marginTop: '10px' }}
          onClick={registerUser}
          disabled={credentials.fullname.length < 1 && credentials.email.length < 1 && credentials.password.length < 1 && credentials.c_password.length < 1}
        >
          Register
        </Button>
        <p style={{ fontSize: '16px', color: '#FFFFFF', marginTop: '20px' }}>Already have a account? <a style={{ textDecoration: 'underline' }} href="/login">Login now</a></p>
      </Box>
    </Box>
  );
};

export default Register;
