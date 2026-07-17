let currentLang = "en";

function applyStaticTranslations(){

    document.querySelectorAll("[data-en]").forEach(el=>{

        el.innerHTML = currentLang==="en" ? el.dataset.en : el.dataset.zh;

    });

    const toggle=document.getElementById("lang-toggle");
    toggle.textContent = currentLang==="en" ? "中文" : "English";

}

document.getElementById("lang-toggle").addEventListener("click",()=>{

    currentLang = currentLang==="en" ? "zh" : "en";

    applyStaticTranslations();

});
