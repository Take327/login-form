import React from 'react';
import { Link } from 'react-router-dom'

type Props = {
    loginState: boolean
}

const Navi: React.FC<Props> = ({ loginState }) => {
    return (
        <>
            {(() => {
                if (!loginState) {
                    return (
                        <div>
                            <div>新規登録は<Link to="/signup">こちら</Link></div>
                            <div>ログインは' < Link to="/login" > こちら</Link></div>
                        </div>
                    )
                }
            })()}
        </>
    )
}

export default Navi