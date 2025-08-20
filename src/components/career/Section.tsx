export default function Section({
    title,
    subtitle,
    children,
}: React.PropsWithChildren<{title: string; subtitle?: string}>) {
    return (
        <section className="my-10">
            <div className="mb-6">
                <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
                {subtitle && <p className="text-sm text-muted-foreground/80 mt-1">{subtitle}</p>}
            </div>
            {children}
        </section>
    );
}
