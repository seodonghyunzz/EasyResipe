# GitHub Actions Workflows

이 프로젝트는 다음과 같은 GitHub Actions 워크플로우를 사용합니다:

## 🔄 CI (Continuous Integration)

**파일:** `.github/workflows/ci.yml`

- **트리거:** main, develop 브랜치에 push 또는 PR
- **기능:**
  - ESLint 검사
  - TypeScript 타입 검사
  - 애플리케이션 빌드
  - 빌드 아티팩트 업로드

## 📚 Storybook Build

**파일:** `.github/workflows/storybook.yml`

- **트리거:** main, develop 브랜치에 push 또는 PR
- **기능:**
  - Storybook 빌드
  - GitHub Pages에 자동 배포 (main 브랜치)
  - Storybook 정적 파일 업로드

## 🚀 Deploy

**파일:** `.github/workflows/deploy.yml`

- **트리거:** main 브랜치에 push 또는 PR
- **기능:**
  - Vercel에 자동 배포
  - PR 시 Preview 배포
  - main 브랜치 시 Production 배포

## 🔒 Security Scan

**파일:** `.github/workflows/security.yml`

- **트리거:** push, PR, 매주 월요일 오전 2시
- **기능:**
  - npm audit 보안 검사
  - CodeQL 정적 분석
  - 취약점 보고서 생성

## ⚡ Performance Test

**파일:** `.github/workflows/performance.yml`

- **트리거:** main 브랜치에 push 또는 PR
- **기능:**
  - Lighthouse 성능 테스트
  - 성능 점수 검증
  - PR에 성능 결과 코멘트

## 🔧 필요한 Secrets

다음 secrets를 GitHub 저장소에 설정해야 합니다:

- `VERCEL_TOKEN`: Vercel 배포 토큰
- `VERCEL_ORG_ID`: Vercel 조직 ID
- `VERCEL_PROJECT_ID`: Vercel 프로젝트 ID

## 📊 워크플로우 상태

각 워크플로우의 실행 상태는 GitHub Actions 탭에서 확인할 수 있습니다.
