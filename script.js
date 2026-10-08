const readings = [
  {
    id: "psychology-pauses",
    category: "psychology",
    categoryName: "Psikologi gelap",
    title: "Membaca jeda",
    byline: "Catatan kecil tentang memahami orang",
    description:
      "Kita sering mendengar kata-kata, tetapi lupa memperhatikan jeda di antaranya. Padahal, diam pun bisa menyimpan banyak cerita.",
    text:
      "Tidak semua orang menunjukkan perasaannya dengan cara yang sama. Ada yang bercerita panjang, ada pula yang memilih diam sambil menata pikirannya. Jeda bukan selalu tanda penolakan; kadang seseorang hanya sedang mencari kata yang paling tepat. Saat kita berhenti menebak dan mulai bertanya dengan tulus, percakapan terasa lebih aman. Memahami orang lain tidak berarti membaca pikirannya. Cukup hadir, mendengarkan tanpa buru-buru menyela, lalu memberi ruang untuk jawaban yang jujur.",
  },
  {
    id: "psychology-boundaries",
    category: "psychology",
    categoryName: "Psikologi gelap",
    title: "Batas yang sehat",
    byline: "Tentang mengenali kebutuhan diri",
    description:
      "Memahami pengaruh dan tekanan sosial bisa dimulai dari hal sederhana: mengenali batas yang membuat kita merasa aman.",
    text:
      "Pengaruh tidak selalu datang dalam bentuk perintah. Kadang ia hadir sebagai rasa sungkan, pujian yang berlebihan, atau desakan agar kita segera mengambil keputusan. Mengenali perasaan sendiri membantu kita melihat situasi dengan lebih jernih. Kita boleh meminta waktu untuk berpikir, mengajukan pertanyaan, atau mengatakan tidak tanpa harus menjelaskan semuanya. Hubungan yang baik memberi ruang bagi kedua pihak untuk memilih. Batas bukan tembok untuk menjauh; batas adalah pintu yang bisa kita buka dengan sadar.",
  },
  {
    id: "stories-station",
    category: "stories",
    categoryName: "Cerita pendek",
    title: "Kereta terakhir",
    byline: "Sebuah cerita tentang pulang",
    description:
      "Di stasiun kecil pada ujung kota, seseorang menunggu kereta sambil membawa surat yang belum berani ia kirim.",
    text:
      "Hujan baru saja reda ketika lonceng stasiun berbunyi sekali. Nara merapatkan mantel dan melihat surat di tangannya. Kertas itu sudah terlipat berkali-kali, tetapi namanya masih kosong. Dari kejauhan, lampu kereta muncul seperti garis kuning yang bergerak pelan. Ia bisa naik dan membiarkan surat itu tinggal di saku, atau turun di peron berikutnya untuk menemui seseorang yang sudah lama ia rindukan. Untuk pertama kalinya malam itu, Nara tersenyum. Rupanya pulang tidak selalu berarti kembali ke tempat yang sama.",
  },
  {
    id: "stories-garden",
    category: "stories",
    categoryName: "Cerita pendek",
    title: "Kebun di balkon",
    byline: "Cerita pendek dari lantai tujuh",
    description:
      "Sebuah pot kecil dan tetangga yang jarang bicara perlahan mengubah hari-hari di sebuah apartemen.",
    text:
      "Setiap pagi, Lila menyiram tanaman di balkon sempitnya. Suatu hari ia melihat pot baru di balkon sebelah, berisi bibit yang belum dikenal. Tetangganya, seorang lelaki tua yang selalu mengangguk tanpa bicara, sedang mencoba menanam tomat. Lila menawarkan sedikit kompos. Besoknya, sebuah cangkir teh muncul di pagar pembatas. Mereka mulai bertukar benih, lalu cerita tentang cuaca, lalu cerita tentang hidup. Beberapa bulan kemudian, balkon itu penuh daun hijau. Kota masih bising di bawah sana, tetapi pagi mereka terasa lebih lapang.",
  },
  {
    id: "growth-small-steps",
    category: "growth",
    categoryName: "Pengembangan diri",
    title: "Langkah yang cukup kecil",
    byline: "Catatan untuk hari yang terasa berat",
    description:
      "Perubahan tidak harus dimulai dengan rencana besar. Satu tindakan sederhana sering kali sudah cukup.",
    text:
      "Ada hari ketika daftar pekerjaan terasa lebih panjang dari tenaga yang kita punya. Pada hari seperti itu, kita tidak harus menaklukkan semuanya sekaligus. Pilih satu hal kecil yang bisa diselesaikan sekarang: merapikan meja, membuka halaman pertama, atau berjalan sebentar mencari udara. Tindakan sederhana memberi pikiran sebuah pijakan. Setelah satu langkah, langkah berikutnya mungkin terasa sedikit lebih ringan. Kemajuan bukan perlombaan dan tidak selalu tampak dari luar. Kadang, keberanian terbesar hari ini adalah tetap mencoba dengan cara yang lembut.",
  },
  {
    id: "growth-attention",
    category: "growth",
    categoryName: "Pengembangan diri",
    title: "Menjaga perhatian",
    byline: "Tentang waktu dan hal yang penting",
    description:
      "Perhatian kita terbatas. Mengarahkannya dengan sengaja adalah cara sederhana merawat waktu sendiri.",
    text:
      "Waktu berjalan sama cepatnya, tetapi perhatian kita mudah sekali berpindah. Sebuah notifikasi bisa menarik kita menjauh dari percakapan, pekerjaan, bahkan istirahat. Cobalah memilih satu hal untuk diberi perhatian penuh selama beberapa menit. Letakkan ponsel, tarik napas, dan sadari apa yang sedang dikerjakan. Fokus bukan berarti menolak semua hal lain; fokus adalah memutuskan apa yang layak mendapat ruang saat ini. Sedikit demi sedikit, pilihan kecil itu membantu hari terasa lebih milik kita.",
  },
  {
    id: "science-night-sky",
    category: "science",
    categoryName: "Sains & alam",
    title: "Cahaya dari masa lalu",
    byline: "Sepotong cerita tentang langit malam",
    description:
      "Saat melihat bintang, kita sebenarnya sedang menerima cahaya yang telah menempuh perjalanan sangat jauh.",
    text:
      "Cahaya bergerak begitu cepat sehingga sulit membayangkan jarak yang ditempuhnya. Namun, ruang antarbintang sangat luas. Cahaya dari beberapa bintang membutuhkan waktu bertahun-tahun sebelum sampai ke mata kita. Artinya, langit malam memperlihatkan banyak potongan masa lalu sekaligus. Sebagian cahaya yang terlihat malam ini berangkat ketika kehidupan di Bumi masih berbeda. Kita tidak perlu teleskop besar untuk merasakan keajaibannya. Cukup menengadah pada malam yang cerah dan mengingat bahwa semesta selalu mengirimkan cerita, satu kilau pada satu waktu.",
  },
  {
    id: "science-rain",
    category: "science",
    categoryName: "Sains & alam",
    title: "Perjalanan setetes hujan",
    byline: "Siklus kecil yang terus berulang",
    description:
      "Setetes air dapat berpindah dari laut ke awan, lalu kembali ke tanah dalam perjalanan yang tak pernah benar-benar selesai.",
    text:
      "Di bawah hangat matahari, air dari laut dan sungai perlahan berubah menjadi uap. Uap itu naik, mendingin, lalu berkumpul menjadi awan. Ketika butir-butir air semakin berat, hujan turun membasahi atap, kebun, dan jalanan. Sebagiannya meresap ke tanah, sebagian lagi mengalir menuju sungai dan kembali ke laut. Perjalanan ini berlangsung terus-menerus, meski kita jarang memikirkannya. Air yang menyentuh daun pagi ini mungkin pernah berada di tempat yang sangat jauh. Alam pandai memakai kembali apa yang dimilikinya.",
  },
];

