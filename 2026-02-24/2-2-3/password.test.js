import { isVaildPassword } from "./password";

describe("isVaildPassword", () => {
  test("유효한 비밀번호", () => {
    expect(isVaildPassword("Password123!")).toBe(true);
    expect(isVaildPassword("Password123!@")).toBe(true);
  });

  test("8자 미만은 실패", () => {
    expect(isVaildPassword("Pass1")).toBe(false);
  });

  test("숫자 없으면 실패", () => {
    expect(isVaildPassword("Password")).toBe(false);
  });

  test("영어 없으면 실패", () => {
    expect(isVaildPassword("123455678")).toBe(false);
  });

  test("특수문자 없으면 실패", () => {
    expect(isVaildPassword("Password1123")).toBe(false);
  });
});
