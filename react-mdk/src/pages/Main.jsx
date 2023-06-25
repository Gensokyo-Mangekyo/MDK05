import Vote from "../components/Vote";
import Container from "../UI/Container";
import Header from "../UI/header";
import Nav from "../UI/Nav";
import Footer from "../UI/footer";

function MainPage() {
    return (
      <div>
        <Header></Header>
        <Nav></Nav>
        <Container></Container>
        <Vote/>
        <Footer></Footer>
      </div>
    );
  }
  
  export default MainPage;