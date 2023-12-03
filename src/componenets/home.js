"use client"
import PersistentDrawerLeft from "@/componenets/drawer";
import {useRouter} from "next/navigation";


export const Home = () => {
    const router = useRouter();

    return(<PersistentDrawerLeft></PersistentDrawerLeft>)
}

export default Home