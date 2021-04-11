import React from 'react';
import { Link } from 'react-router-dom'



const Navi: React.FC = () => {
    return (
        <div>
            新規登録は<Link to="/signup">こちら</Link><br />
            ログインは<Link to="/login">こちら</Link>
        </div>
    )
}

export default Navi