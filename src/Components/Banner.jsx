import React from 'react';
export const Banner = (imageUrl, height, children) => {
    const BannerStyle = {
        height: `${height}px`,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return(
        <div style={BannerStyle}>
            {children}
        </div>
    )

}