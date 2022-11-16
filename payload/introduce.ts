import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하세요',
    '6년 차 개발자로 SI 위주 에 웹과 앱 서비스 를 개발/운영 하였으며, 주로 웹 서비스 개발을 담당하였으며, 필요한 상황에 따라서는 PL(project reader) 을 겸하였습니다. SI 위주에 프로젝트 이다 보니 고객에 빠른 니즈 를 파악 후 빠르게 개발해야 해서 Web Server, Back-end, Front-end, DB 등을 공부 했고 프로젝트 들은 성공적으로 마무리 했습니다.',
    '비즈니스 성장에 기여하는 일을 좋아합니다. 이를 위해 SI 위주에 경험을 살려 빠르게 개발하고 배포하는 역량을 쌓고자 꾸준히 공부하고 연구하고 있습니다.',
    '개발하는 것 은 다양한 사람과 협업을 통해 더욱 발전된 소프트웨어 가 탄생한다는 것 을 생각하기에 다양한 직무의 팀 구성원들 과 적극적으로 커뮤니케이션 한다는 것을 배웠습니다.',
  ],
  sign: 'HeonJung Kim',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
