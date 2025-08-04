import { describe, expect, it, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CounterExam from "../pages/CounterExam";

describe('카운터 테스트', ()=>{
    it('카운터 초기값은 0이다', ()=>{
        render(<CounterExam/>);

        expect(screen.getByText('결과 값: 0')).toBeInTheDocument();
    })

    it('증가 또는 감소 버튼을 통해서 값이 증가 또는 감소', async ()=>{
        render(<CounterExam/>);
        const user = userEvent.setup();
        
        const upButton = screen.getByText('증가'); // 증가버튼 가져오기
        const downButton = screen.getByText('감소'); // 감소버튼 가져오기

        // 증가
        await user.click(upButton);
        expect(screen.getByText('결과 값: 1')).toBeInTheDocument();

        // 감소
        await user.click(downButton);
        expect(screen.getByText('결과 값: 0')).toBeInTheDocument();

    });
})