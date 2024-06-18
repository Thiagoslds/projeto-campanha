import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Rodape from "../components/Rodape";

export default function RootLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Rodape />
        </>
    );
}