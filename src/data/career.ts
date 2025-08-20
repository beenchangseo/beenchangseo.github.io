export type Mode = 'resume' | 'portfolio';

type Summary = {
    name: string;
    title: string;
    blurb: string;
    highlights: string[];
};

type Experience = {
    company: string;
    role: string;
    period: string;
    summary: string;
    achievements: string[];
};

type Project = {
    title: string;
    period: string;
    description: string;
    stack: string[];
    links: {label: string; href: string}[];
};

type Post = {
    title: string;
    href: string;
    note: string;
};

type Skills = {
    cat: string;
    items: string[];
};

type Cert = {
    name: string;
    org: string;
    issued: string;
    expires?: string;
    credId?: string;
    credUrl?: string;
};

export const SUMMARY: Summary = {
    name: '서창빈',
    title: 'Node.js 기반 백엔드 개발자',
    blurb: '글로벌 가상자산 거래소 Probit 에서 백엔드 시스템 개발을 담당하고 있습니다.',
    highlights: [
        '모놀리식 → MSA 전환 및 배포 안정화',
        '분당 2만+ 알림 처리 푸시 서버 설계',
        '거래/정산/펌뱅킹 등 금융 백엔드 도메인',
        'RDS 최적화 및 대용량 처리',
    ],
};

export const EXPERIENCES: Experience[] = [
    {
        company: '디앤에스에버',
        role: 'SRE · 백엔드 엔지니어',
        period: '2023.12 – 재직중',
        summary: '가상 자산 거래소 Probit Global의 거래소 서비스 백엔드 개발',
        achievements: [
            'SRE 업무 담당',
            'RDS 슬로우 쿼리 튜닝 및 최적화',
            'P2P 거래 시스템 개발',
            '수수료 없는 내부이체 시스템 개발',
            '처리율 제한 장치 개선',
        ],
    },
    {
        company: '오션스',
        role: '백엔드 엔지니어',
        period: '2022.09 – 2023.11',
        summary: '가상 자산 거래소 Probit Korea의 거래소 서비스 백엔드 개발',
        achievements: [
            '대용량 푸시 서버 구축',
            'QR 로그인/2FA, 보이스 ARS 인증 도입',
            '펌뱅킹 KRW 입출금 통신 모듈 개발',
            '자금세탁방지(AML) 백오피스 개발',
        ],
    },
    {
        company: '동부아이씨티',
        role: '백엔드 엔지니어',
        period: '2019.03 – 2022.06',
        summary: 'ITS(Intelligent Transport Systems 지능형 교통 체계) 개발 및 유지보수',
        achievements: [
            '도로교통 관제/신호제어 서버 개발',
            '열화상 카메라 교차로 좌회전 검지기 통신 모듈 개발',
            'CI/CD 자동화 도입, 운영 안정화',
        ],
    },
];

export const PROJECTS: Project[] = [
    {
        title: 'android-iphone-media-migrator',
        period: '2025',
        description:
            '안드로이드 기기에서 아이폰으로 사진/동영상을 마이그레이션 할 때 메타데이터를 자동으로 보정하는 Node.js 도구',
        stack: ['Node.js', 'ADB'],
        links: [
            {
                label: '블로그: 안드로이드 → 아이폰 사진/동영상 메타데이터 보정 마이그레이션하기',
                href: '/blog/post/android-to-iphone-photo-metadata-fix',
            },
        ],
    },
    {
        title: 'beenslab-hitmark',
        period: '2025',
        description:
            '블로그/페이지 조회수 카운터 – AWS Lambda + API Gateway + Firebase Firestore로 SVG 뱃지 제공',
        stack: ['TypeScript', 'AWS', 'Firebase'],
        links: [
            {
                label: '블로그: 블로그 방문자 수, 직접 카운팅 시스템 구축기',
                href: '/blog/post/blog-visitor-counter-build',
            },
        ],
    },
    {
        title: 'create-oauth-app',
        period: '2024',
        description: 'OAuth 2.0 인증 서버 스타터 키트(NestJS/Prisma/Redis, 세션 기반 인증)',
        stack: ['NestJS', 'Prisma', 'RDS/Redis'],
        links: [],
    },
    {
        title: 'beenchangseo.github.io',
        period: '2024',
        description: 'GitHub Pages 블로그에서 출발하여 Next.js로 마이그레이션한 블로그 프로젝트',
        stack: ['Next.js', 'Github Actions', 'Vercel'],
        links: [],
    },
    {
        title: 'hangle-to-romanized',
        period: '2023',
        description: '한글 인명 로마자 변환기',
        stack: ['Node.js'],
        links: [],
    },
    {
        title: 'sqs-provider',
        period: '2023',
        description: 'AWS SQS를 간편히 쓰기 위한 커스텀 라이브러리 (npm publish)',
        stack: ['Node.js', 'AWS SQS', 'npm'],
        links: [],
    },
];

export const POSTS: Post[] = [
    {
        title: 'Node.js 이벤트 리스너 안의 비동기 함수, 어디까지 안전할까? (EventEmitter with async)',
        href: '/blog/post/node-event-emitter-async',
        note: '실운영 “빈 객체 전송” 이슈를 계기로 이벤트 기반 동기/비동기 처리 원칙 정리',
    },
    {
        title: '비동기 처리는 언제 해야 할까? - Transactional Outbox 패턴으로 메시지 유실 방지하기',
        href: '/blog/post/transactional-outbox-async-pattern',
        note: 'Outbox 패턴, 멱등·재시도·복구 전략까지 실전 코드로 설명',
    },
    {
        title: 'PostgreSQL Read-Only 레플리카에서 데이터가 바로 안 보이는 이유 + 직접 실험해보기',
        href: '/blog/post/postgresql-read-replica',
        note: 'Streaming Replication 지연을 실험으로 재현하고 운영 가이드 정리',
    },
    {
        title: '블로그 방문자 수, 직접 카운팅 시스템 구축기',
        href: '/blog/post/blog-visitor-counter-build',
        note: 'AWS Lambda + Firebase + SVG로 방문자 카운팅 시스템 직접 구축',
    },
];

export const SKILLS: Skills[] = [
    {
        cat: 'Languages',
        items: ['TypeScript', 'Node.js', 'Java', 'SQL', 'Python', 'C++'],
    },
    {
        cat: 'Backend/Framework',
        items: ['NestJS', 'Express', 'gRPC', 'WebSocket', 'OAuth2'],
    },
    {cat: 'DB/Cache', items: ['PostgreSQL', 'Redis', 'ClickHouse']},
    {cat: 'Infra', items: ['AWS', 'Nginx', 'Docker', 'Kafka', 'Kubernetes', 'ArgoCD']},
    {cat: 'Observability', items: ['Datadog', 'CloudWatch', 'Prometheus']},
];

export const CERTS: Cert[] = [
    {
        name: 'AWS Solutions Architect – Associate',
        org: 'Amazon Web Services',
        issued: '2024-07',
        expires: 'No Expiration',
        credUrl: 'https://...',
    },
];
