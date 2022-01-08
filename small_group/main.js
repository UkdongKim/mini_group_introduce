const quotes = [
    {
        quote:"1. 비전을 품고 달려가기엔 방해되는 것은 무엇이 있나요?",
    },
    {
        quote:"2. 올해를 돌아봤을 때, 가장 기억에 남는 일은 무엇인가요?",
    },
    {
        quote:"3. 최근에 가장 감사했던 일은 무엇인가요? 지금도 감사한가요?",
    },
    {
        quote:"4. 행복한 관계를 만들기 위해서 가장 필요한 태도는 무엇이라고 생각하나요?",
    },
    {
        quote:"5. 관계 속에서 나를 드러내는 편인가요? 드러내지 않고 숨기는 편인가요?",
    },
    {
        quote:"6. 오늘의 기분을 날씨로 표현한다면 어떠한가요?",
    },
    {
        quote:"7. 내가 가장 좋아하는 나의 재능은 무엇인가요?",
    },
    {
        quote:"8. 자신을 5글자로 표현해주세요",
    },
    {
        quote:"9. 지금 내 인생의 가장 큰 우선순위는 무엇인가요?",
    },
    {
        quote:"10. 올해 나에게 가장 필요한 것은 무엇인가요?",
    },
    {
        quote:"11. 당신의 삶에 가장 변화가 필요한 부분은 무엇인가요? (인간관계? 직업? 건강? 등등)",
    },
    {
        quote:"12. 지금 행복한가요?",
    },
    {
        quote:"13. 내가 가지고 있는 습관 중 없애고 싶은 나쁜 습관은?",
    },
    {
        quote:"14. 나는 어떤 가치를 가장 중요하게 생각하는 사람인가요?",
    },
    {
        quote:"15. 내가 듣는 나에 대한 말 중 가장 기분이 좋아지는 말은 무엇인가요?",
    },
    {
        quote:"16. 내가 최근에 작정한 결단은 무엇인가요? 왜 결단하게 되었나요?",
    },













]
    
    const btn = document.querySelector('.btn');
    const quote = document.querySelector('.quote_box span');

    
    btn.addEventListener('click', find)

    function find(){0

        let todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
        
        console.log(todaysQuote);
        quote.innerText = todaysQuote.quote;

    }

