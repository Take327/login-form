import React from 'react';
import { Link } from 'react-router-dom'



const Login: React.FC = () => {
    return(
        <>
        新規登録は<Link to="/Signup">こちら</Link>から
        </>
    )
}

export default Login