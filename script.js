console.log('my name is dhaval');
let key = '44cc0e59e9684bb89471910806e3719b';
let source = 'the-times-of-india';
let xhrs = new XMLHttpRequest();
g1=document.getElementById('g1');
xhrs.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${key}`, true);
xhrs.onload = function () {
    if(this.status===200){
    console.log("vignsesh is chutiya");
    let result = JSON.parse(this.responseText);
    let article=result.articles;
    console.log(result);
    let html = '';
    article.forEach(function (element, index) {
        html += `<div class="accordion" style="color: blanchedalmond; background-color:black;" id="accordionExample">
                    <div class="accordion-item"style="color: blanchedalmond; background-color:black;">
                        <h2 class="accordion-header" id="heading${index}"style="color: blanchedalmond; background-color:black;">
                            <button style="color: blanchedalmond; background-color:#212529!important;" class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                            ${element.title}
                            </button>
                        </h2>
                            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                ${element.content}
                                </div>
                            </div>
                </div>`;
    });
    g1.innerHTML=html;
}
}
xhrs.send();



