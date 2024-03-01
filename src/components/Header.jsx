import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { NavLink ,useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  return (
    <header className="flex justify-between p-5 items-center bg-[#F1F0EF] shadow min-h-12">
      <span className="font-bold border-l cursor-pointer" onClick={() => navigate("/")}>Trex Store</span>
      <nav className="flex gap-4 min-w-44">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/cart">
          <Badge badgeContent={cart?.length}>
            <ShoppingCartOutlinedIcon />
          </Badge>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
