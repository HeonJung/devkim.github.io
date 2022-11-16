import { CommonDescription } from '../component/common/CommonDescription';
import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Express',
    },
    {
      title: 'Django',
    },
    {
      title: 'Flask',
    },
    {
      title: 'Spring',
    },
  ],
};

const CICD: ISkill.Skill = {
  category: 'CICD',
  items: [
    {
      title: 'Jenkins',
    },
    {
      title: 'Gitlab-Runner',
    },
  ],
};

const Test: ISkill.Skill = {
  category: 'Test',
  items: [
    {
      title: 'JUnit',
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
    },
    {
      title: 'Oracle',
    },
    {
      title: 'Pgsql',
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'React.js',
    },
    {
      title: 'javascript',
    },
  ],
};

const GCP: ISkill.Skill = {
  category: 'GCP',
  items: [
    {
      title: 'Bigquery',
    },
  ],
};



const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, CICD ,Test,  database, frontend , GCP],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
