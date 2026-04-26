import { useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import ProjectDetailModal from './components/ProjectDetailModal';

export interface Project {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  period: string;
  techStack: string[];
  role: string;
  overview: string;
  keyFeatures: string[];
  github?: string;
  demo?: string;
  troubleShooting: {
    title: string;
    trouble: string;
    solution: string;
    result: string;
  }[];
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      name: '실시간 채팅 서비스',
      description: '대규모 트래픽을 처리하는 실시간 채팅 플랫폼',
      thumbnail: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&h=400&fit=crop',
      period: 'Mar 2024 – Jun 2024',
      techStack: ['Java', 'Spring Boot', 'WebSocket', 'Redis', 'MySQL', 'AWS'],
      role: 'Backend Lead Developer',
      overview: '대규모 트래픽을 처리하는 실시간 채팅 서비스의 백엔드 시스템을 설계하고 개발했습니다. WebSocket을 활용한 양방향 통신과 Redis를 통한 메시지 브로커 구조를 구현하여 안정적인 실시간 메시징 환경을 제공했습니다.',
      keyFeatures: [
        '실시간 양방향 메시징 시스템',
        'Redis Pub/Sub 기반 메시지 브로커',
        '동시 접속자 5000명 이상 처리',
        '메시지 영속성 및 검색 기능'
      ],
      github: 'https://github.com/yebin-kim/realtime-chat',
      troubleShooting: [
        {
          title: '메시지 지연 개선',
          trouble: '동시 접속자 증가로 인해 메시지 지연이 발생했고, 평균 응답 시간이 3초까지 증가했습니다.',
          solution: 'Redis Pub/Sub 도입, DB 쿼리 최적화, 커넥션 풀 튜닝을 통해 주요 병목 지점을 해소했습니다.',
          result: '평균 응답 시간을 200ms로 줄였고, 동시 접속자 5000명 이상을 안정적으로 처리할 수 있게 됐습니다.'
        }
      ]
    },
    {
      id: 2,
      name: '전자상거래 플랫폼',
      description: '대용량 트랜잭션 처리를 위한 결제 및 주문 시스템',
      thumbnail: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
      period: 'Sep 2023 – Feb 2024',
      techStack: ['Spring Boot', 'JPA', 'PostgreSQL', 'Kafka', 'Docker'],
      role: 'Backend Developer',
      overview: '대용량 트랜잭션을 안전하게 처리하는 전자상거래 플랫폼의 결제 시스템과 주문 관리 API를 설계 및 구현했습니다. 동시성 제어와 트랜잭션 일관성을 보장하여 안정적인 서비스를 제공했습니다.',
      keyFeatures: [
        '분산 락 기반 재고 관리',
        'Kafka를 통한 비동기 주문 처리',
        '결제 트랜잭션 일관성 보장',
        '주문 상태 추적 시스템'
      ],
      github: 'https://github.com/yebin-kim/ecommerce-platform',
      troubleShooting: [
        {
          title: '재고 차감 동시성 제어',
          trouble: '결제 트랜잭션이 동시에 처리되면서 재고가 중복 차감되거나 누락되는 오류가 발생했습니다.',
          solution: 'Pessimistic Lock과 분산 락을 적용하고 트랜잭션 격리 수준을 조정해 동시성 제어를 강화했습니다.',
          result: '재고 오차율을 0%로 낮췄고, 결제 성공률을 99.8%까지 끌어올렸습니다.'
        }
      ]
    },
    {
      id: 3,
      name: '콘텐츠 추천 시스템',
      description: '사용자 행동 기반 개인화 추천 엔진',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      period: 'Jan 2023 – Aug 2023',
      techStack: ['Spring Boot', 'MongoDB', 'ElasticSearch', 'AWS Lambda'],
      role: 'Backend Developer',
      overview: '사용자 행동 데이터를 분석하여 개인화된 콘텐츠를 추천하는 시스템을 개발했습니다. ElasticSearch를 활용한 빠른 검색과 캐싱 전략을 통해 실시간 추천 성능을 최적화했습니다.',
      keyFeatures: [
        '사용자 행동 기반 추천 알고리즘',
        'ElasticSearch 기반 실시간 검색',
        '배치 처리를 통한 추천 사전 계산',
        'A/B 테스트 기반 추천 정확도 개선'
      ],
      github: 'https://github.com/yebin-kim/recommendation-system',
      troubleShooting: [
        {
          title: '추천 응답 속도 개선',
          trouble: '추천 알고리즘 실행 시간이 길어지면서 평균 응답 시간이 5초 수준까지 증가했습니다.',
          solution: 'ElasticSearch 캐싱 전략을 도입하고 배치 처리로 추천 결과를 사전 계산하도록 구조를 변경했습니다.',
          result: '응답 시간을 500ms까지 단축했고, 추천 정확도도 15% 향상됐습니다.'
        }
      ]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="size-full bg-[#F9FAFB] overflow-y-auto">
      <Navigation onNavigate={scrollToSection} />

      <HeroSection onScrollDown={() => scrollToSection('about')} />
      <AboutSection />
      <ProjectsSection projects={projects} onProjectClick={setSelectedProject} />
      <ContactSection />

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
