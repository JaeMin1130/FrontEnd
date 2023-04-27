document.addEventListener("DOMContentLoaded", function () {
    
const date = document.querySelector('#date')

date.addEventListener("change", () => {
    let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=';
    url += date.value.replaceAll('-', '')

    // 서버에 데이터 요청
    fetch(url)
    // json 파일이 오면
    .then((resp) => resp.json())
    // resp.json() 실행되면
    .then((data) => {
        let boxList = data.boxOfficeResult.dailyBoxOfficeList
        let boxTag = ''
        for(list of boxList){
            boxTag += '<details>'
            boxTag += `<summary role="button" class="secondary">${list.rank}위 ${list.movieNm}</summary>`
            boxTag += '<ul>'
            boxTag += `<li>개봉일 : ${list.openDt}</li>`
            boxTag += `<li>누적 관객수 : ${parseInt(list.audiAcc).toLocaleString()}명</li>` // 천단위 콤마
            boxTag += `<li>매출액 : ${parseInt(list.salesAmt).toLocaleString()}원</li>`
            boxTag += '</ul>'
            boxTag += '</details>'
        }
        document.querySelector('#list').innerHTML = boxTag
    })
    // 통신 오류가 나면
    .catch((err) => {console.log("error")})
    })

})