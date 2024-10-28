'use client';

import {useState} from 'react';
import {FaStar, FaChevronDown, FaChevronUp} from 'react-icons/fa';

type Skill = {
    name: string;
    level: number;
};

type SkillsCategory = {
    languages: Skill[];
    frameworks: Skill[];
    databases: Skill[];
    infrastructure: Skill[];
    communication: Skill[];
};

type IsDetailedState = {
    [key in keyof SkillsCategory]: boolean;
};

const Skills = () => {
    // 초기 상태 타입 지정
    const [isDetailed, setIsDetailed] = useState<IsDetailedState>({
        languages: false,
        frameworks: false,
        databases: false,
        infrastructure: false,
        communication: false,
    });

    const skills: SkillsCategory = {
        languages: [
            {name: 'JavaScript', level: 5},
            {name: 'TypeScript', level: 5},
            {name: 'JAVA', level: 3},
            {name: 'Python', level: 3},
            {name: 'Go', level: 2},
        ],
        frameworks: [
            {name: 'Express', level: 5},
            {name: 'Nest.js', level: 4},
            {name: 'React', level: 3},
            {name: 'Next.js', level: 3},
            {name: 'Spring', level: 3},
        ],
        databases: [
            {name: 'Postgres', level: 4},
            {name: 'Redis', level: 4},
            {name: 'Kafka', level: 3},
            {name: 'Mysql', level: 3},
            {name: 'MariaDB', level: 3},
        ],
        infrastructure: [
            {name: 'Docker', level: 4},
            {name: 'Kubernetes', level: 3},
            {name: 'AWS', level: 3},
            {name: 'Jenkins', level: 3},
            {name: 'ArgoCD', level: 3},
        ],
        communication: [
            {name: 'Slack', level: 5},
            {name: 'Jira', level: 5},
            {name: 'Confluence', level: 5},
            {name: 'Notion', level: 5},
        ],
    };

    const calculateAverageLevel = (skills: Skill[]) => {
        const total = skills.reduce((acc, skill) => acc + skill.level, 0);
        return Math.round(total / skills.length);
    };

    const toggleDetailView = (category: keyof SkillsCategory) => {
        setIsDetailed((prev) => ({
            ...prev,
            [category]: !prev[category],
        }));
    };

    return (
        <section className="space-y-2">
            <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-8">Skills</h2>

            {Object.entries(skills).map(([category, skillSet]) => (
                <div key={category} className="space-y-4 bg-[#1a1a1a] p-4 rounded-md">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </h3>
                        <div className="flex items-center">
                            {!isDetailed[category as keyof SkillsCategory] && (
                                <div className="flex mr-4">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={`w-4 h-4 ${
                                                i < calculateAverageLevel(skillSet)
                                                    ? 'text-yellow-400'
                                                    : 'text-gray-600'
                                            }`}
                                        />
                                    ))}
                                </div>
                            )}
                            <button
                                onClick={() => toggleDetailView(category as keyof SkillsCategory)}
                                className="flex items-center text-sm text-blue-500 hover:text-blue-700 focus:outline-none"
                            >
                                {isDetailed[category as keyof SkillsCategory]
                                    ? 'Collapse'
                                    : 'Expand'}
                                {isDetailed[category as keyof SkillsCategory] ? (
                                    <FaChevronUp className="ml-1 w-4 h-4" />
                                ) : (
                                    <FaChevronDown className="ml-1 w-4 h-4" />
                                )}
                            </button>
                        </div>
                    </div>

                    {isDetailed[category as keyof SkillsCategory] && (
                        <ul className="space-y-4 mt-4">
                            {skillSet.map((skill, index) => (
                                <li
                                    key={index}
                                    className="px-4 py-2 rounded-md text-gray-300 shadow-sm flex items-center justify-between"
                                >
                                    <span>{skill.name}</span>
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                className={`w-4 h-4 ${i < skill.level ? 'text-yellow-400' : 'text-gray-600'}`}
                                            />
                                        ))}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </section>
    );
};

export default Skills;
