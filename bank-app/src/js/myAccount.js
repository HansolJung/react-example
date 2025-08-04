class Account{

    // 생성자
    constructor(data) {

        // 멤버변수 생성 하면서 동시에 값을 전달
        this.name = data.name;  // 이름
        this.accountNum = data.accountNum // 계좌 번호
        this.type = data.type;  // 계좌 타입 (예금, 적금)
        this.balance = data.balance;  // 잔액
        this.isChecked = false; // 체크 여부
    }
}

export default Account;