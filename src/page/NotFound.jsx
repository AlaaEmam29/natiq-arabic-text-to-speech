import Button from "../ui/Button";
import Container from "../ui/Container";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <h1>This Page Not Found</h1>
      <Link to="/home">
        <Button>Go To Home</Button>
      </Link>
    </Container>
  );
}
