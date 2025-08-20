import {CERTS, POSTS, PROJECTS} from '../../data/career';
import Chip from './Chip';
import Section from './Section';

export default function PortfolioView() {
    return (
        <div>
            <Section
                title="사이드 프로젝트"
                subtitle=""
            >
                <div className="grid md:grid-cols-2 gap-6">
                    {PROJECTS.map((p, idx) => (
                        <article
                            key={idx}
                            className="group rounded-2xl border p-5 bg-white dark:bg-gray-950 hover:shadow-md transition"
                        >
                            <header className="flex items-start justify-between gap-2">
                                <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                    {p.period}
                                </span>
                            </header>
                            <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">
                                {p.description}
                            </p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {p.stack.map((s) => (
                                    <Chip key={s}>{s}</Chip>
                                ))}
                            </div>
                            {p.links?.length ? (
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {p.links.map((l) => (
                                        <a
                                            key={l.href}
                                            href={l.href}
                                            className="text-sm underline underline-offset-4 decoration-dotted text-gray-800 dark:text-gray-100 hover:text-indigo-600"
                                        >
                                            {l.label}
                                        </a>
                                    ))}
                                </div>
                            ) : null}
                        </article>
                    ))}
                </div>
            </Section>

            <Section title="기술 블로그" subtitle="">
                <ul className="space-y-3">
                    {POSTS.map((p) => (
                        <li key={p.href} className="flex items-start gap-3">
                            <span className="mt-1.5 h-2 w-2 rounded-full bg-indigo-500" />
                            <div>
                                <a
                                    href={p.href}
                                    className="font-medium hover:underline underline-offset-4"
                                >
                                    {p.title}
                                </a>
                                {p.note && (
                                    <p className="text-sm text-gray-600 dark:text-gray-300">
                                        {p.note}
                                    </p>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </Section>

            <Section title="보유 자격증" subtitle="">
                <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-3">
                        {CERTS.map((c) => (
                            <li key={`${c.name}-${c.issued}`} className="rounded-lg border p-5">
                                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                                    <div>
                                        <h3 className="text-base font-medium">{c.name}</h3>
                                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                            {c.org}
                                        </p>
                                    </div>
                                    <p className="mt-2 md:mt-0 text-xs text-zinc-600 dark:text-zinc-400">
                                        {c.issued}
                                        {c.expires ? ` — ${c.expires}` : ''}
                                    </p>
                                </div>
                                {c.credUrl ? (
                                    <div className="mt-3">
                                        <a
                                            href={c.credUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block rounded-md border px-3 py-1 text-xs hover:bg-zinc-50 dark:hover:bg-zinc-800"
                                        >
                                            인증 보기 ↗
                                        </a>
                                    </div>
                                ) : null}
                            </li>
                        ))}
                    </ul>
                </div>
            </Section>
        </div>
    );
}
