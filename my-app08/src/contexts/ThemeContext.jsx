/* useContext 객체 생성 */

import { createContext } from "react";

// 공용으로 데이터를 공유할 context 객체 생성
export const ThemeContext = createContext(null);  // 기본 값 null 로 설정