// ==UserScript==
// @name         🔪 Payllion Killer 
// @namespace    https://github.com/Andreaweo/Payllion-Killer
// @version      3.5-pro
// @description  Хола Амиогос!
// @author       @Andreaweo
// @match        *://lk.payllion.net/operator*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    let autoClickEnabled = true;
    let soundEnabled = true;

    const clickSound = new Audio("https://sdmntprukwest.oaiusercontent.com/file-XErLg4XQmeZzJ64NwczQiJ?se=2025-05-25T22%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&sig=placeholder");
    clickSound.volume = 0.2;

    // UI
    const ui = document.createElement("div");
    ui.innerHTML = `
        <div id="payllion-killer-ui" style="
            position: fixed;
            top: 2cm;
            right: 1cm;
            z-index: 9999;
            background: rgba(0, 0, 0, 0.4);
            padding: 10px;
            border-radius: 8px;
            color: white;
            font-family: monospace;
            font-size: 14px;
            text-align: center;
        ">
            <div><strong>🔪 Payllion Killer</strong></div>
            <div style="margin-top: 5px;">[ Ctrl + B ] ON / OFF</div>
            <div>[ Ctrl + M ] Sound: <span id="sound-status">ON</span></div>
        </div>
        <img src="https://sdmntprukwest.oaiusercontent.com/file-000000007cac62439d76485b98b8c413/raw"
             style="position: fixed; bottom: 5px; right: 10px; opacity: 0.5; height: 160px; z-index: 9998;">
    `;
    document.body.appendChild(ui);

    // Периодическая проверка (медленнее)
    setInterval(() => {
        if (!autoClickEnabled) return;

        const btn = document.querySelector('[title="Взять в работу"]');
        if (btn && btn.offsetParent !== null) { // проверка, что кнопка видима
            btn.click();
            if (soundEnabled) {
                clickSound.play().catch(() => {});
            }
            console.log("✅ Заявка взята");
        }
    }, 1500); // каждые 1.5 сек

    // Горячие клавиши
    window.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.code === "KeyB") {
            autoClickEnabled = !autoClickEnabled;
            alert(`Payllion Killer ${autoClickEnabled ? "ВКЛЮЧЕН" : "ВЫКЛЮЧЕН"}`);
        }
        if (e.ctrlKey && e.code === "KeyM") {
            soundEnabled = !soundEnabled;
            document.getElementById("sound-status").textContent = soundEnabled ? "ON" : "OFF";
        }
    });
})();
