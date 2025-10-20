(function($){$.fn.epsQuiz=function(options){const settings=$.extend({folder:"",file:"",baseImg:"https://cdn.jsdelivr.net/gh/hoangdienkr",api:"https://script.google.com/macros/s/AKfycbxS9zOMKLd5htbVfO6J6hQ8yATJLDXvibPCT_x4wopS6-xdd_njLDtwGBYwBTFF46LFFA/exec",total:null,audioCount:null,shuffle:!0,shuffleAnswers:!0},options);const container=this[0];let quizData=[];let correctCount=0;let finishedCount=0;function decodeHTML(str){const txt=document.createElement("textarea");txt.innerHTML=str;return txt.value}
function randomPick(arr,n){return arr.sort(()=>Math.random()-0.5).slice(0,n)}
function filterQuizData(data){if(!settings.total&&!settings.audioCount)return data;const withAudio=data.filter(q=>q.audio);const withoutAudio=data.filter(q=>!q.audio);const selectedAudio=settings.audioCount?randomPick(withAudio,Math.min(settings.audioCount,withAudio.length)):[];const remaining=settings.total?settings.total-selectedAudio.length:withoutAudio.length;const selectedNonAudio=randomPick(withoutAudio,Math.min(remaining,withoutAudio.length));return[...selectedAudio,...selectedNonAudio].sort(()=>Math.random()-0.5)}
function showResult(total){const box=document.createElement("div");box.style.textAlign="center";box.style.padding="20px";box.innerHTML=`
        <div class="alert alert-info">
          ✅ Bạn đã đúng ${correctCount} / ${total} câu!
        </div>
        <button id="restartBtn" class="btn btn-primary mt-3">Làm lại</button>
      `;container.appendChild(box);$("#restartBtn").on("click",()=>{renderQuizList();window.scrollTo({top:0,behavior:"smooth"})})}
function renderQuizList(){container.innerHTML="";correctCount=0;finishedCount=0;if(settings.shuffle)quizData.sort(()=>Math.random()-0.5);quizData.forEach((q,qIndex)=>{const box=document.createElement("div");box.className="question-box";const qTextDiv=document.createElement("div");qTextDiv.className="question";const qHtml=(q.question&&q.question.text)?q.question.text:"";qTextDiv.innerHTML=`<strong class="fs-4 text-primary">Câu ${qIndex + 1} :</strong>
                              <div class="korean2">${qHtml.replace(/\n/g, "<br>")}</div>`;box.appendChild(qTextDiv);if(q.photo){const img=document.createElement("img");img.className="photo";img.src=settings.baseImg+"/"+q.photo;box.appendChild(img)}
if(q.audio){const btn=document.createElement("div");btn.className="play";btn.setAttribute("key",q.audio);box.appendChild(btn)}
const rawOpts=Array.isArray(q.options)?q.options.slice():[];const normalized=rawOpts.map(o=>{if(typeof o==="string")return{text:o,translate:"",isImage:!1};if(o.image&&!o.text)return{text:o.image,translate:o.translate||"",isImage:!0};return{text:o.text||o.image||"",translate:o.translate||"",isImage:!!o.image}});let opts=normalized.map((opt,idx)=>({opt,origIdx:idx}));if(settings.shuffleAnswers)opts.sort(()=>Math.random()-0.5);const ul=document.createElement("ul");ul.className=(q.type===1)?"options options-img korean2":"options korean2";const transBlock=document.createElement("div");transBlock.className="translate mt-2";transBlock.style.display="none";let answered=!1;opts.forEach((item,displayIdx)=>{const li=document.createElement("li");if(q.type===1||item.opt.isImage){li.innerHTML=`<div class="eps-dapan">
                              <div class="column"><span>${displayIdx + 1}</span></div>
                              <div class="column"><img src="${settings.baseImg}/${item.opt.text}" class="option-img" alt="opt${displayIdx+1}"></div>
                            </div>`}else{li.innerHTML=`<div class="eps-dapan">
                              <div class="column"><span>${displayIdx + 1}</span></div>
                              <div class="column">${decodeHTML(item.opt.text)}</div>
                            </div>`}
li.setAttribute("data-orig-idx",item.origIdx);li.setAttribute("data-displayed-idx",displayIdx);li._optTranslate=item.opt.translate||"";li.addEventListener("click",function(){if(answered)return;answered=!0;finishedCount++;const chosenOrig=item.origIdx;const correctOrig=(typeof q.answer==="number")?(q.answer-1):null;if(correctOrig!==null&&chosenOrig===correctOrig){li.classList.add("correct");correctCount++}else{li.classList.add("wrong");const children=Array.from(ul.children);const correctLi=children.find(c=>parseInt(c.getAttribute("data-orig-idx"),10)===correctOrig);if(correctLi)correctLi.classList.add("correct");let content="";if(q.question&&q.question.translate){content+=`<div>${q.question.translate.replace(/\n/g,"<br>")}</div>`}
if(q.type===0){const transLines=children.map((c,idx)=>{const orig=parseInt(c.getAttribute("data-orig-idx"),10);const optData=normalized[orig]||{text:"",translate:""};return `${idx + 1}. ${optData.translate || ""}`});if(transLines.length){content+=`<div style="margin-top:8px;">${transLines.join("<br>")}</div>`}}
transBlock.innerHTML=content;$(transBlock).hide().fadeIn(220);transBlock.style.display="block"}
Array.from(ul.children).forEach(x=>x.style.pointerEvents="none");if(finishedCount===quizData.length)showResult(quizData.length);});ul.appendChild(li)});box.appendChild(ul);box.appendChild(transBlock);container.appendChild(box)});$(".play").audioPlayer()}
function fetchLesson(){container.innerHTML=`<div style="text-align:center; padding:40px;">
        <div class="spinner-border text-primary" style="width:3rem; height:3rem;"></div>
        <p class="mt-3">Đang tải dữ liệu...</p>
      </div>`;const sessionStr=localStorage.getItem("session");if(!sessionStr){container.innerHTML="⚠️ Chưa đăng nhập!";return}
const session=JSON.parse(sessionStr);if(!session.token){container.innerHTML="⚠️ Không tìm thấy token!";return}
$.ajax({url:settings.api,dataType:"jsonp",data:{action:"getJsonFile",token:session.token,folder:settings.folder,file:settings.file,callback:"callback"},success:(res)=>{if(!res.success||!res.data){container.innerHTML="⚠️ Không có dữ liệu từ server!";return}
quizData=filterQuizData(res.data);if(settings.shuffle)quizData.sort(()=>Math.random()-0.5);renderQuizList()},error:()=>{container.innerHTML="⚠️ Lỗi kết nối server!"}})}
fetchLesson();return this}})(jQuery)
