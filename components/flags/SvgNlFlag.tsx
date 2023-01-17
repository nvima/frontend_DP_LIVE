export const SvgNlFlag = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 512 512"
            className="w-8 h-8 us:w-7 us:h-7"
        >
            <mask id="a">
                <circle cx="256" cy="256" r="256" fill="#fff" />
            </mask>
            <g mask="url(#a)">
                <path
                    fill="#eee"
                    d="m0 167 253.8-19.3L512 167v178l-254.9 32.3L0 345z"
                />
                <path fill="#a2001d" d="M0 0h512v167H0z" />
                <path fill="#0052b4" d="M0 345h512v167H0z" />
            </g>
        </svg>
    );
};
