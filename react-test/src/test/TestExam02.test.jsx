import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import TestExam02 from "../pages/TestExam02";

test('tbody가 있는지만 확인', ()=>{
    const {container} = render(<TestExam02/>);  // 객체를 꺼내올때는 이름이 바뀌면 안됨. container 를 그대로 사용한다.

    const table = container.querySelector('table');
    expect(table.querySelector('tbody')).not.toBeNull();
})

test('tbody가 있는지만 확인2', ()=>{
    
    render(<TestExam02/>);
    
    // 초기에 리스트의 길이가 3인지 확인
    // data-testid 가 붙은 애들 중에서 그 값이 row-item 인 애들을 가져온다.
    expect(screen.getAllByTestId('row-item').length).toBe(3);
})