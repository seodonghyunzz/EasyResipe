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



## ⚡ Performance Test

**파일:** `.github/workflows/performance.yml`

- **트리거:** main 브랜치에 push 또는 PR
- **기능:**
  - Lighthouse 성능 테스트
  - 성능 점수 검증
  - PR에 성능 결과 코멘트


## 📊 워크플로우 상태

각 워크플로우의 실행 상태는 GitHub Actions 탭에서 확인할 수 있습니다.
