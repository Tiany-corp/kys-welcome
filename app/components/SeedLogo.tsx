export default function SeedLogo({ className = "w-6 h-6" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M12 2C7.5 7.5 4 11.5 4 16C4 20.4183 7.58172 24 12 24C16.4183 24 20 20.4183 20 16C20 11.5 16.5 7.5 12 2Z"
                fill="currentColor"
            />
            <path
                d="M12 22C12 22 14 18 10.5 13"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    );
}
