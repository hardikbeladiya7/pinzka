'use client'
import useUser from "@/hooks/useUser";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { login, manageRedirectionAfterAuth } = useUser();
  const router = useRouter();

  useEffect(() => {

    const script = document.createElement('script');
    script.src = 'https://thorient.com/ad_script.js';
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

  const checkLogin = async () => {
    try {
      const result = await login(credentials);
      manageRedirectionAfterAuth(result.data.user)
    } catch (err: any) {
    }
  }

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider", padding: "15px" }}>
      <Box className="ad250">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-9987228570589642"
          data-ad-slot="9890041426"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </Box>
      <Box className="contact_us_bg">
        <input placeholder="Email" name="email" value={credentials.email} onChange={handleChange} />
        <input placeholder="Password" type="password" value={credentials.password} name="password" onChange={handleChange} style={{ marginTop: "10px" }} />
        <Button
          className="contained_button"
          variant="contained"
          style={{ marginTop: '10px' }}
          disabled={credentials.email.length < 1 || credentials.password.length < 1}
          onClick={checkLogin}
        >
          Login
        </Button>
        <p style={{ fontSize: '16px', color: '#FFFFFF', marginTop: '20px' }}>Don't have a account? <a style={{ textDecoration: 'underline' }} href="/register">Register now</a></p>
      </Box>
    </Box>
  );
};

export default Login;
