export default function Chip({children}: React.PropsWithChildren) {
    return (
        <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs text-gray-700 dark:text-gray-200">
            {children}
        </span>
    );
}
