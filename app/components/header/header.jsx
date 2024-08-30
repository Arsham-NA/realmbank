"use client";
import "./_header.scss";
import Link from "next/link";
import { IoPersonOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { BsX } from "react-icons/bs";
import { usePathname, useRouter } from "next/navigation";


const Header = () => {

	const pathname = usePathname();
	const router = useRouter();
	
	
	return (
		<>
			<header className="header w-100 mx-auto">

				<div className="logo_section">
					<p className="logo" onClick={() => router.push("/")}>Realmbank</p>
				</div>
				
				<nav className="nav_links d-none d-md-flex">
					<ul>
						<li><Link href={"/"} className={pathname === "/" ? "active" : undefined} >Main Page</Link></li>
						<li><Link href={"/houses"} className={pathname === "/houses" ? "active" : undefined}>Houses</Link></li>
						<li><Link href={"/users"} className={pathname === "/users" ? "active" : undefined}>users</Link></li>
						<li><Link href={"/about-us"} className={pathname === "/about-us" ? "active" : undefined}>About us</Link></li>
						<li><Link href={"/contact-us"} className={pathname === "/contact-us" ? "active" : undefined}>contact us</Link></li>
						<li><Link href={"/faq"} className={pathname === "/faq" ? "active" : undefined}>FAQ</Link></li>
						<li className="vertical_line"></li>
						<li className="auth_section">
							<div className="auth_border">
								<IoPersonOutline className="w-100 h-100" />
							</div>
							<Link href={"/login"} className={pathname === "/login" ? "active" : undefined}>login</Link>
							<span className="mx-2">/</span>
							<Link href={"/register"} className={pathname === "/register" ? "active" : undefined}>sign up</Link>
						</li>
					</ul>
				</nav>

				<div className="burger_menu_section d-flex d-md-none" >
					<div className="burger_menu_border" data-bs-toggle="offcanvas" href="#side_bar" role="button" aria-controls="side_bar">
						<FaBars className="w-100 h-100 burger_menu_icon"/>
					</div>
				</div>

			</header>


			<aside className="offcanvas offcanvas-end vh-100" tabIndex="-1" id="side_bar" aria-labelledby="side_barLabel" style={{maxWidth: "60vw"}}>
				<ul>
					<li><Link href={"/"} className={pathname === "/" ? "active" : undefined} >Main Page</Link></li>
					<li><Link href={"/houses"} className={pathname === "/houses" ? "active" : undefined}>Houses</Link></li>
					<li><Link href={"/users"} className={pathname === "/users" ? "active" : undefined}>users</Link></li>
					<li><Link href={"/about-us"} className={pathname === "/about-us" ? "active" : undefined}>About us</Link></li>
					<li><Link href={"/contact-us"} className={pathname === "/contact-us" ? "active" : undefined}>contact us</Link></li>
					<li><Link href={"/faq"} className={pathname === "/faq" ? "active" : undefined}>FAQ</Link></li>
					<li className="auth_section">
					<div className="auth_border">
						<IoPersonOutline className="w-100 h-100" />
						</div>
						<Link href={"/login"} className={pathname === "/login" ? "active" : undefined}>login</Link>
						<span className="mx-2">/</span>
						<Link href={"/register"} className={pathname === "/register" ? "active" : undefined}>sign up</Link>
					</li>
				</ul>
				<div className="btn_close_border" data-bs-dismiss="offcanvas" aria-label="Close">
					<BsX className="w-100 h-100 text-white"/>
				</div>
			</aside>
		</>
	)
}

export default Header;