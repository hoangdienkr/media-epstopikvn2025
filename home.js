const API_URL = "https://script.google.com/macros/s/AKfycbyFmA8KRE7gPxZA5GnbJgpAXky9Mj0r-yCMQ71P81WL_wx0jSYtFEh9ln0aaqgzD4S2gQ/exec";
const baseImg = "https://cdn.jsdelivr.net/gh/hoangdienkr";
// 1️⃣ TỪ VỰNG
function renderVocab(data) {
  if (!Array.isArray(data) || data.length === 0)
    return `<p class="text-danger text-center">❌ Không có dữ liệu từ vựng</p>`;
  return `
     <h5 class="card-title fw-bold mb-2 text-bg-tuvung p-3 mt-3"><span class="hanquoc1 text-white">어휘</span> Từ vựng</h5>
    <ul class="list-group list-group-flush mb-5">
      ${data
        .map(
          (item) => `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <strong class="hanquoc1">${item.korean || ""}</strong><br>
            <small class="text-muted">${item.vietnamese || ""}</small>
          </div>
          ${item.audio ? `<div class="play" key="${item.audio}"></div>` : ""}
        </li>`
        )
        .join("")}
    </ul>`;
}

// 2️⃣ HỘI THOẠI
function renderDialogue(data,id) {
  if (!Array.isArray(data) || data.length === 0)
    return `<p class="text-danger">❌ Dữ liệu hội thoại không hợp lệ hoặc trống</p>`;

  let html = ``;
  data.forEach((dialogue, idx) => {
    html += `
      <div class="hoi-thoai mb-5">
        <h5 class="card-title fw-bold mb-2 text-bg-hoithoai p-3  mt-3"><span class="hanquoc1 text-white">대화</span> Hội thoại ${idx + 1}</h5>

        ${dialogue.hinhanh ? `
       <div class="row"><div class="col-sm-4"><div class="text-center mb-2">
          <img class="img-fluid rounded" 
               src="${baseImg}/${id}@main/${dialogue.hinhanh}"
               title="Hình hội thoại ${idx + 1}">
        </div></div>` : ""}
         <div class="col-sm-8">
        ${dialogue.audio ? `<div class="play mb-2" key="${dialogue.audio}"></div>` : ""}

        <div class="pt-2">
          ${Array.isArray(dialogue.hoithoai)
            ? dialogue.hoithoai
                .map(
                  (line) => `
              <p class="mb-1">
                <strong class="hanquoc1 text-danger">${line.speaker || ""}:</strong>
                <span class="hanquoc1 fw-bold">${line.korean || ""}</span><br>
                <small class="text-muted">${line.vietnamese || ""}</small>
              </p>`
                )
                .join("")
            : `<p class="text-muted fst-italic">Không có nội dung hội thoại.</p>`}
        </div></div></div>

        ${
          Array.isArray(dialogue.questions) && dialogue.questions.length
            ? `
          <fieldset class="mt-3">
            <legend><strong>Câu hỏi hội thoại</strong></legend>
            <ul class="mt-2">
              ${dialogue.questions
                .map(
                  (q) => `
                <li>
                  <span class="hanquoc1 fw-bold">${q.korean_question || ""}</span><br>
                  <small class="text-muted">${q.vietnamese_question || ""}</small><br>
                  <strong class="text-info hanquoc1">${q.korean_answer || ""}</strong><br>
                  <small class="text-muted">(${q.vietnamese_answer || ""})</small>
                </li>`
                )
                .join("")}
            </ul>
          </fieldset>`
            : ""
        }
      </div>`;
  });
  return html;
}

// 3️⃣ NGỮ PHÁP
function renderGrammar(data) {
  if (!Array.isArray(data)) return `<p class="text-danger">Dữ liệu ngữ pháp không hợp lệ</p>`;

  let html = ``;

  data.forEach(item => {
    html += `
      <div class="mb-5">
        <div class="card-body">
          <h5 class="card-title fw-bold mb-3 text-bg-nguphap p-3 mt-3"><span class="hanquoc1 text-white">문법</span> Ngữ pháp <span class="hanquoc1 text-white">${item.nguphap || ''}</span></h5>
          <p class="card-subtitle mb-2 text-muted"><strong>Cấu trúc:</strong> <span class="hanquoc1 fw-bold">${item.loai || ''}</span></p>
          <p class="mb-2"><strong class="text-muted">Ý nghĩa:</strong> ${item.ynghia || ''}</p>
          <p class="mb-2"><strong class="text-muted">Quy tắc:</strong> ${item.luat || ''}</p>

          ${Array.isArray(item.vidu) ? `
            <div class="mt-3">
              <strong class="text-muted">Ví dụ:</strong>
              <ul class="mt-1">
                ${item.vidu.map(v =>
                  `<li>
                     <span class="hanquoc1 fw-bold">${v.cau || ''}</span><br>
                     <small class="text-muted">${v.nghia || ''}</small>
                   </li>`).join('')}
              </ul>
            </div>` : ''
          }
        </div>
      </div>
    `;
  });

  return html;
}

