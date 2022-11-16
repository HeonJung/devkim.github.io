import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import image from '../asset/_sample.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '김헌중 (KimHeonJung)',
    small: '',
  },
  contact: [
    {
      title: 'sorcer7110@gmail.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: '010-8391-8291',
      icon: faPhone,
      badge: true,
    },
  ],
  notice: {
    title: "부재시 문자로 연락 부탁드립니다.",
    icon: faBell,
  },
};

export default profile;
