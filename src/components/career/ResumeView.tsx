import {EXPERIENCES, SKILLS} from '../../data/career';
import Chip from './Chip';
import Section from './Section';

export default function ResumeView() {
    return (
        <div>
            <Section
                title="경력 타임라인"
                subtitle=""
            >
                <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-2">
                    {EXPERIENCES.map((exp, idx) => (
                        <li key={idx} className="mb-8 ml-6">
                            <span className="absolute -left-2.5 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white text-xs shadow" />
                            <div className="flex items-center justify-between flex-wrap gap-2">
                                <h3 className="text-lg font-semibold">
                                    {exp.company} · {exp.role}
                                </h3>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    {exp.period}
                                </span>
                            </div>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">{exp.summary}</p>
                            <ul className="mt-3 grid gap-2 md:grid-cols-2">
                                {exp.achievements.map((a) => (
                                    <li key={a} className="flex items-start gap-2">
                                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-400" />
                                        <span className="text-sm text-gray-700 dark:text-gray-200">
                                            {a}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
            </Section>

            <Section
                title="핵심 스킬"
                subtitle=""
            >
                <div className="grid md:grid-cols-2 gap-6">
                    {SKILLS.map((g) => (
                        <div
                            key={g.cat}
                            className="rounded-2xl border p-4 bg-white dark:bg-gray-950"
                        >
                            <h4 className="font-semibold mb-3">{g.cat}</h4>
                            <div className="flex flex-wrap gap-2">
                                {g.items.map((it) => (
                                    <Chip key={it}>{it}</Chip>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
