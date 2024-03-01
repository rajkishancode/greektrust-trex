import { Button } from "@mui/material";
import { useDocumentTitle } from "../hooks";

import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  useDocumentTitle("TeeRex | Home");
  return (
    <div className="grid md:grid-cols-2 items-center justify-center text-left">
      <div className="flex flex-col items-start gap-5 pl-3">
        <span className="italic text-slate-500">Cool Colors</span>
        <p className="lg:text-6xl md:text-2xl font-sans">Dream Collection</p>
        <p className="font-semibold">
          Upgrade your wardrobe with TeeRex Store! We offer a curated selection
          of essential tees, hoodies, and polos, perfect for any occasion.
          Whether you're hitting the gym, chilling casually, or partying the
          night away, we have the perfect t-shirt for you. Shop now and
          experience affordable prices and fast delivery!
        </p>
        <Button variant="contained" onClick={() => navigate("/products")}>
          See What's New
        </Button>
      </div>
      <div className="py-1">
        <img
          className="h-[670px] w-[670px]"
          src="https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="collection of t-shirts"
        />
      </div>
    </div>
  );
}