const passageText = document.querySelector("#passage-text");
const typingInput = document.querySelector("#typing-input");
const typingArea = document.querySelector("#typing-area");
const timerElement = document.querySelector("#timer");
const wpmElement = document.querySelector("#wpm");
const accuracyElement = document.querySelector("#accuracy");
const progressElement = document.querySelector("#progress");
const resultPanel = document.querySelector("#result-panel");
const resultMessage = document.querySelector("#result-message");
const resultDetail = document.querySelector("#result-detail");
const bestScoreElement = document.querySelector("#best-score");
const promptElement = document.querySelector("#typing-prompt");
const durationButtons = [...document.querySelectorAll(".duration-button")];
const categoryButtons = [...document.querySelectorAll(".category-button")];
const journalForm = document.querySelector("#journal-form");
const journalInput = document.querySelector("#journal-entry");
const journalList = document.querySelector("#journal-list");
const moodForm = document.querySelector("#mood-form");
const moodOptions = [...document.querySelectorAll(".mood-option")];
const moodFeedback = document.querySelector("#mood-feedback");
const moodBars = document.querySelector("#mood-bars");
const moodTotal = document.querySelector("#mood-total");

let duration = 60;
let remaining = duration;
let category = "psychology";
let passage = readings[0];
let timerId = null;
let startedAt = null;
let finished = false;

