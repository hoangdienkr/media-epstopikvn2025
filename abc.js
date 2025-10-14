  !function(n){"use strict";function d(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function f(n,t,r,e,o,u){return d((u=d(d(t,n),d(e,u)))<<o|u>>>32-o,r)}function l(n,t,r,e,o,u,c){return f(t&r|~t&e,n,t,o,u,c)}function g(n,t,r,e,o,u,c){return f(t&e|r&~e,n,t,o,u,c)}function v(n,t,r,e,o,u,c){return f(t^r^e,n,t,o,u,c)}function m(n,t,r,e,o,u,c){return f(r^(t|~e),n,t,o,u,c)}function c(n,t){var r,e,o,u;n[t>>5]|=128<<t%32,n[14+(t+64>>>9<<4)]=t;for(var c=1732584193,f=-271733879,i=-1732584194,a=271733878,h=0;h<n.length;h+=16)c=l(r=c,e=f,o=i,u=a,n[h],7,-680876936),a=l(a,c,f,i,n[h+1],12,-389564586),i=l(i,a,c,f,n[h+2],17,606105819),f=l(f,i,a,c,n[h+3],22,-1044525330),c=l(c,f,i,a,n[h+4],7,-176418897),a=l(a,c,f,i,n[h+5],12,1200080426),i=l(i,a,c,f,n[h+6],17,-1473231341),f=l(f,i,a,c,n[h+7],22,-45705983),c=l(c,f,i,a,n[h+8],7,1770035416),a=l(a,c,f,i,n[h+9],12,-1958414417),i=l(i,a,c,f,n[h+10],17,-42063),f=l(f,i,a,c,n[h+11],22,-1990404162),c=l(c,f,i,a,n[h+12],7,1804603682),a=l(a,c,f,i,n[h+13],12,-40341101),i=l(i,a,c,f,n[h+14],17,-1502002290),c=g(c,f=l(f,i,a,c,n[h+15],22,1236535329),i,a,n[h+1],5,-165796510),a=g(a,c,f,i,n[h+6],9,-1069501632),i=g(i,a,c,f,n[h+11],14,643717713),f=g(f,i,a,c,n[h],20,-373897302),c=g(c,f,i,a,n[h+5],5,-701558691),a=g(a,c,f,i,n[h+10],9,38016083),i=g(i,a,c,f,n[h+15],14,-660478335),f=g(f,i,a,c,n[h+4],20,-405537848),c=g(c,f,i,a,n[h+9],5,568446438),a=g(a,c,f,i,n[h+14],9,-1019803690),i=g(i,a,c,f,n[h+3],14,-187363961),f=g(f,i,a,c,n[h+8],20,1163531501),c=g(c,f,i,a,n[h+13],5,-1444681467),a=g(a,c,f,i,n[h+2],9,-51403784),i=g(i,a,c,f,n[h+7],14,1735328473),c=v(c,f=g(f,i,a,c,n[h+12],20,-1926607734),i,a,n[h+5],4,-378558),a=v(a,c,f,i,n[h+8],11,-2022574463),i=v(i,a,c,f,n[h+11],16,1839030562),f=v(f,i,a,c,n[h+14],23,-35309556),c=v(c,f,i,a,n[h+1],4,-1530992060),a=v(a,c,f,i,n[h+4],11,1272893353),i=v(i,a,c,f,n[h+7],16,-155497632),f=v(f,i,a,c,n[h+10],23,-1094730640),c=v(c,f,i,a,n[h+13],4,681279174),a=v(a,c,f,i,n[h],11,-358537222),i=v(i,a,c,f,n[h+3],16,-722521979),f=v(f,i,a,c,n[h+6],23,76029189),c=v(c,f,i,a,n[h+9],4,-640364487),a=v(a,c,f,i,n[h+12],11,-421815835),i=v(i,a,c,f,n[h+15],16,530742520),c=m(c,f=v(f,i,a,c,n[h+2],23,-995338651),i,a,n[h],6,-198630844),a=m(a,c,f,i,n[h+7],10,1126891415),i=m(i,a,c,f,n[h+14],15,-1416354905),f=m(f,i,a,c,n[h+5],21,-57434055),c=m(c,f,i,a,n[h+12],6,1700485571),a=m(a,c,f,i,n[h+3],10,-1894986606),i=m(i,a,c,f,n[h+10],15,-1051523),f=m(f,i,a,c,n[h+1],21,-2054922799),c=m(c,f,i,a,n[h+8],6,1873313359),a=m(a,c,f,i,n[h+15],10,-30611744),i=m(i,a,c,f,n[h+6],15,-1560198380),f=m(f,i,a,c,n[h+13],21,1309151649),c=m(c,f,i,a,n[h+4],6,-145523070),a=m(a,c,f,i,n[h+11],10,-1120210379),i=m(i,a,c,f,n[h+2],15,718787259),f=m(f,i,a,c,n[h+9],21,-343485551),c=d(c,r),f=d(f,e),i=d(i,o),a=d(a,u);return[c,f,i,a]}function i(n){for(var t="",r=32*n.length,e=0;e<r;e+=8)t+=String.fromCharCode(n[e>>5]>>>e%32&255);return t}function a(n){var t=[];for(t[(n.length>>2)-1]=void 0,e=0;e<t.length;e+=1)t[e]=0;for(var r=8*n.length,e=0;e<r;e+=8)t[e>>5]|=(255&n.charCodeAt(e/8))<<e%32;return t}function e(n){for(var t,r="0123456789abcdef",e="",o=0;o<n.length;o+=1)t=n.charCodeAt(o),e+=r.charAt(t>>>4&15)+r.charAt(15&t);return e}function r(n){return unescape(encodeURIComponent(n))}function o(n){return i(c(a(n=r(n)),8*n.length))}function u(n,t){return function(n,t){var r,e=a(n),o=[],u=[];for(o[15]=u[15]=void 0,16<e.length&&(e=c(e,8*n.length)),r=0;r<16;r+=1)o[r]=909522486^e[r],u[r]=1549556828^e[r];return t=c(o.concat(a(t)),512+8*t.length),i(c(u.concat(t),640))}(r(n),r(t))}function t(n,t,r){return t?r?u(t,n):e(u(t,n)):r?o(n):e(o(n))}"function"==typeof define&&define.amd?define(function(){return t}):"object"==typeof module&&module.exports?module.exports=t:n.md5=t}(this);
//# sourceMappingURL=md5.min.js.map
  
$(document).ready(function () {

if (typeof list === "undefined" || typeof lessonID === "undefined") {
    return; 
  }
/**********************************************
 * 🧠 EPSQuiz - Trắc nghiệm từ vựng
 // Ví dụ 2: hỏi nghĩa tiếng Việt, chọn tiếng Hàn
// EPSQuiz.createQuizFromData(data, { questionKey: "vietnamese", answerKey: "korean" });
// Ví dụ 3: luyện nghe — câu hỏi là audio
// EPSQuiz.createQuizFromData(data, { questionKey: "audio", answerKey: "vietnamese", showAudio: true });
 **********************************************/
var EPSQuiz = (function() {
  let vocabData = [];
  let quizScore = 0;
  let quizTotal = 0;
  let container;
  let audio;
  let questionKey = "korean";
  let answerKey = "vietnamese";
  let showAudio = false;

  function createQuizFromData(data, options = {}) {
    vocabData = data;
    questionKey = options.questionKey || "korean";
    answerKey = options.answerKey || "vietnamese";
    showAudio = options.showAudio || false;

    container = document.getElementById("quizContent") || document.getElementById("vocabBox");
    if (!container) {
      console.error("❌ Không tìm thấy vùng chứa quiz");
      return;
    }
    createQuiz(vocabData);
  }

  function createQuiz(vocab) {
    container.innerHTML = "";
    audio = document.createElement("audio");
    container.appendChild(audio);

    const total = vocab.length >= 10 ? 10 : vocab.length;
    quizTotal = total;
    quizScore = 0;

    const quizData = vocab.sort(() => 0.5 - Math.random()).slice(0, total);

    quizData.forEach((item, index) => {
      const correctAnswer = item[answerKey];
      const wrongOptions = vocab.filter(v => v[answerKey] !== correctAnswer);
      const options = [correctAnswer, ...wrongOptions.sort(() => 0.5 - Math.random()).slice(0, 3).map(o => o[answerKey])]
        .sort(() => 0.5 - Math.random());

      // ✅ Câu hỏi
      let questionHTML = "";
      if (showAudio && item.audio) {
        questionHTML = `
          <div class="cau-hoi play-wrapper mb-3">
            <div class="play" key="${item.audio}">
            </div>
          </div>`;
      } else {
        const qClass =
          questionKey === "vietnamese" ?
          "vietnam" :
          questionKey === "korean" ?
          "korean" :
          "question";
        questionHTML = `<div class="cau-hoi mb-3">
            <span class="${qClass}">${item[questionKey]}</span>
          </div>`;
      }

      // ✅ Đáp án (class theo answerKey)
      const optClass =
        answerKey === "vietnamese" ?
        "vietnam" :
        answerKey === "korean" ?
        "korean" :
        "answer";

      const qDiv = document.createElement("div");
      qDiv.className = "quiz-question";
      qDiv.innerHTML = `<fieldset class="mt-3 pb-5"><legend><strong class="mx-2 text-primary">Câu ${index + 1}</strong></legend>
        ${questionHTML}
        <div class="options">
          ${options
            .map(
              opt =>
                `<span class="${optClass} text-first" onclick="EPSQuiz.checkAnswer(this,'${correctAnswer}')">${opt}</span>`
            )
            .join("")}
        </div></fieldset>`;
      container.appendChild(qDiv);
    });

    // ✅ Vùng hiển thị kết quả
    const resultDiv = document.createElement("div");
    resultDiv.id = "quizResult";
    resultDiv.className = "mt-3 fw-bold text-center";
    container.appendChild(resultDiv);

    // ✅ Nút chơi lại
    // ✅ Nút chơi lại (căn giữa + cuộn lên đầu)
    const resetWrapper = document.createElement("div");
    resetWrapper.className = "text-center mt-4";

    const resetBtn = document.createElement("button");
    resetBtn.className = "btn btn-submit text-white";
    resetBtn.textContent = "Làm lại";
    resetBtn.style.display = "none";

    resetBtn.addEventListener("click", () => {
      createQuiz(vocabData); // Tạo lại quiz
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      }); // Cuộn mượt lên đầu trang
    });

    resetWrapper.appendChild(resetBtn);
    container.appendChild(resetWrapper);

    EPSQuiz.resetBtn = resetBtn;

  }

  function checkAnswer(btn, correct) {
  const questionDiv = btn.closest(".quiz-question");
  const options = questionDiv.querySelectorAll(".options span");
  if (questionDiv.classList.contains("answered")) return;
  questionDiv.classList.add("answered");

options.forEach(opt => {
  opt.style.pointerEvents = "none"; 
  opt.classList.add("disabled");

  // ✅ So sánh loại bỏ khoảng trắng thừa ở đầu/cuối
  if (opt.textContent.trim() === correct.trim()) {
    opt.classList.add("correct"); 
  }
});

if (btn.textContent.trim() === correct.trim()) {
  btn.classList.add("correct");
  quizScore++;
} else {
  btn.classList.add("wrong");
}


  setTimeout(() => {
    questionDiv.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 200);

  const answeredCount = container.querySelectorAll(".quiz-question.answered").length;
  if (answeredCount === quizTotal) {
    const resultDiv = document.getElementById("quizResult");
    resultDiv.className = "alert alert-info text-center mt-3";
    resultDiv.innerHTML = `<i class="far fa-map-marker-question"></i> Bạn đã đúng ${quizScore} / ${quizTotal} câu!`;
    EPSQuiz.resetBtn.style.display = "inline-block";

    setTimeout(() => {
      resultDiv.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 500);
  }
}
  const style = document.createElement("style");
  style.textContent = `
    .quiz-question,#quizResult{margin:10px auto;max-width:800px;}
    .options {display: grid;grid-template-columns: repeat(2, 1fr);gap: 10px;margin-top: 5px;}
    .options span {padding: 10px 8px;
    cursor: pointer;background-color: #f8f8f8;transition: background-color 0.2s, transform 0.2s;border-radius: 10px;box-shadow: 0 3px #e5e5e5;}
    .correct{background-color:#23AC38!important;color:#fff!important;}
    .wrong{background-color:#EB5757!important;color:#fff!important;}
    .cau-hoi strong{padding-right:10px;}
    @media (max-width: 600px) {
    .options {grid-template-columns: 1fr; /* mỗi hàng 1 span */gap: 8px;}
    .options span {font-size: 16px;padding: 12px;
    }
  }
  `;
  document.head.appendChild(style);

  return {
    createQuizFromData,
    checkAnswer,
    resetBtn: null
  };
})();
window.EPSQuiz = EPSQuiz;
// ==================== END EPSQuiz ====================
// ==================== 🎮 Word Match Game (Phiên bản hỗ trợ mảng JSON) ====================
(function ($) {
  $.fn.wordMatchGame = function (options) {
    const settings = $.extend(
      {
        data: null, // ✅ Truyền mảng JSON trực tiếp { korean, vietnamese }
        jsonName: "", // hoặc đường dẫn JSON nếu không truyền mảng
        baseUrl: "",
        correctSound: "https://cdn.jsdelivr.net/gh/hoanglong-85/media@main/correct.mp3",
        wrongSound: "https://cdn.jsdelivr.net/gh/hoanglong-85/media@main/wrong.mp3",
      },
      options
    );

    const $container = this;
    let selectedCards = [];
    let words = [];
    const correctSound = new Audio(settings.correctSound);
    const wrongSound = new Audio(settings.wrongSound);

    // ==================== 💅 CSS chỉ thêm 1 lần ====================
    if (!document.getElementById("word-match-style")) {
      $("<style>", {
        id: "word-match-style",
        text: `
       #word-list-game {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 10px;
                    max-width: 780px;
                    margin: 20px auto;
                }
                .word-item-game {
                    padding: 40px;
                    text-align: center;
                    background: #ddd;
                    cursor: pointer;
                    border-radius: 5px;
                    font-size: 18px;
                    transition: all 0.3s ease;
                    text-transform: capitalize;
                    font-weight: 600;
                }
                        .selected-game { background: #3498db; color: #fff!important; }
                        .wrong-game    { background: red !important; }
                        .matched-game  { visibility: hidden; } /* Ẩn nhưng giữ bố cục */
                        .word-item-game.vietnamese-game { color:#ff9800; } /* Tiếng Việt màu cam/đỏ */
                        #restart-button-game {
                    display: none;
                  }
                  #result-game {
                    text-align: center;
                    font-weight: bold;
                    margin-top: 15px;
                  }
                @media (max-width: 768px) {
                 .word-item-game {
                    padding: 40px 15px;}

        `,
      }).appendTo("head");
    }

    // ==================== 🔀 Hỗ trợ logic ====================
    const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

    const generateWordPairs = (source, numPairs) => {
      const pairs = [];
      const selectedWords = shuffle(source).slice(0, numPairs);
      selectedWords.forEach((item, index) => {
        const order = Math.random() > 0.5;
        pairs.push({ text: order ? item.korean : item.vietnamese, id: index, type: "word" });
        pairs.push({ text: order ? item.vietnamese : item.korean, id: index, type: "meaning" });
      });
      return shuffle(pairs);
    };

    function startGame() {
      $container.empty();
      const numPairs = words.length >= 6 ? 6 : words.length;
      const pairs = generateWordPairs(words, numPairs);

      const $result = $("<div>").attr("id", "result-game").appendTo($container);
      const $restartButton = $("<div class='text-center mt-4'><button class='btn btn-submit text-white'>Chơi lại</button></div>")
        .attr("id", "restart-button-game")
        .click(startGame)
        .appendTo($container);

      const $wordList = $("<div>").attr("id", "word-list-game").appendTo($container);

      pairs.forEach((pair) => {
        $("<div>")
          .addClass("word-item-game")
          .toggleClass("vietnamese-game", pair.type === "meaning")
          .attr("data-id", pair.id)
          .attr("data-type", pair.type)
          .text(pair.text)
          .click(function () {
            selectCard($(this));
          })
          .appendTo($wordList);
      });
    }

    function selectCard($el) {
      if ($el.hasClass("matched-game") || selectedCards.includes($el)) return;
      $el.addClass("selected-game");
      selectedCards.push($el);
      if (selectedCards.length === 2) checkMatch();
    }

    function checkMatch() {
      const [$c1, $c2] = selectedCards;
      const isMatch = $c1.data("id") === $c2.data("id") && $c1.data("type") !== $c2.data("type");
      if (isMatch) {
        setTimeout(() => {
          correctSound.play();
          $c1.add($c2).addClass("matched-game").removeClass("selected-game").css("visibility", "hidden");
          selectedCards = [];
          checkCompletion();
        }, 300);
      } else {
        setTimeout(() => {
          wrongSound.play();
          $c1.add($c2).addClass("wrong-game");
          setTimeout(() => {
            $c1.add($c2).removeClass("selected-game wrong-game");
            selectedCards = [];
          }, 500);
        }, 300);
      }
    }

    function checkCompletion() {
      if ($(".word-item-game:not(.matched-game)", $container).length === 0) {
        $("#result-game", $container).text("Chúc mừng bạn đã hoàn thành trò chơi!");
        $("#restart-button-game", $container).fadeIn();
      }
    }

    // ==================== 📦 Load dữ liệu ====================
    if (settings.data && Array.isArray(settings.data)) {
      // ✅ Dữ liệu đã có sẵn
      words = settings.data.map((item) => ({
        korean: item.korean,
        vietnamese: item.vietnamese,
      }));
      startGame();
    } else if (settings.jsonName) {
      // ✅ Nếu truyền file JSON
      const jsonUrl = settings.baseUrl + settings.jsonName + ".json";
      fetch(jsonUrl)
        .then((res) => {
          if (!res.ok) throw new Error("Lỗi tải JSON: " + res.status);
          return res.json();
        })
        .then((data) => {
          words = data.map((item) => ({
            korean: item.korean,
            vietnamese: item.vietnamese,
          }));
          startGame();
        })
        .catch((err) => {
          console.error(err);
          $container.html("<p class='text-danger text-center'>⚠️ Không thể tải dữ liệu trò chơi!</p>");
        });
    } else {
      $container.html("<p class='text-warning text-center'>⚠️ Thiếu dữ liệu hoặc jsonName!</p>");
    }

    return this;
  };
})(jQuery);

  /**************************************
   * ⚙️ Biến cache dữ liệu toàn cục
   **************************************/
  let vocabCache = null;
  let vocabLoading = false;

  /**************************************
   * 🔐 Token bảo mật và hàm gọi API
   **************************************/
  function getTodayToken() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const salt = "mySuperSecretSalt2025";
    return md5(`${yyyy}${mm}${dd}${salt}`);
  }

  function callTuVungAPI(lessonID) {
    return new Promise((resolve, reject) => {
      const callbackName = 'jsonpCallback_' + Math.random().toString(36).substr(2, 5);
      window[callbackName] = function (data) {
        resolve(data);
        delete window[callbackName];
        script.remove();
      };
      const token = getTodayToken();
      const script = document.createElement('script');
      script.src = `https://script.google.com/macros/s/AKfycbyxxKKVw7yju4jyj1mEfmeHPPPvf7ZjY0YARlMPTKnxpbkQpS-GUj5KKbutGabMHudc/exec?action=getTuVung&lessonID=${encodeURIComponent(
        lessonID
      )}&token=${encodeURIComponent(token)}&callback=${callbackName}`;
      script.onerror = () => {
        reject(new Error('Không tải được script JSONP'));
        delete window[callbackName];
        script.remove();
      };
      document.body.appendChild(script);
    });
  }

  /**************************************
   * ⚡ Hàm lấy dữ liệu có cache theo ngày
   **************************************/
  async function getVocabDataOnce(lessonID) {
    const today = new Date().toISOString().split('T')[0];

    if (vocabCache && vocabCache.date === today) return vocabCache.data;

    if (vocabLoading) {
      return new Promise((resolve) => {
        const check = setInterval(() => {
          if (vocabCache) {
            clearInterval(check);
            resolve(vocabCache.data);
          }
        }, 300);
      });
    }

    vocabLoading = true;
    try {
      const data = await callTuVungAPI(lessonID);
      if (data.success) {
        vocabCache = { date: today, data: data.data };
        return vocabCache.data;
      } else throw new Error(data.message || "Không lấy được dữ liệu");
    } catch (e) {
      console.error("❌ Lỗi tải dữ liệu:", e);
      throw e;
    } finally {
      vocabLoading = false;
    }
  }

  /**************************************
   * 🧩 Hàm tiện ích
   **************************************/
  function shuffleArray(arr) {
    const newArr = arr.slice();
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  }

  function getRandomData(data, count) {
    if (!Array.isArray(data)) return [];
    return shuffleArray(data).slice(0, count);
  }

  /**************************************
   * 🧠 Gọi hàm audioPlayer an toàn
   **************************************/
  function initAudioPlayer() {
    if (typeof $.fn.audioPlayer === "function") {
      $(".play").audioPlayer({ list:list });
    } else {
      console.warn("⚠️ audioPlayer plugin chưa được nạp.");
    }
  }

  /**************************************
   * 📦 Xử lý menu click
   **************************************/
async function handleMenuClick(key) {
  const vocabBox = document.getElementById('vocabBox');
  vocabBox.innerHTML = `
    <div class="text-center my-4">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Đang tải...</span>
      </div>
    </div>`;

  try {
    // Lấy dữ liệu chỉ 1 lần (đã cache)
    const data = await getVocabDataOnce(lessonID);
    let html = "";
    let subset = [];

    switch (key) {
      case "danh-sach":
        html = renderVocab(data);
        break;
      case "trac-nghiem":
        subset = getRandomData(data, 5);
        html = renderTracNghiem(subset);
        break;

      case "luyen-nghe":
        subset = getRandomData(data, 5);
        html = renderLuyenNghe(subset);
        break;

      case "tro-choi":
        subset = getRandomData(data, 6);
        html = renderTroChoi(subset);
        break;

      default:
        html = `<p class="text-muted text-center">Chọn một mục để bắt đầu</p>`;
    }

    vocabBox.innerHTML = html;

    // ✅ Khởi tạo hành vi tương ứng sau khi render
    if (key === "danh-sach") {
      initAudioPlayer();
    } else if (key === "trac-nghiem") {
       renderTracNghiem(getRandomData(data, 10));

    } else if (key === "luyen-nghe") {
      renderLuyenNghe(getRandomData(data, 10));
      initAudioPlayer();
    } else if (key === "tro-choi") {
      renderTroChoi(getRandomData(data, 6));
    }

  } catch (err) {
    console.error(err);
    vocabBox.innerHTML = `<p class="text-danger text-center">❌ Không thể tải dữ liệu</p>`;
  }
}


  /**************************************
   * 🎨 Các hàm render giao diện
   **************************************/
  function renderVocab(data) {
    if (!Array.isArray(data) || data.length === 0)
      return `<p class="text-danger text-center">❌ Không có dữ liệu từ vựng</p>`;
    return `
      <ul class="list-group list-group-flush mb-5">
        ${data.map(item => `
          <li class="list-group-item d-flex justify-content-between align-items-center vocab-item">
            <div>
              <strong class="hanquoc1">${item.korean || ""}</strong>
              <div class="text-first vietnamese">${item.vietnamese || ""}</div>
            </div>
            ${item.audio ? `<div class="play" key="${item.audio}" title="Phát âm"></div>` : ""}
          </li>`).join("")}
      </ul>`;
  }


 function renderTracNghiem(data) {
  const vocabBox = document.getElementById("vocabBox");
  vocabBox.innerHTML = `
    <div class="my-4">
      <div id="quizContent"></div>
    </div>`;
  EPSQuiz.createQuizFromData(data);
}
  
  function renderLuyenNghe(data){
   const vocabBox = document.getElementById("vocabBox");
  vocabBox.innerHTML = `
    <div class="my-4">
      <div id="quizContent"></div>
    </div>`;
  EPSQuiz.createQuizFromData(data, { questionKey: "audio", answerKey: "vietnamese", showAudio: true });
  }
  

  function renderTroChoi(data) {
    const vocabBox = document.getElementById("vocabBox");
      vocabBox.innerHTML = `
        <div class="my-4">
          <div id="game"></div>
        </div>`;
      $("#game").wordMatchGame({
            data: data
          });
  }

  
  
  /****/

  /**************************************
   * 🔘 Sự kiện menu
   **************************************/
  $('#tu-vung .menu-btn').on('click', function () {
    $('#tu-vung .menu-btn').removeClass('active');
    $(this).addClass('active');
    
    handleMenuClick($(this).data('key')); 
    
  });
  // 🚀 Khi load trang: hiển thị "Danh sách"
  handleMenuClick("danh-sach");

});
