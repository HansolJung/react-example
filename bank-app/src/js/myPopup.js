
/* 
 window.addEventListener 에 넣을 함수를 익명함수로 하지 않은 이유는 이벤트가 중복되기 때문이다.
 해당 팝업이 생성될 때 마다 window 객체에 이벤트가 계속해서 중복된다. 

 예를 들어 입금을 할때마다 message 라는 이름으로 이벤트를 등록하기 때문에, 
 다음번에 입금을 할때 저번에 등록했던 이벤트 + 이번에 등록한 이벤트 = 총 2번 입금 이벤트가 발생한다. 
 이후 입금을 할때마다 계속 3번, 4번, 5번 ... 무한 증식된다.

 이렇게 이벤트가 중복되는 것을 막기위해 함수를 외부로 빼냈다.
*/

function messageHandler(event) {  

    // 발생한 이벤트의 타입이 selection 이고, _accountCallback 이 가진 것이 함수라면...
    if (event.data.type === 'selection' && typeof window._accountCallback === 'function') {
        window._accountCallback(event.data.data);  // 콜백 함수를 실행
    }
}

class Popup{

    // 생성자
    constructor(data) {

        this.onComplete = data.onComplete;  // 콜백함수 저장
  
        // window 객체에 이벤트를 등록한다.
        // window 객체는 브라우저 자체를 의미한다고 보면 된다.
        // window 객체에 무언가를 넣으면 그건 곧 브라우저 상에서 전역 객체가 됨.
        window.addEventListener('message', messageHandler);
    }

    open(page) {
        const popup = window.open(page, 'popup', 'width=700,height=300,left=900,top=500scrollbars=yes,resizable=yes');
        
        // 윈도우 객체에 콜백 저장.
        // 자바스크립트 객체는 나중에 멤버변수를 추가할 수 있음. 
        // 그래서 아래와 같이 window 객체에 _accountCallback 멤버 변수 생성 가능. 
        window._accountCallback = this.onComplete;
    }
}

export default Popup;