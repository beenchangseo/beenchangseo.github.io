const WorkExperience = () => {
    const experiences = [
        {
            company: '주식회사 디앤에스에버',
            role: 'Backend developer',
            description:
                '가상 자산 거래소 Probit Global의 거래소 서비스 백엔드 개발',
            duration: '2023-12 - 재직중',
        },
        {
            company: '주식회사 오션스',
            role: 'Backend developer',
            description:
                '가상 자산 거래소 Probit Korea의 거래소 서비스 백엔드 개발',
            duration: '2022-09 - 2023-11',
        },
        {
            company: '주식회사 동부아이씨티',
            role: 'Backend developer',
            description:
                'ITS(Intelligent Transport Systems 지능형 교통 체계) 개발 및 유지보수',
            duration: '2022-09 - 2023-11',
        },
    ];

    return (
        <section className="space-y-8">
            <h2 className="text-2xl font-semibold border-b border-gray-300 dark:border-gray-700 pb-2 mb-8">
                Work Experience
            </h2>
            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 dark:border-gray-800 p-6 rounded-lg bg-white dark:bg-[#1a1a1a] shadow-lg"
                    >
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {exp.company}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">Role: {exp.role}</p>
                        <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.description}</p>
                        <p className="text-gray-500 dark:text-gray-500 mt-4 text-sm">
                            {exp.duration}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkExperience;
