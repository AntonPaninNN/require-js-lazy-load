define(function (require) {
    window.loadLoginPopup = function () {
        require(['./loginPopup'], function (loginPopupModule) {
            loginPopupModule.loadLoginPopup();
        });
    }
});