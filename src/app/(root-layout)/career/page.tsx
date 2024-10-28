import Projects from '../../../components/career/projects';
import Skills from '../../../components/career/skills';
import WorkExperience from '../../../components/career/workExperience';

export default function CareerPage() {
    return (
        <>
            <header className="max-w-screen-md mx-auto mb-16">
                <h1 className="text-4xl font-bold text-center">Career</h1>
                <p className="text-center mt-4 text-gray-400">
                    WIP...
                </p>
            </header>

            <main className="max-w-screen-md mx-auto space-y-16">
                <WorkExperience />
                <Projects />
                <Skills />
            </main>
        </>
    );
}
