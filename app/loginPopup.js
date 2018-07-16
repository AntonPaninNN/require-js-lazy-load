define(function (require) {
    window.changeBackground = function() {
        require(['./changeBackground'], function(changeBackgroundModule) {
            changeBackgroundModule.changeBackground();
        });
    }

    return {
        loadLoginPopup: function () {
            $("#main").load("app/html/loginPopup.html");
        }
    };
});