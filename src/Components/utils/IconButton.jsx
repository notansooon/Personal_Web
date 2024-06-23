import { useRef } from "react";
import React from "react";


export default function IconButton({ children, color, text, ...props }) {
    const [hovered, setHovered] = React.useState(false);
    const ref = useRef(null);

    return (
        <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            {...props}
            className={`flex p-2 rounded-lg text-white ${color || 'bg-black'}`}
        >
            {children}
            <div
                style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
                className="overflow-x-hidden transition-all duration-300 ease-out"
            >
        <span ref={ref} className="px-1.5">
          {text}
        </span>
            </div>
        </button>
    );
}
