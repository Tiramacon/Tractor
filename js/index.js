// 页面框架切换
$(function(){
    var pageList = [
        "mapPage.html",
        "meterPage.html",
        "warningPage.html",
        "edit_work_path_page.html",
        "msg_show_page.html",
        "edit_msg_page.html",
        "statisticalPage.html"
    ];
    var childPageList = [
        "deviceManagePage.html",
        "productContentPage.html",
        "modelManagePage.html",
        "warningManagePage.html",
        "serviceManagePage.html",
        "producerMsgPage.html",
        "userManagePage.html",
        "departmentManagePage.html",
        "roleManagePage.html"
    ];

    $(".page").each(function(index){
        this.onclick = function (){
            $("#iframePage").attr("src", pageList[index]);
        };
    });
    $(".childPage").each(function(index){
        this.onclick = function (){
            $("#iframePage").attr("src", childPageList[index]);
        };
    });
});

// iframe自适应高度
function setIframeHeight(iframe) {
    if (iframe) {
        var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
        if (iframeWin.document.body) {
            iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
        }
    }
}
window.onload = function () {
    setIframeHeight(document.getElementById("iframePage"));
};