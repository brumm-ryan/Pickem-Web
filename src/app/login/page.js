import { Login } from "@/componenets/login";
import {config} from "@/config/dev";

export default function LoginPage() {
    console.log(config);
    return (
        <main>
            <Login></Login>
        </main>
    )
}
