/** log color 등 지정 가능 */
const chalk = require('chalk');

console.log(chalk.yellowBright("### 소스 빌드를 시작합니다. ###"));

const package = (() => {


    /**
     * 빌드 프로세스
     * 1. 소스 종속성 관계 빌드 모드 시작
     * 2. 현 프로젝트의 종속성을 검사 후 프로젝트 검출 후 빌드
     * 3. 빌드된 파일은 다른 파일을 생성하여 저장
     */
 })