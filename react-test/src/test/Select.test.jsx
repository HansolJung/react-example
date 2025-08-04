import { describe, expect, it, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SelectExam from "../pages/SelectExam";

describe('셀렉트 테스트', ()=>{
    it('셀렉트 박스 선택 시 화면에 출력', async ()=>{
        const user = userEvent.setup();

        render(<SelectExam/>)

        //const select = screen.getByRole('combobox', {id:'fruits'}); 
        const select = screen.getByLabelText('과일 선택:');

        // 처음에는 내용이 없음
        //expect(screen.getByText('선택된 과일 :')).toBeInTheDocument();
        expect(select.value).toBe('');

        // 선택
        await user.selectOptions(select, '사과');

        // 화면에 사과 선택 내용 출력
        expect(screen.getByText('선택된 과일 : 사과')).toBeInTheDocument();
    })
})