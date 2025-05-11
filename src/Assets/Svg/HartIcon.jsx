const HartIcon = ({ features }) => {
    return (
        <svg
            width='25'
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25.755 24.173"
            stroke={features.stroke || 'black'}
            fill={features.stroke || 'black'}>
            <path
                dataName="like (1)"
                d="M24.7 8.684c-.364-3.974-3.177-6.858-6.7-6.858a6.655 6.655 0 0 0-5.7 3.285 6.413 6.413 0 0 0-5.564-3.285C3.216 1.826.4 4.71.042 8.684a7.072 7.072 0 0 0 .21 2.606 11.178 11.178 0 0 0 3.425 5.715l8.618 7.821 8.766-7.82a11.18 11.18 0 0 0 3.425-5.716 7.087 7.087 0 0 0 .214-2.606z"
                fill={features.color || '#fff'}
                stroke={features.stroke || 'black'}
                transform="translate(.350 -1.076)"
                strokeWidth='2'></path>
        </svg>
    )
}

export default HartIcon;