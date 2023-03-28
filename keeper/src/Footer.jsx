import React from 'react';

function Footer (){
    const year = new Date().getFullYear()
    return <footer>Copyright &#169;{year}</footer>
}

export default Footer