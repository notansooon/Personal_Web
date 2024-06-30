import React from 'react';
import image from './BannerImage.png'

export const ApplyBanner = (imageUrl = image, height, children) => {
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