const bestScores = JSON.parse(localStorage.getItem("derf4s-passage-best") || "{}");

function passagesForCategory(categoryId) {
  return readings.filter((reading) => reading.category === categoryId);
}

function choosePassage(categoryId = category, avoidCurrent = false) {
  const options = passagesForCategory(categoryId).filter(
    (reading) => !avoidCurrent || reading.id !== passage.id,
  );
  showPassage(options[Math.floor(Math.random() * options.length)]);
}

function showPassage(reading) {
  passage = reading;
  category = reading.category;
  categoryButtons.forEach((button) => {
    const selected = button.dataset.category === category;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  document.querySelector("#reading-category").textContent = passage.categoryName.toUpperCase();
  document.querySelector("#reading-counter").textContent =
    `BACAAN ${String(readings.filter((reading) => reading.category === category).indexOf(passage) + 1).padStart(2, "0")}`;
  document.querySelector("#passage-title").textContent = passage.title;
  document.querySelector("#passage-byline").textContent = passage.byline;
  document.querySelector("#passage-description").textContent = passage.description;
  const wordCount = passage.text.trim().split(/\s+/).length;
  document.querySelector("#reading-time").textContent = `${Math.max(1, Math.ceil(wordCount / 150))} menit baca`;
  resetTest();
}

function renderBookShelf() {
  const bookGrid = document.querySelector("#book-grid");
  bookGrid.replaceChildren();
  readings.forEach((reading, index) => {
    const button = document.createElement("button");
    button.className = "book-tile";
    button.type = "button";
    button.dataset.readingId = reading.id;

    const label = document.createElement("span");
    label.className = "book-tile-category";
    label.textContent = reading.categoryName;
    const title = document.createElement("strong");
    title.textContent = reading.title;
    const description = document.createElement("span");
    description.className = "book-tile-description";
    description.textContent = reading.description;
    const action = document.createElement("span");
    action.className = "book-tile-action";
    action.textContent = `Baca halaman ${String(index + 1).padStart(2, "0")} →`;

    button.append(label, title, description, action);
    button.addEventListener("click", () => {
      showPassage(reading);
      document.querySelector("#latihan").scrollIntoView({ behavior: "smooth" });
    });
    bookGrid.append(button);
  });
}

const dailyNotes = [
  {
    day: "Minggu",
    text: "Kamu tidak harus menyelesaikan semuanya hari ini. Pilih satu hal kecil, lalu mulai dari sana.",
  },
  {
    day: "Senin",
    text: "Kamu tidak perlu menaklukkan seluruh minggu hari ini. Satu langkah pertama sudah cukup untuk memulai.",
  },
  {
    day: "Selasa",
    text: "Tidak apa-apa jika prosesmu berbeda. Hidup bukan perlombaan dengan garis mulai yang sama.",
  },
  {
    day: "Rabu",
    text: "Berhenti sebentar bukan berarti tertinggal. Istirahat juga bagian dari perjalanan.",
  },
  {
    day: "Kamis",
    text: "Hari yang berat tidak menghapus semua hal baik yang sudah kamu usahakan.",
  },
  {
    day: "Jumat",
    text: "Kemajuan kecil tetaplah kemajuan, meski hari ini hanya kamu yang menyadarinya.",
  },
  {
    day: "Sabtu",
    text: "Kamu layak berbicara kepada diri sendiri dengan kelembutan yang sama seperti kepada teman.",
  },
];

function renderDailyNote() {
  const now = new Date();
  const note = dailyNotes[now.getDay()];
  document.querySelector("#today-date").textContent = now.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  document.querySelector("#today-weekday").textContent = note.day;
  document.querySelector("#daily-quote").textContent = note.text;
}

const journalStorageKey = "derf4s-journal-notes";
const moodNames = {
  senang: "Senang",
  semangat: "Semangat",
  tenang: "Tenang",
  lelah: "Lelah",
  sedih: "Sedih",
};
const moodStorageKey = "derf4s-community-mood";
const visitorStorageKey = "derf4s-community-visitor";

function getSupabaseConfig() {
  const config = window.DERF4S_SUPABASE;
  if (!config?.url || !config?.anonKey) return null;

  try {
    const url = new URL(config.url);
    if (url.protocol !== "https:" && url.hostname !== "localhost") return null;
    return { url: url.origin, anonKey: config.anonKey };
  } catch {
    return null;
  }
}

function getJakartaDate() {
  const parts = new Intl.DateTimeFormat("en", {
    timeZone: "Asia/Jakarta",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

function getVisitorId() {
  let visitorId = localStorage.getItem(visitorStorageKey);
  if (!visitorId) {
    visitorId = crypto.randomUUID();
    localStorage.setItem(visitorStorageKey, visitorId);
  }
  return visitorId;
}

function updateMoodSelection(mood) {
  moodOptions.forEach((button) => {
    const selected = button.dataset.mood === mood;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

function renderMoodSummary(entries) {
  const counts = Object.fromEntries(Object.keys(moodNames).map((mood) => [mood, 0]));
  entries.forEach((entry) => {
    if (Object.hasOwn(counts, entry.mood)) counts[entry.mood] = Number(entry.total);
  });

  const total = Object.values(counts).reduce((sum, count) => sum + count, 0);
  moodTotal.textContent = `${total} pilihan hari ini`;
  moodBars.replaceChildren();

  Object.entries(moodNames).forEach(([mood, label]) => {
    const count = counts[mood];
    const percentage = total ? Math.round((count / total) * 100) : 0;
    const row = document.createElement("div");
    row.className = "mood-result-row";
    const heading = document.createElement("div");
    heading.className = "mood-result-label";
    const name = document.createElement("span");
    name.textContent = label;
    const value = document.createElement("span");
    value.textContent = `${count} · ${percentage}%`;
    const track = document.createElement("div");
    track.className = "mood-result-track";
    track.setAttribute("role", "img");
    track.setAttribute("aria-label", `${label}: ${count} pilihan, ${percentage}%`);
    const fill = document.createElement("div");
    fill.className = `mood-result-fill mood-${mood}`;
    fill.style.width = `${percentage}%`;
    heading.append(name, value);
    track.append(fill);
    row.append(heading, track);
    moodBars.append(row);
  });
}

async function requestMoodRpc(functionName, body) {
  const config = getSupabaseConfig();
  if (!config) throw new Error("Mood check-in belum dikonfigurasi.");

  const response = await fetch(`${config.url}/rest/v1/rpc/${functionName}`, {
    method: "POST",
    headers: {
      apikey: config.anonKey,
      Authorization: `Bearer ${config.anonKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    const details = await response.text();
    console.error(`Supabase ${functionName} failed (${response.status}): ${details}`);
    throw new Error(`Permintaan gagal (${response.status}).`);
  }
  return response;
}

async function loadMoodSummary() {
  if (!getSupabaseConfig()) {
    moodTotal.textContent = "Belum tersambung";
    const unavailable = document.createElement("p");
    unavailable.className = "mood-unavailable";
    unavailable.textContent = "Ringkasan komunitas akan muncul setelah koneksi bersama diaktifkan.";
    moodBars.replaceChildren(unavailable);
    return;
  }

  try {
    const response = await requestMoodRpc("get_daily_mood_summary", {});
    renderMoodSummary(await response.json());
    const savedMood = JSON.parse(localStorage.getItem(moodStorageKey) || "null");
    if (savedMood?.date === getJakartaDate()) updateMoodSelection(savedMood.mood);
    else updateMoodSelection("");
    moodFeedback.textContent = "";
  } catch (error) {
    moodTotal.textContent = "Belum tersedia";
    const unavailable = document.createElement("p");
    unavailable.className = "mood-unavailable";
    unavailable.textContent = "Hasil belum dapat dimuat. Silakan coba lagi sebentar lagi.";
    moodBars.replaceChildren(unavailable);
    moodFeedback.textContent = error.message;
  }
}

function renderJournal() {
  const entries = JSON.parse(localStorage.getItem(journalStorageKey) || "[]");
  journalList.replaceChildren();
  if (entries.length === 0) {
    const empty = document.createElement("p");
    empty.className = "journal-empty";
    empty.textContent = "Catatanmu akan muncul di sini.";
    journalList.append(empty);
    return;
  }

  entries.forEach((entry) => {
    const article = document.createElement("article");
    article.className = "journal-entry";
    const meta = document.createElement("div");
    meta.className = "journal-entry-meta";
    const date = document.createElement("time");
    date.dateTime = entry.createdAt;
    date.textContent = new Date(entry.createdAt).toLocaleString("id-ID", {
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
    });
    const remove = document.createElement("button");
    remove.className = "journal-remove";
    remove.type = "button";
    remove.textContent = "Hapus";
    remove.setAttribute("aria-label", "Hapus catatan ini");
    remove.addEventListener("click", () => {
      const remainingEntries = JSON.parse(localStorage.getItem(journalStorageKey) || "[]")
        .filter((item) => item.id !== entry.id);
      localStorage.setItem(journalStorageKey, JSON.stringify(remainingEntries));
      renderJournal();
    });
    const text = document.createElement("p");
    text.textContent = entry.text;
    meta.append(date, remove);
    article.append(meta, text);
    journalList.append(article);
  });
}

function targetCharacters() {
  return [...passage.text];
}

function renderPassage() {
  passageText.replaceChildren();
  const typed = [...typingInput.value];
  const characters = targetCharacters();

  characters.forEach((character, index) => {
    const span = document.createElement("span");
    span.className = "passage-char";
    if (!finished && typed.length === index) span.classList.add("is-current");
    if (typed[index] !== undefined) {
      span.classList.add(typed[index] === character ? "is-correct" : "is-incorrect");
    }
    span.textContent = character;
    passageText.append(span);
  });

  const currentCharacter = passageText.querySelector(".is-current");
  if (currentCharacter) currentCharacter.scrollIntoView({ block: "nearest", inline: "nearest" });
}

function getStats() {
  const typed = [...typingInput.value];
  const target = targetCharacters();
  let correctCharacters = 0;

  for (let index = 0; index < Math.min(typed.length, target.length); index += 1) {
    if (typed[index] === target[index]) correctCharacters += 1;
  }

  const elapsedMinutes = Math.max((Date.now() - (startedAt || Date.now())) / 60000, 1 / 60);
  return {
    wpm: Math.round(correctCharacters / 5 / elapsedMinutes),
    accuracy: typed.length ? Math.round((correctCharacters / typed.length) * 100) : 100,
  };
}

function updateStats() {
  const stats = getStats();
  wpmElement.textContent = stats.wpm;
  accuracyElement.textContent = stats.accuracy;
  timerElement.textContent = remaining;
  progressElement.style.width = `${((duration - remaining) / duration) * 100}%`;
}

function updateBestScore() {
  const score = bestScores[`${passage.id}-${duration}`];
  bestScoreElement.textContent = Number.isFinite(score) ? score : "—";
}

function finishTest() {
  if (finished) return;
  finished = true;
  clearInterval(timerId);
  timerId = null;
  typingInput.disabled = true;
  typingArea.classList.add("is-finished");
  promptElement.textContent = "Bacaan selesai";
  renderPassage();
  updateStats();

  const stats = getStats();
  const scoreKey = `${passage.id}-${duration}`;
  if (!Number.isFinite(bestScores[scoreKey]) || stats.wpm > bestScores[scoreKey]) {
    bestScores[scoreKey] = stats.wpm;
    localStorage.setItem("derf4s-passage-best", JSON.stringify(bestScores));
  }
  updateBestScore();
  resultMessage.textContent =
    typingInput.value.length >= targetCharacters().length ? "Halaman ini selesai kamu baca." : "Latihan yang bagus.";
  resultDetail.textContent = `${stats.wpm} WPM · akurasi ${stats.accuracy}%`;
  resultPanel.hidden = false;
}

function startTimer() {
  if (timerId || finished) return;
  startedAt = Date.now();
  typingArea.classList.add("is-started");
  promptElement.textContent = "Terus ikuti kalimatnya";
  timerId = setInterval(() => {
    remaining = Math.max(0, duration - Math.floor((Date.now() - startedAt) / 1000));
    updateStats();
    if (remaining === 0) finishTest();
  }, 100);
}

function resetTest({ focus = false } = {}) {
  clearInterval(timerId);
  timerId = null;
  startedAt = null;
  finished = false;
  remaining = duration;
  typingInput.disabled = false;
  typingInput.value = "";
  typingArea.classList.remove("is-started", "is-finished");
  promptElement.textContent = "Klik teks untuk mulai mengetik";
  resultPanel.hidden = true;
  renderPassage();
  updateStats();
  updateBestScore();
  if (focus) typingInput.focus();
}

typingInput.addEventListener("input", () => {
  if (finished) return;
  if (typingInput.value.length > 0) startTimer();
  renderPassage();
  updateStats();
  if ([...typingInput.value].length >= targetCharacters().length) finishTest();
});

typingInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") event.preventDefault();
});

typingInput.addEventListener("paste", (event) => event.preventDefault());

typingArea.addEventListener("click", () => {
  if (!finished) typingInput.focus();
});

document.querySelector("#shuffle-passage").addEventListener("click", () => choosePassage(category, true));
document.querySelector("#restart-button").addEventListener("click", () => resetTest({ focus: true }));
document.querySelector("#result-restart").addEventListener("click", () => resetTest({ focus: true }));

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => choosePassage(button.dataset.category));
});

durationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    duration = Number(button.dataset.duration);
    durationButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("is-selected", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    resetTest();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") resetTest();
});

const journalCount = document.querySelector("#journal-count");
journalInput.addEventListener("input", () => {
  journalCount.textContent = `${journalInput.value.length} / 800`;
});

moodOptions.forEach((button) => {
  button.addEventListener("click", () => {
    updateMoodSelection(button.dataset.mood);
    moodFeedback.textContent = "";
  });
});

moodForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const selectedMood = moodOptions.find((button) => button.classList.contains("is-selected"));
  if (!selectedMood) {
    moodFeedback.textContent = "Pilih suasana hati yang paling dekat denganmu dulu.";
    return;
  }
  if (!getSupabaseConfig()) {
    moodFeedback.textContent =
      "Check-in bersama belum aktif. Admin perlu menghubungkan project Supabase terlebih dahulu.";
    return;
  }

  const submitButton = document.querySelector("#mood-submit");
  submitButton.disabled = true;
  moodFeedback.textContent = "Menyimpan pilihan anonim…";
  try {
    const visitorId = getVisitorId();
    await requestMoodRpc("submit_daily_mood", {
      p_visitor_id: visitorId,
      p_mood: selectedMood.dataset.mood,
    });
    localStorage.setItem(
      moodStorageKey,
      JSON.stringify({ date: getJakartaDate(), mood: selectedMood.dataset.mood }),
    );
    moodFeedback.textContent = "Terima kasih sudah berbagi suasana hari ini.";
    await loadMoodSummary();
    moodFeedback.textContent = "Terima kasih sudah berbagi suasana hari ini.";
  } catch (error) {
    console.error("Mood check-in could not be saved:", error);
    moodFeedback.textContent = `Pilihan belum tersimpan. ${error.message}`;
  } finally {
    submitButton.disabled = false;
  }
});

journalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = journalInput.value.trim();
  if (!text) {
    document.querySelector("#journal-feedback").textContent = "Tulis sedikit dulu sebelum menyimpan.";
    journalInput.focus();
    return;
  }

  const entries = JSON.parse(localStorage.getItem(journalStorageKey) || "[]");
  entries.unshift({ id: crypto.randomUUID(), text, createdAt: new Date().toISOString() });
  try {
    localStorage.setItem(journalStorageKey, JSON.stringify(entries.slice(0, 20)));
  } catch (error) {
    document.querySelector("#journal-feedback").textContent =
      "Catatan belum tersimpan. Periksa ruang penyimpanan browser kamu.";
    return;
  }

  journalInput.value = "";
  journalCount.textContent = "0 / 800";
  document.querySelector("#journal-feedback").textContent = "Catatan tersimpan di browser ini.";
  renderJournal();
});

renderBookShelf();
renderDailyNote();
renderJournal();
loadMoodSummary();
choosePassage(category);
