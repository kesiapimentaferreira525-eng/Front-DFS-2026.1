import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Container } from "@mui/material";

export function Home({children}) {
  return (
    <>
      <Header />
      <Container sx={{ mt: 4 }}>
        {children}
      </Container>
      <Footer />
    </>
  );
}

