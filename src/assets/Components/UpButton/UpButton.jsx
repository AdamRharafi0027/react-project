// import './UpButton.css'
// import {Button} from '../index'
// import 'bootstrap-icons/font/bootstrap-icons.css';


// const UpButton = ()=> {



//     const GoTop = ()=> {
//         scroll({
//             top:0,
//             behavior: 'smooth',
//         })
//     }
    

//     return (
//         <>
//             <Button  className='fixed-bottom btnUp'>
//                 <i onClick={GoTop}   className="bi bi-arrow-up"></i>
//             </Button>
//         </>
//     )
// }
// export default UpButton

import './UpButton.css';
import { Button } from '../index';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState, useEffect } from 'react';

const UpButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        // Show the button if scrolled down, otherwise hide it
        setIsVisible(window.scrollY > 500);
    };

    const GoTop = () => {
        scroll({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        // Add the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <Button className="fixed-bottom btnUp" click={GoTop}>
                    <i className="bi bi-arrow-up"></i>
                </Button>
            )}
        </>
    );
};

export default UpButton;
