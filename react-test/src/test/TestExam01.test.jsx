import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TestExam01 from "../pages/TestExam01";
import userEvent from "@testing-library/user-event";

// 비슷한 목적을 가진 테스트끼리 그룹화
// npm run test "테스트 파일명" 으로 실행한다.
describe('컴포넌트 테스트', ()=>{
    it('초기 카운트는 0이고 버튼 누르면 증가', async ()=>{
        render(<TestExam01/>);

        // 화면에 카운트 : 0 이라는 문구가 있는지 기대
        //expect(screen.getByText(/카운트 : 0/i)).toBeInTheDocument();  // 정규식을 사용할 때
        expect(screen.getByText('카운트 : 0')).toBeInTheDocument();

        // 초기값을 테스트 할 때도 초기값이 화면에 나오는지에 대해서 테스트를 해야함.
        // 그 이유는 사용자 입장에서 테스트 하는 것이기 때문에 오직 화면에 일어난 변화만 테스트함.


        // 버튼 가져오기
        const button = screen.getByRole('button', {name : '증가'});

        // 이벤트 객체 선언
        const user = userEvent.setup();

        // 버튼 클릭
        // 이벤트 종료될때까지 대기하기 위해 async await 사용
        await user.click(button);

        expect(screen.getByText('카운트 : 1')).toBeInTheDocument();
    })
})