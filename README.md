# React AWS S3 Deployment with GitHub Actions (Academy)

이 프로젝트는 Vite를 사용하여 구축된 React 애플리케이션이며, GitHub Actions를 통해 AWS Academy의 S3 버킷으로 자동 배포되는 CI/CD 파이프라인이 설정되어 있습니다.

## 🚀 시작하기

### 로컬 실행 방법

1. 의존성 설치:
   ```bash
   npm install
   ```
2. 개발 서버 실행:
   ```bash
   npm run dev
   ```

## ☁️ AWS S3 배포 가이드 (AWS Academy 환경)

이 레포지토리는 코드가 `main` 브랜치에 Push될 때 자동으로 빌드되어 S3 버킷에 배포되도록 구성되어 있습니다. (`.github/workflows/deploy.yml` 파일 참조)

### 필수 세팅: GitHub Secrets

AWS Academy를 통한 배포를 성공하기 위해서는 반드시 GitHub Repository의 **Settings > Secrets and variables > Actions** 에 다음 3개의 시크릿을 등록해야 합니다.

* `AWS_ACCESS_KEY_ID`: AWS Academy Learner Lab의 "AWS Details"에서 복사한 값
* `AWS_SECRET_ACCESS_KEY`: AWS Academy Learner Lab의 "AWS Details"에서 복사한 값
* `AWS_SESSION_TOKEN`: AWS Academy Learner Lab의 "AWS Details"에서 복사한 값

> **⚠️ 중요:** AWS Academy의 세션 토큰은 3~4시간마다 만료됩니다.
> 만료 시간이 지난 후 재배포를 하려면 Learner Lab에 다시 접속하여 갱신된 값으로 GitHub Secrets를 업데이트해야 합니다.

### 배포 과정 (CI/CD)

1. 코드를 수정하고 커밋합니다.
2. `main` 브랜치로 커밋을 Push합니다.
3. GitHub Actions 탭에서 워크플로우 진행 상황을 확인합니다.
4. 배포가 완료되면 AWS S3의 웹 사이트 엔드포인트 주소를 통해 업데이트된 내용을 확인합니다.
