import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'GooldenPlanet',
      position: 'Back-end Developer',
      startedAt: '2022-02',
      endedAt: '2022-06',
      descriptions: [
        'KB카드 AI플랫폼 구축 개발(SI)',
        'flask 로 api 서버 구축 및 외부 업체로부터 데이터 가공 후 BigQuery 및 GCS 로 적재 개발',
        'docker image 를 container Registry 로 저장 및 gitlab runner 로 CICD 배포 진행 하기 위한 yaml 파일 작성',
        'KB 증권사 에서 사용되고 있는 prism 제품과 gitlab runner 로그 를 체크 하기 위한 쉘 스크립트 작업',
        'CD/CD 배포 시스템 구축 ',
      ],
      skillKeywords: ['Flask(Python)' ,'CICD', 'BigQuery', 'GCP' , 'GCS' , 'Container Registry' , 'Shell Script' , 'GibLab Runner'],
    },
    {
      title: 'GooldenPlanet',
      position: 'Back-end Developer',
      startedAt: '2021-08',
      endedAt: '2021-12',
      descriptions: [
        '양궁협회 Admin사이트 리뉴얼(SI)',
        '페이지 리뉴얼 을 위한 sql 개선 과 query 추가',
        '기존 온프레미스 사이트 에서 GCP cloud 환경으로 변경 작업',
        '특정 페이지 에서 Excel 사용을 위한 Spring Poi 로 개발 진행',
        '배포 작업 진행'
      ],
      skillKeywords: ['Spring', 'CICD', 'GCP' , 'Mssql'],
    },
    {
      title: 'GooldenPlanet',
      position: 'Back-end Developer',
      startedAt: '2020-09',
      endedAt: '2021-09',
      descriptions: [
        '아모레 퍼시픽 광고 문법 체크 사이트 구축 개발(SI)',
        'Express 로 api 서버 구축 및 flask 모델 서버와 통신 서버 개발 구축',
        'React 로 front 서버 개발 구축',
        '공지사항 대시보드 개발 과 DB Table 설계 back-end 개발',
        'admin 작업자 들 이 사용자 가 입력한 문법을 새롭게 모델링 할수 있게 맞춤법 대시보드 개발 과 DB table 설계 back-end 개발',
        '사용자 로그인 페이지 개발 DB tablel 설계 back-end 개발',
        '문안 위험도 분류 를 표기 하기 위한 chart view 개발',
        'nginx 환경 설정 진행',
        'CI/CD 배포 환경을 위한 CodeDeploly 와 Jenkins 로 자동화 배포 진행 및 CodeDeploly script 작성',
        '모델 서버 부하가 있어 부하 방지를 위해 LB 도입',
        '이슈) React Draft lib 에서는 전처리 요청 및 문법 단위로 클릭이 안되는 전처리 이슈가 발생 하여 Draft lib 를 커스텀 마이징 작업'
      ],
      skillKeywords: ['React', 'Express', 'Flask' , 'CICD', 'AWS' , 'Pgsql' , 'Jenkins' , 'CodeDeploly' ],
    },
    {
      title: 'KJ GLOBAL',
      position: 'Back-end Developer',
      startedAt: '2020-05',
      endedAt: '2020-08',
      descriptions: [
        'front-end 실시간 통신 최적화 개발 진행',
        '암호화폐 사이트 와 실시간 으로 통신 하기 위한 websocket 으로 chart view 개발',
        'Express 서버 Javascript를 Typescript로 교체 및 로직 리펙토링',
        'jwt 로 검증 하는 interface 및 back-end 개발',
      ],
      skillKeywords: ['jquery', 'Express' , 'CICD', 'TypeScript' , 'AWS' , 'Mysql' , 'DJango'],
    },
    {
      title: '공간과 가치',
      position: 'Back-end Developer',
      startedAt: '2019-07',
      endedAt: '2020-04',
      descriptions: [
        'KT 실갈미디어 플랫폼 운영/개발(SI)',
        '대시보드 slowSql 수정 및 개선 리펙토링',
        'Front-end javascript slowScript 수정 및 최적화 진행 ',
        '배포 진행',
      ],
      skillKeywords: ['Spring' , 'pgsql' , 'jboss' , 'linux' , 'jquery'],
    },
    {
      title: '유니위즈',
      position: 'Back-end Developer',
      startedAt: '2018-10',
      endedAt: '2019-06',
      descriptions: [
        'LG 하우시스(SI)',
        'admin 대시보드 slowSql 수정 및 개선 리펙토링',
        'admin 특정 사이트 excel slowSql 리펙토링 및 excel poi 메모리 릭 이슈 발견 되어 메모리 부하 수정 리펙토링',
        '기존 html 페이지 를 Angular 컴포넌트 로 수정 및 webview 대응',
        '배포 진행',
      ],
      skillKeywords: ['Spring' , 'Oracle' , 'Angular' , 'linux' , 'jquery'],
    },
    {
      title: '신명정보통신',
      position: 'SoftWare Engineer',
      startedAt: '2016-08',
      endedAt: '2018-04',
      descriptions: [
        'SmartFactory , Iot 사업 , MES(SI)',
        '산업 공정 데이터 출력을 위해 RS-232 케이블 통신 개발 ',
        '실시간 공정 데이터 출력을 위한 산업공정 tcp/ip 통신 개발',
        '공정 데이터 제어를 위한 공정 제어 시스템 개발 구축 ',
        'MES 데이터 검증을 위한 DB 스키마 설계',
        '온도 데이터 모니터링 이상 발생 시 알림 문자 푸쉬 를 위한 S/W 및 H/W 개발',
        '공정 중앙 모니터링 시스템 개발',
        'IOT 제품을 위한 Web 개발',
        '배포 진행 및 S/W 설치 작업'
      ],
      skillKeywords: ['Spring' , 'Oracle' , 'MS-SQl' , 'MYSQL' , 'Android' , 'C# 응용프로그램' , 'Java'],
    },
  ],
};

export default experience;
