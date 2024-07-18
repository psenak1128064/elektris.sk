var wm = document.getElementsByClassName("weidmuller")[0],
    pb = document.getElementsByClassName("pfannenberg")[0],
    pd = document.getElementsByClassName("panduit")[0],
    ic = document.getElementsByClassName("intercable")[0],
    arr = [wm, pb, pd, ic]

function wmr() {
    location.href = "http://www.weidmueller.cz/"
}

function pbr() {
    location.href = "https://www.pfannenberg.com/"
}

function pdr() {
    location.href = "https://www.panduit.com/"
}

function icr() {
    location.href = "https://www.intercable-cee.com/"
}

arr.forEach((el) => {
    switch (el.className) {
        case "weidmuller":
            el.onclick = wmr
            break;
        case "pfannenberg":
            el.onclick = pbr
            break;
        case "panduit":
            el.onclick = pdr
            break;
        case "intercable":
            el.onclick = icr
            break;
    }
})