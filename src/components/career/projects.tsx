const Projects = () => {
    const projects = [
        {
            title: 'beenchangseo.github.io',
            description: 'Next.js로 작성된 블로그 프로젝트 입니다.',
        },
        {
            title: 'create-oauth-app',
            description:
                'OAuth 2.0 규격에 기반한 자체 OAuth 2.0 인증 서버 구축을 위한 스타터 키트로, 보안, 확장성, 그리고 쉬운 구현을 목표로 설계되었습니다.',
        },
        {
            title: 'hangle-to-romanized',
            description: '한글인명 로마자 변환기 프로젝트입니다.',
        },
        {
            title: 'sqs-provider',
            description:
                'npm publish를 테스트하기 위한 프로젝트입니다. AWS SQS (Amazon Simple Queue Service)를 쉽게 사용할 수 있도록 돕는 커스텀 라이브러리입니다.',
        },
    ];

    return (
        <section className="space-y-8">
            <h2 className="text-2xl font-semibold border-b border-gray-300 dark:border-gray-700 pb-2 mb-8">
                Projects
            </h2>
            <div className="space-y-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 dark:border-gray-800 p-6 rounded-lg bg-white dark:bg-[#1a1a1a] shadow-lg"
                    >
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {project.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">
                            {project.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
