import {Mode, SUMMARY} from '../../data/career';
import Chip from './Chip';
import ModeToggle from './ModeToggle';

export default function Header({
    mode,
    onModeChange,
}: {
    mode: Mode;
    onModeChange: (m: Mode) => void;
}) {
    return (
        <header className="mb-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
                            {SUMMARY.name}
                        </span>
                        <span className="ml-2 text-gray-800 dark:text-gray-100">
                            / {SUMMARY.title}
                        </span>
                    </h1>
                    <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl">
                        {SUMMARY.blurb}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                        {SUMMARY.highlights.map((h) => (
                            <Chip key={h}>{h}</Chip>
                        ))}
                    </div>
                </div>
            </div>

            {/* 모드 토글 */}
            <ModeToggle mode={mode} onModeChange={onModeChange} />
        </header>
    );
}
