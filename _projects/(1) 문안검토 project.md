---
name: 아모레퍼시픽 문안검사 project
tools: [Node JS , React , Python , AWS , AWS CodeDeploy , postgresql , jenkins]
image: /image/grammary.png
description: 광고성 문법 을 체크 하기 위한 사이트 입니다.

# external_url: https://www.google.com
---

<br>
### **프로젝트 소개*

<br>
<br>

아모레 퍼시픽 광고 마케터 들이 광고성 문법 을 아모레 퍼시픽 에서 사용하는 법률 문법으로 교체 하는 사이트 이며문법에 위험도 분류를 체크 및 위험도 분류가 높은 단어 는 위험도가 낮은 단어로 교체 시켜 주며 , 타 사이트 에서는 현제 광고를 어떡해 표시 하는지 체크 및 admin 이 공지사항
문법 정리 사용자 관리 등을 할수 있습니다.

<br>

### 담당

프로젝트에서 back , front 개발 과 DB 설계<br>
grammary 와 비슷한 UI 로 개발 및 사용자 에게 데이터 입력을 받고 enter key 입력 시 백엔드 와 통신 해서 해당 결과 를 프론트 에게 학습된 모델 전처리 기능을 구현 , 및 맞춤법 검사를 위해 부산 대학교 API 와 카카오 API 맞춤법 이용 <br>


* node js 로 back 개발 <br>
* react 로 front 개발 <br>
* 공지사항 대시보드 개발 <br>
* 주간 맞춤법 대시보드 개발 <br>
* 사용자 로그인 개발 <br>
* 아모레 에서 사용되는 정보처리 미구 현 및 개발 <br>
* nginx 환경 설정 진행<br>
* aws 배포를 위해 codedeploy 와 jenkins 로 자동화 배포 <br>
* 모델 서버 부하가 있어 부하 방지를 위해 LB 도입 <br>

이슈)React Draft lib 에서는 전처리 요청 및 문법 단위로 클릭이 안되는 전처리 이슈가 발생 하여 Draft lib 를 커스텀 마이징 작업


<br>
<br>

### 기술
<br>
python , React , node js 
<br>
<br>

### 저장소
<br>아모레 퍼시픽 gitlab 
