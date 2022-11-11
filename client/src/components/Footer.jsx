// import {
//     Facebook,
//     Instagram,
//     MailOutline,
//     Phone,
//     Pinterest,
//     Room,
//     Twitter,
//   } from "@material-ui/icons";
  import styled from "styled-components";
  
  const Container = styled.div`
    display: flex;
    color: #606064;
    background-color: #9cc8d6;
    box-shadow: 10px 10px 7px 9px;
    position: relative;
    top: 30px;
  `;
  
  const Left = styled.div`
    flex: 1;
    padding: 20px;
    position: relative;
    left: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    position: relative;
    left: 30px;

  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: .5;
    padding: 20px;
    position: relative;
    right: 20px;
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
        <Title>Follow Us</Title>
        <SocialContainer>
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
          </SocialContainer>
        </Left>
        <Center>
        <Logo>Sahitya.</Logo>
          <Desc>
           Sahitya Se Sambandh
          </Desc>
        </Center>
        <Right>
          <Title>Contact Us</Title>
          <ContactItem>
          <i className="fa fa-paper-plane" aria-hidden="true">SahityaORG@gmail.com</i>
          </ContactItem>
        </Right>
      </Container>
    );
  };
  
  export default Footer;

