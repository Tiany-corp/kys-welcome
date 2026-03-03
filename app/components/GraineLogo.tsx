export default function GraineLogo({ className = "w-9 h-9", color = '#4D7C0F' }: { className?: string, color?: string }) {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M50 10C50 10 20 45 20 70C20 86.5685 33.4315 100 50 100C66.5685 100 80 86.5685 80 70C80 45 50 10 50 10Z"
                fill={color}
            />
            <path
                d="M50 35C45 50 45 70 50 85"
                stroke="#FAF7F2"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="60" cy="75" r="4" fill="#D4A574" />
        </svg>
    );
}
