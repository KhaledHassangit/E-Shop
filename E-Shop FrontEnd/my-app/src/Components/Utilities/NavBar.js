import React from 'react'
import cart from "../../images/cart.png"
import login from "../../images/login.png"
import logo from "../../images/logo.png"
import {Navbar,Container,Form,Nav, NavLink, NavDropdown} from "react-bootstrap"
import NavBarSearchHook from '../CustomHooks/Search/NavBarSearch-Hook'
import GetAllProductsCartHook from '../CustomHooks/Cart/GetAllProductsCart-Hook'

const NavBarLogin = () => {
    const  [keyword,onSearch] = NavBarSearchHook()
    let word = ""
    if(localStorage.getItem("searchWord") != null)
        word = localStorage.getItem("searchWord")
    let user = ""
    if(localStorage.getItem("user") != null)
        user = JSON.parse(localStorage.getItem("user"))

    const logOut = ()=>{
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        window.location.reload()
    }
    const [itemsNum,cartItems] = GetAllProductsCartHook()

    return (
        <Navbar bg='dark' variant='dark' expand="lg" >
        <Container >
        <Navbar.Brand >
            <a href='/'> 
                <img src={logo} className='logo' alt=""></img>
            </a>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

        <Form.Control value={word} onChange={onSearch}  type="text"placeholder="ابـحـث..."className="me-2 ms-1  text-center w-100" aria-label='Search'/>
        
        <Nav className="me-auto ">
        {
            user.name ? (
                <NavDropdown title={user.name} id="basic-nav-dropdown" className='nav-text user-name position-relative d-flex justify-content-center p-'>
                    {
                        user.role === "admin" ? 
                        (
                        <NavDropdown.Item href="/admin/AllProduct"> لوحة التحكم</NavDropdown.Item>
                        )
                        :
                        (
                        <NavDropdown.Item href="/User/Profile"> الصفحة الشخصية</NavDropdown.Item>
                        )
                    }
                    <NavDropdown.Divider/>
                    <NavDropdown.Item onClick={logOut} href="/">تسجيل الخروج </NavDropdown.Item>
                </NavDropdown>
            )
            :(
                <NavLink href='/login' className='nav-text position-relative d-flex mt-3 justify-content-center p-1'>
                <img src={login} className="login-img " alt="sfvs" />
                <p style={{ color: "white" }}>دخول</p>
                

                </NavLink>
            )
        }
        

            <NavLink href='/cart' className='nav-text position-relative d-flex mt-3 justify-content-center p-1'>
            <img src={cart} className="login-img" alt="sfvs" />
            <p style={{ color: "white" }}>العربه</p>
            <span class="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-danger">
                    {itemsNum || 0}
                </span>
            </NavLink>

        </Nav>
        
        </Navbar.Collapse>
    </Container>
    </Navbar>
        
    )
}





export default NavBarLogin;
