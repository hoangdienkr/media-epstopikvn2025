 (function($) {
    $.fn.epsQuiz = function(options) {
        const settings = $.extend({
            folder: "",
            file: "",
            baseImg: "https://cdn.jsdelivr.net/gh/hoangdienkr",
            api: "https://script.google.com/macros/s/AKfycbxS9zOMKLd5htbVfO6J6hQ8yATJLDXvibPCT_x4wopS6-xdd_njLDtwGBYwBTFF46LFFA/exec",
            total: null,
            audioCount: null,
            shuffle: false,          // Đảo thứ tự câu hỏi hay không
            shuffleAnswers: false    // Giữ nguyên thứ tự đáp án
        }, options);

        const container = this[0];
        let quizData = [];
        let correctCount = 0;
        let finishedCount = 0;

        function decodeHTML(str) {
            const txt = document.createElement("textarea");
            txt.innerHTML = str;
            return txt.value;
        }

        function filterQuizData(data) {
            let result = [];

            // Lấy đúng audioCount câu có audio theo thứ tự JSON
            if (settings.audioCount) {
                let audioAdded = 0;
                for (let i = 0; i < data.length; i++) {
                    if (data[i].audio && audioAdded < settings.audioCount) {
                        result.push(data[i]);
                        audioAdded++;
                    }
                }
            }

            // Lấy thêm các câu còn lại để đủ total
            if (settings.total) {
                let remaining = settings.total - result.length;
                for (let i = 0; i < data.length && remaining > 0; i++) {
                    if (!result.includes(data[i])) {
                        result.push(data[i]);
                        remaining--;
                    }
                }
            }

            // Nếu total không set, lấy tất cả
            if (!settings.total) return result.length ? result : data;
            return result;
        }

        function showResult(total) {
            const box = document.createElement("div");
            box.style.textAlign = "center";
            box.innerHTML = `
                <div class="alert alert-info">
                  ✅ Bạn đã đúng ${correctCount} / ${total} câu!
                </div>
                <button id="restartBtn" class="btn btn-submit text-white mt-3">Làm lại</button>
            `;
            container.appendChild(box);
            $("#restartBtn").on("click", () => {
                renderQuizList();
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        }

        function renderQuizList() {
            container.innerHTML = "";
            correctCount = 0;
            finishedCount = 0;

            let dataToRender = [...quizData];
            if (settings.shuffle) {
                dataToRender.sort(() => Math.random() - 0.5);
            }

            dataToRender.forEach((q, qIndex) => {
                const box = document.createElement("div");
                box.className = "question-box";

                const qTextDiv = document.createElement("div");
                qTextDiv.className = "question";
                const qHtml = (q.question && q.question.text) ? q.question.text : "";
                qTextDiv.innerHTML = `<strong class="fs-4 text-primary">Câu ${qIndex + 1} :</strong>
                                      <div class="korean2">${qHtml.replace(/\n/g, "<br>")}</div>`;
                box.appendChild(qTextDiv);

                if (q.photo) {
                    const img = document.createElement("img");
                    img.className = "photo";
                    img.src = settings.baseImg + "/" + q.photo;
                    box.appendChild(img);
                }

                if (q.audio) {
                    const btn = document.createElement("div");
                    btn.className = "play";
                    btn.setAttribute("key", q.audio);
                    box.appendChild(btn);
                }

                const rawOpts = Array.isArray(q.options) ? q.options.slice() : [];
                const normalized = rawOpts.map(o => {
                    if (typeof o === "string") return { text: o, translate: "", isImage: false };
                    if (o.image && !o.text) return { text: o.image, translate: o.translate || "", isImage: true };
                    return { text: o.text || o.image || "", translate: o.translate || "", isImage: !!o.image };
                });

                let opts = normalized.map((opt, idx) => ({ opt, origIdx: idx }));

                // Không shuffle đáp án
                if (settings.shuffleAnswers) {
                    opts.sort(() => Math.random() - 0.5);
                }

                const ul = document.createElement("ul");
                ul.className = (q.type === 1) ? "options options-img korean2" : "options korean2";

                const transBlock = document.createElement("div");
                transBlock.className = "translate mt-2";
                transBlock.style.display = "none";

                let answered = false;

                opts.forEach((item, displayIdx) => {
                    const li = document.createElement("li");
                    if (q.type === 1 || item.opt.isImage) {
                        li.innerHTML = `<div class="eps-dapan">
                              <div class="column"><span>${displayIdx + 1}</span></div>
                              <div class="column"><img src="${settings.baseImg}/${item.opt.text}" class="option-img" alt="opt${displayIdx+1}"></div>
                            </div>`;
                    } else {
                        li.innerHTML = `<div class="eps-dapan">
                              <div class="column"><span>${displayIdx + 1}</span></div>
                              <div class="column">${decodeHTML(item.opt.text)}</div>
                            </div>`;
                    }

                    li.setAttribute("data-orig-idx", item.origIdx);
                    li.setAttribute("data-displayed-idx", displayIdx);
                    li._optTranslate = item.opt.translate || "";

                    li.addEventListener("click", function() {
                        if (answered) return;
                        answered = true;
                        finishedCount++;

                        const chosenOrig = item.origIdx;
                        const correctOrig = (typeof q.answer === "number") ? (q.answer - 1) : null;

                        if (correctOrig !== null && chosenOrig === correctOrig) {
                            li.classList.add("correct");
                            correctCount++;
                        } else {
                            li.classList.add("wrong");
                            const children = Array.from(ul.children);
                            const correctLi = children.find(c => parseInt(c.getAttribute("data-orig-idx"), 10) === correctOrig);
                            if (correctLi) correctLi.classList.add("correct");

                            let content = "";
                            if (q.question && q.question.translate) {
                                content += `<div>${q.question.translate.replace(/\n/g,"<br>")}</div>`;
                            }
                            if (q.type === 0) {
                                const transLines = children.map((c, idx) => {
                                    const orig = parseInt(c.getAttribute("data-orig-idx"), 10);
                                    const optData = normalized[orig] || { text: "", translate: "" };
                                    return `${idx + 1}. ${optData.translate || ""}`;
                                });
                                if (transLines.length) content += `<div style="margin-top:8px;">${transLines.join("<br>")}</div>`;
                            }
                            transBlock.innerHTML = content;
                            $(transBlock).hide().fadeIn(220);
                            transBlock.style.display = "block";
                        }

                        Array.from(ul.children).forEach(x => x.style.pointerEvents = "none");
                        if (finishedCount === dataToRender.length) showResult(dataToRender.length);
                    });

                    ul.appendChild(li);
                });

                box.appendChild(ul);
                box.appendChild(transBlock);
                container.appendChild(box);
            });

            $(".play").audioPlayer();
        }

       function fetchLesson() {
    container.innerHTML = `
        <div class="text-center p-4">
            <div class="spinner-border text-primary" style="width:3rem; height:3rem;"></div>
            <p class="mt-3">Đang tải dữ liệu...</p>
        </div>`;

    const showLoginRequired = (msg) => {
        container.innerHTML = `
            <div class="alert alert-warning text-center">
                ${msg}
            </div>`;
        $("#loginModal").modal('show');
    };

    const sessionStr = localStorage.getItem("session");
    if (!sessionStr) {
        showLoginRequired("⚠️ Bạn chưa đăng nhập!");
        return;
    }

    const session = JSON.parse(sessionStr);

    // ✅ Kiểm tra session hết hạn
    if (!session.token || (session.expires && Date.now() > session.expires)) {
        localStorage.removeItem("session");
        showLoginRequired("⚠️ Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại!");
        return;
    }

    $.ajax({
        url: settings.api,
        dataType: "jsonp",
        data: {
            action: "getJsonFile",
            token: session.token,
            folder: settings.folder,
            file: settings.file,
            callback: "callback"
        },
        success: (res) => {
            console.log("Kết quả server trả về:", res);

           // ✅ Kiểm tra lỗi từ server đúng cách
             if (!res.success) {
                 // Nếu server trả lỗi do token sai
                 if (res.error === "INVALID_TOKEN" || res.error === "TOKEN_EXPIRED") {
                     localStorage.removeItem("session");
                     showLoginRequired("⚠️ Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại!");
                     return;
                 }
             
                 // ✅ Còn những lỗi khác -> chỉ báo lỗi, KHÔNG logout
                 container.innerHTML = `⚠️ Lỗi: ${res.message || "Không có dữ liệu từ server!"}`;
                 return;
             }

            if (!res.data) {
                container.innerHTML = `
                    <div class="alert alert-danger text-center">
                        ⚠️ Không tìm thấy dữ liệu bài học!
                    </div>`;
                return;
            }

            quizData = filterQuizData(res.data);
            renderQuizList();
        },
        error: () => {
            container.innerHTML = `
                <div class="alert alert-danger text-center">
                    ⚠️ Không thể kết nối máy chủ. Vui lòng kiểm tra mạng!
                </div>`;
        }
    });
}

        fetchLesson();
        return this;
    }
})(jQuery);
/*
  $("#eps-quiz-container").epsQuiz({
    folder: "epsbook2015tracnghiem",
    file: "eps-quiz-2025-2",
    total: 6,
    audioCount: 2,
    shuffle: false,     
    shuffleAnswers: false 
  });
*/
