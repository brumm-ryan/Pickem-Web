import PersistentDrawerLeft from "@/componenets/drawer";
import {useEffect} from "react";


export const HomePage = (props) => {
    const user = props?.user;

    return(
        <PersistentDrawerLeft></PersistentDrawerLeft>
    )
}

export default HomePage