import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, Container, IconButton, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { loginUser } from "../services/ApiService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = async () => {
        const { data } = await loginUser({email, password});
        login(data);
        navigate("/")
    }

    return(
        <Box display="flex" alignItems="center" minHeight="100vh">  
            <Container maxWidth="xs">
                <Paper elevation={3} sx={{ p: 3 }}>
                    <Typography> Login </Typography>
                    <TextField 
                        label="Email"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField label="Senha" fullWidth type={show ? 'text' : 'password'} margin="normal" value={password}
                                        onChange={(e) => setPassword(e.target.value)} 
                                        slotProps={{
                                                input: {
                                                endAdornment: (
                                                    <IconButton onClick={() => setShow(!show)}>
                                                        {show ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>),
                        }}}/> 

                    <Button variant="contained" fullWidth onClick={handleLogin}> Enter </Button> 
                </Paper>

            </Container>
        </Box>
    )
}