# 프로젝트명: React AWS S3 자동 배포 파이프라인

## 📌 시스템 소개
이 프로젝트는 Vite 기반의 React 애플리케이션을 AWS S3 버킷에 자동으로 배포하는 CI/CD(지속적 통합/지속적 배포) 시스템입니다. 
개발자가 코드를 작성하여 GitHub Repository에 Push하면, GitHub Actions가 이를 감지하여 자동으로 빌드하고 결과를 AWS 클라우드 환경으로 전달합니다.

## ✨ 기능 소개
* **로컬 개발 환경**: Vite를 사용하여 매우 빠르고 가벼운 React 개발 환경 제공 (`npm run dev`)
* **자동화된 빌드**: 코드 변경 사항이 `main` 브랜치에 반영될 때마다 Node.js 환경에서 자동으로 프로젝트 빌드 (`npm run build`)
* **클라우드 호스팅 연동**: 빌드된 정적 웹 파일들을 AWS S3 버킷과 동기화하여 즉시 웹에 퍼블리싱 (`aws s3 sync`)

## ⚙️ Github Actions 환경 소개
이 프로젝트는 `.github/workflows/deploy.yml` 파일에 정의된 워크플로우를 통해 배포가 자동화됩니다.

* **동작 트리거**: `main` 브랜치에 코드가 `push` 될 때 실행됩니다.
* **실행 환경**: `ubuntu-latest` (최신 우분투 가상 환경)
* **주요 단계**:
  1. 소스 코드 체크아웃
  2. Node.js (버전 20) 환경 설정
  3. 프로젝트 의존성 설치 (`npm ci`)
  4. React 프로젝트 빌드 (`npm run build`)
  5. AWS 인증 정보 구성 (AWS Academy 환경에 맞춘 Secret 사용)
  6. 빌드 결과물(`dist/`)을 S3 버킷에 업로드 (기존 파일 삭제 후 동기화)

> **⚠️ AWS Academy Secret 필수 등록**
> 배포가 정상적으로 이루어지려면 GitHub Repository의 **Settings > Secrets and variables > Actions** 에 다음 세 가지 Secret이 등록되어 있어야 합니다.
> * `AWS_ACCESS_KEY_ID`
> * `AWS_SECRET_ACCESS_KEY`
> * `AWS_SESSION_TOKEN`

## 🔗 AWS 웹사이트 URL
아래 링크를 통해 현재 배포되어 있는 애플리케이션을 확인할 수 있습니다.

👉 **[배포된 웹사이트 접속하기 (S3 Endpoint)](http://mybucket-20263594-601312212719-us-east-1-an.s3-website-us-east-1.amazonaws.com)**

> 🚨 **주의사항 (세션 4시간만 유효함)**
> 본 프로젝트는 교육용 환경인 AWS Academy를 기반으로 구축되었습니다. 
> AWS Academy의 자격 증명(Session Token)은 발급 후 **최대 4시간 동안만 유효**합니다. 
> 세션 만료 후 재배포를 원하시는 경우 Learner Lab 환경을 재시작하고 새로운 Token 값으로 GitHub Secret의 `AWS_SESSION_TOKEN` 등을 업데이트해야 정상 작동합니다.
