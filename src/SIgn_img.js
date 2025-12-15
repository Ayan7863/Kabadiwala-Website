// import React from 'react'

// const SIgn_img = () => {
//     return (
//         <>
//             <div className="right_data mt-5" style={{ width: "100%" }}>
//                 <div className="sign_img mt-5">
//                     <img src="./sign.svg" style={{ maxWidth: 400 }} alt="" />
//                 </div>
//             </div>
//         </>
//     )
// }

// export default SIgn_img
import React, { useState, useEffect } from 'react';

const SIgn_img = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Update the state based on the window width
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };

        // Initial check on component mount
        handleResize();

        // Listen for window resize events
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className="right_data mt-5" style={{ width: '100%' }}>
                <div className="sign_img mt-5">
                    {isMobile ? null : (
                        <img src="./sign.svg" style={{ maxWidth: 400 }} alt="" />
                    )}
                </div>
            </div>
        </>
    );
};

export default SIgn_img;
