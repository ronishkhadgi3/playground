import React, { useState } from 'react';
import './Exercise3.scss';


function Theme() {
    const [theme, setTheme] = useState('lighttheme')

    return (
        <div>
            <div className={theme}> Click to Change</div>
            <button className="Button" onClick={()=>setTheme('darktheme')}> Click Button </button>
            
            
        </div>

        
    )
}

export default Theme;


