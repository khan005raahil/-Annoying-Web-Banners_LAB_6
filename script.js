function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(cname) === 0) return c.substring(cname.length, c.length);
    }
    return "";
}

function showTopBanner() {
    if (sessionStorage.getItem("topBannerClosed") || navigator.doNotTrack == "1") return;
    document.getElementById("top-banner").classList.remove("hide");
}

function showFooterBanner() {
    if (getCookie("footerBannerClosed") || navigator.doNotTrack == "1") return;
    document.getElementById("footer-banner").classList.remove("hide");
}

function showModal() {
    if (localStorage.getItem("modalClosed") || navigator.doNotTrack == "1") return;
    document.getElementById("modal").classList.remove("hide");
}

function closeModal() {
    document.getElementById("modal").classList.add("hide");
    localStorage.setItem("modalClosed", true);
}

function closeTopBanner() {
    document.getElementById("top-banner").classList.add("hide");
    sessionStorage.setItem("topBannerClosed", true);
}

function closeFooterBanner() {
    document.getElementById("footer-banner").classList.add("hide");
    setCookie("footerBannerClosed", true, 7);
}