// 4️⃣ VĂN HÓA
function renderCulture(data, folder, lessonID) { 
  if (!Array.isArray(data)) return `<p class="text-danger">Dữ liệu văn hóa không hợp lệ</p>`;
  let html = `<h5 class="card-title fw-bold mb-2 text-bg-vanhoa p-3 mt-3"><span class="hanquoc1 text-white">문화와 정보</span> Văn hóa và thông tin</h5>`;
  data.forEach((section, idx) => {
    if (section.title) {
      html += `
        <div class="mb-1 hanquoc1 text-center fw-bold">
          ${section.title.korean || ''}
        </div>
        <p class="text-muted text-center fw-bold"><em>${section.title.vietnamese || ''}</em></p>
      `;
    }

    if (Array.isArray(section.data)) {
      html += `<div class="mb-4 van-hoa-content">`;
       // chèn ảnh văn hóa (data-file - chưa set src)
      const fileName = `van-hoa-${lessonID}.png`;

      html += `
          <img  class="img-vanhoa" src="${baseImg}/${folder}@main/${fileName}" alt="Ảnh văn hóa">
        <div class="van-hoa-text">
      `;
      section.data.forEach(item => {
        html += `
          <div class="mb-1">
            <p class="fw-bold hanquoc1">${item.korean || ''}</p>
            <p class="text-muted">${item.vietnamese || ''}</p>
          </div>
        `;
      });
     
      html += `</div>`;
    }

    // từ vựng trong section (nếu có)
    if (section.voca && typeof section.voca === 'object') {
      html += `<div class="tu-vung-van-hoa mb-5"><h5 class="mt-3 text-primary">📚 Từ vựng</h5>
               <div class="row row-cols-1 row-cols-md-2 g-2">`;
      Object.entries(section.voca).forEach(([kr, vi]) => {
        html += `
          <div class="col">
            <div class="card p-2 d-flex flex-row justify-content-between align-items-center">
              <strong class="hanquoc1">${kr}</strong>
              <span class="text-muted">${vi}</span>
            </div>
          </div>`;
      });
      html += `</div></div>`;
    }
  });
  return html;
}

// ======== MAIN AUDIO ========
var mainAudio = new Audio();
// ==================== 🔊 Audio Player ====================
(function ($) {
  $.fn.audioPlayer = function (options) {
    const settings = $.extend(
      { list: "", baseUrl: "https://cdn.jsdelivr.net/gh/hoangdienkr", keyAttr: "key", pauseClass: "pause" },
      options
    );
    const $btns = this;
    let currentKey = null;

    $btns.off("click").on("click", function () {
      const $this = $(this);
      const key = $this.attr(settings.keyAttr);
      $btns.not($this).removeClass(settings.pauseClass);

      if (key) {
        if (currentKey !== key) {
          mainAudio.src = `${settings.baseUrl}/${settings.list}@main/${key}`;
          mainAudio.currentTime = 0;
          mainAudio.play();
          currentKey = key;
          $this.addClass(settings.pauseClass);
        } else {
          if (mainAudio.paused) {
            mainAudio.play();
            $this.addClass(settings.pauseClass);
          } else {
            mainAudio.pause();
            $this.removeClass(settings.pauseClass);
          }
        }
      }
    });

    mainAudio.addEventListener("ended", () => $btns.removeClass(settings.pauseClass));
    return this;
  };
})(jQuery);
//===================Toast===================
function showToast(message, type="success", delay=3000) {
    // Kiểm tra container, nếu chưa có thì tự tạo
    let container = $("#myToastContainer");
    if (!container.length) {
        container = $(`
            <div id="myToastContainer" 
                 style="position: fixed; top: 10px; right: 10px; z-index: 9999;">
            </div>
        `);
        $("body").append(container);
    }

    // Tạo Toast element
    const toastEl = $(`
      <div class="toast align-items-center text-bg-${type} border-0 shadow-sm mb-2" 
           role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
          <div class="toast-body fs-6">${message}</div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" 
                  data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>
    `);

    container.append(toastEl);

    // Hiển thị toast
    const toast = new bootstrap.Toast(toastEl[0], { delay });
    toast.show();

    // Xóa element khi toast ẩn
    toastEl.on("hidden.bs.toast", () => toastEl.remove());
}

//===================End Toast ===================