browserNotification
----

Example
---
```js
sendNotification("Hi!", {
  icon:"https://avatars3.githubusercontent.com/u/6288313?v=2&s=460", //The URL of an image to be used as an icon by the notification
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis. ", ///A string representing an extra content to display within the notification
  dir: "ltr", // The direction of the notification; it can be auto, ltr, or rtl
  //tag:"myPersionalID", //An ID for a given notification that allows to retrieve, replace or remove it if necessary icon: The URL of an image to be used as an icon by the notification
  lang: "nl" //Specifiy the lang used within the notification. This string must be a valid BCP 47 language tag.
});
```
