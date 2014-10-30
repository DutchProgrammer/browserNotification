function sendNotification (title, options) {
  // Memoize based on feature detection.
  if ("Notification" in window) {
    sendNotification = function (title, options) {

      Notification.requestPermission(function (permission) {

        // Whatever the user answers, we make sure we store the information
        if(!('permission' in Notification)) {
          Notification.permission = permission;
        }

        // If the user is okay, let's create a notification
        if (permission === "granted") {

          var notification = new Notification(title, options);

          //A handler for the click event. It is triggered each time the user clicks on the notification.
          $(notification).bind('click', function () {

            alert('You have clicked');
          });

          //A handler for the show event. It is triggered when the notification is displayed.
          $(notification).bind('show', function () {

            alert('Browser notification  is visible');
          });

          //A handler for the error event. It is triggered each time the notification encounters an error.
          $(notification).bind('error', function () {

            alert('Browser notification error');
          });

          //A handler for the close event. It is triggered when the user closes the notification.
          $(notification).bind('close', function () {

            alert('Browser notifcation has been closed');
          });

          //Notification.close();
        }
      });
    };
  } else if ("mozNotification" in navigator) {
    sendNotification = function (title, options) {
      // Gecko < 22
      var notification = navigator.mozNotification
               .createNotification(title, options.body, options.icon)
               .show();

      notification.addEventListener('click', function () {

        alert('You have clicked');
      });

      notification.addEventListener('show', function () {

        alert('Browser notification  is visible');
      });

      notification.addEventListener('error', function () {

        alert('Browser notification error');
      });

      notification.addEventListener('close', function () {

        alert('Browser notifcation has been closed');
      });

      return notification;
    };
  } else {
    sendNotification = function (title, options) {
      alert(title + ": " + options.body);
    };
  }
  sendNotification(title, options);
};

sendNotification("Hi!", {
  icon:"https://avatars3.githubusercontent.com/u/6288313?v=2&s=460", //The URL of an image to be used as an icon by the notification
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis. ", ///A string representing an extra content to display within the notification
  dir: "ltr", // The direction of the notification; it can be auto, ltr, or rtl
  //tag:"myPersionalID", //An ID for a given notification that allows to retrieve, replace or remove it if necessary icon: The URL of an image to be used as an icon by the notification
  lang: "nl" //Specifiy the lang used within the notification. This string must be a valid BCP 47 language tag.
  
});
