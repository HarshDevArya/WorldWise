import { Link } from "react-router-dom";
import PageNav from "../components/pageNav";
export default function Home() {
  return (
    <>
      <PageNav />
      <h1>This is Home</h1>
      <Link to="/price">Pricing</Link>
    </>
  );
}
