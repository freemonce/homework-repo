import { render, screen } from "@testing-library/react";
import Toggle from "./Toggle";
import userEvent from "@testing-library/user-event";

describe("Toggle 테스트", () => {
  test("초기 상태는 OFF", () => {
    render(<Toggle />);
    // In을 대문자로 수정
    expect(screen.getByText("OFF")).toBeInTheDocument();
  });

  test("클릭하면 On으로 변경", async () => {
    render(<Toggle />);
    const button = screen.getByRole("button");
    await userEvent.click(button);
    // 구현 코드와 맞춰서 "On"으로 수정
    expect(screen.getByText("On")).toBeInTheDocument();
  });

  test("On일 때 다시 클릭하면 OFF로 바뀐다.", async () => {
    render(<Toggle />);
    const button = screen.getByRole("button");

    await userEvent.click(button);
    // 뒤에 () 괄호를 꼭 붙여주세요!
    expect(screen.getByText("On")).toBeInTheDocument();

    await userEvent.click(button);
    expect(screen.getByText("OFF")).toBeInTheDocument();
  });
});
