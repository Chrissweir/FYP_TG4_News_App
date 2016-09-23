## Final Year Project - BSc in Software Development
### COMP07030 Software Design Project
### TG4 Cross-Platform News App
### Christopher Weir

* Supervisor: Gerard Harrison
* [GitHub Link](https://github.com/Chrissweir/FYP_TG4_News_App)


#### Introduction
For my project I chose to do a Cross-Platform news app that was requested by TG4. This app would be required to work on Windows, Android and IOS systems. I decided to use Apache Cordova as my tool to create this app. I aimed to create an app with a similar theme of that of TG4’s website, as was the clients’ requirements. The app would read an RSS feed and output its content, the user would also be able to request the news in either Irish or English with Irish being the default. From there the user would be able to click on a news topic of their choice to see more about it. They would also be able to share that news via social media services such as Twitter and Facebook. Social media icons would appear in the footer of the app to allow the user to browse TG4’s official social media accounts. I would also create a push notification service to alert the user of new content available on the app when the RSS feed was updated. However, I was unable to get the details view of the news, sharing over social media, and the push notification to work.


#### Architecture of the solution
I am using Apache Cordova to create this project as the client requested that the app must be cross-platform and must be presented in a manner befitting the native devices. Cordova comprises of HTML5, CSS3, and JavaScript for cross-platform development, avoiding each mobile platforms' native development language. Applications execute within wrappers targeted to each platform, and rely on standards-compliant API bindings to access each device's sensors, data, and network status, etc. There are several components to a Cordova application. The following diagram shows a high-level view of the Cordova application architecture. 
 
I had many other choices of technologies that I could have used such as PhoneGap and Ionic Framework as they are all Hybrid Cross-Platform development frameworks. However, I chose Cordova as I have previously worked with Ionic Framework (which uses Cordova as backend) and I wanted to try something else. Adobe PhoneGap is a distribution of Apache Cordova that additionally provides integration with Adobe’s utilities and services. I had no plans to use Adobe’s services so I decided not to use PhoneGap.

When planning the design I also looked at in detail some other news apps such as RTE News Now, Sky News, and BBC News in order to get some inspiration on how I should design the UI of my app while staying close to the theme of TG4’s website.


#### Class diagram and Data Model
My project consists of three main files, the index.html (HTML) which contains the front page of the app, stylesheet.css (CSS3) which contains all the styling for the html page, and the index.js (JavaScript) which is used to retrieve the RSS feed and control the language being used. 

The HTML page contains the entire layout of the app, I have divided it into three main sections, the header, the main news content, and the footer. The header contains the logo of TG4 and a select option for the language choice. The main news content is contained in a number of <div/> elements which become populated by the index.js JavaScript file that has a function to fetch the RSS feed and append it back to this <div/> element in the HTML file. The footer hold the links for TG4’s social media accounts. Both the header and footer are “sticky”, this means they do not move as the user scrolls through the page allowing access to them at all times. This is done using CSS.

The StyleSheet.css contains all the styling for the html page. I designed the header and footer CSS in a way they will not move when the user scrolls through the content. I also have predefined styles for the RSS feed content. These styles will be applied to the individual elements when the content is loaded into the main news content <div/> in the index.html.

The index.js JavaScript file contains the functions to choose what language is to be used and the function to retrieve the corresponding RSS feed. Both these functions are created using jQuery. This makes the JavaScript code much shorter and simpler. The RSS feed fetch() function retrieves the feed and appends its content back to the HTML <div/>. Each item in the RSS feed is appended with and id and with the appropriate HTML tags. The id is used to link these items to its corresponding CSS style.


#### Technologies used
The client requirements stated that this app must be a cross-platform app, therefor I decided to use Apache Cordova as it is an open-source mobile development framework. It allows you to use standard web technologies such as HTML5, CSS3, and JavaScript for cross-platform development, avoiding each mobile platforms' native development language. When deciding upon my project I always had the idea of further developing my skills with HTML, CSS and JavaScript, and for me Apache Cordova fitted in perfectly to help me improve my knowledge of these languages. 

Visual Studio 2015 is the IDE I used to create this app. I have a previous two years’ experience developing in Visual Studio but I have never made a Cross-Platform app with it before and I wished to enhance my skills using this IDE.

I used an RSS feed supplied by RTE to retrieve the news content, I had to examine the feed to determine how it was designed and structured so I could display the content in a way that fitted to the design of TG4’s microsite. 

I also used jQuery to help lower the amount of JavaScript used in the app. JQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code. I mainly used jQuery to retrieve the RSS feed and to change what language is being used. 

Throughout developing my app I had been testing it locally on my Window 10 laptop. Once I created a stable enough version of my app I decided to test it on my Samsung Galaxy S7 Edge running Android 6.0 Marshmallow. As I developed my app further I continued to test it on Android. 


#### Problems Encountered/Solved
When I started this project I began by designing the main HTML page of the app. Once I had the main layout ready I tried to find the RSS feed to load content into the app. However, I could not find it. I spend the majority of two or three weeks searching through TG4s website and their source code to see if I could find where they load their content from. I was unable to find the RSS feed. I then asked my supervisor Gerard Harrison if it would be possible to get in contact with TG4 themselves to work out where the feed was. Gerard set up a meeting with representatives of TG4 who talked with me about my plans for the app and they also provided me with the feed. They use RTE’s feed so that’s the one I have used in the project.

Once I had the RSS feed I began to search for ways to get my app to load the feed and parse its content to my HTML page. I spent about a week trying different ways but settled on using jQuery to load the feed and append the news content to the HTML page. This was a particularly difficult part of the development as I had never previously worked with RSS feed nor jQuery before to this extent.

Due to the constraints of using RTE’s RSS feed I was unable to create a news details page as the links provided are links to RTE’s website and not TG4’s. The only way around this that I can see now would be if TG4 provided their own RSS feed or if I take RTE’s and design a completely new page that moulds to the information that is appended to it with predefined CSS to lay that information out in a certain way that is presented in a manner befitting the overall design of the app. This also prevented me from being able to share the individual news article over social media such as Facebook and Twitter.
Also during the development, I would have liked to test it on IOS however I did not have means to do this as I did not have access to an Apple Mac nor IOS device in order to build and deploy my app on it.


#### Conclusions
My knowledge of HTML, CSS and JavaScript were below average before starting this project. I also had never developed a Cross-Platform app before. Now I believe my knowledge and skills in this area have vastly improved. I have really enjoying working with this framework and I would not hesitate to continue to design these types of apps in the future.

As I mentioned before I have never worked with RSS feeds nor jQuery that much. I now understand how RSS feeds function and how their contents can be manipulated. I have even attempted to create one for this app in the hope of getting the details view to work. I also have a greater understanding of how jQuery works and just how beneficial it can be when developing projects using JavaScript.

When it came to the overall design of the app I tried to base it on TG4’s current website. Through using CSS I believe I have accomplished this, the look and feel is similar to that of the actual website. I have a much better understanding of how CSS works and how I can design a page to exactly how I want it.

I hope to get in contact with TG4 again and send them a copy of my app in order to get some feedback from them. From there I could improve on certain aspects of my app where they deem necessary.


#### Recommendations
In the future I believe that I could improve this project and accomplish my original goals that I set out to complete. If I had more time I would attempt to create the news details page that moulds to the information that is appended to it with predefined CSS to lay that information out in a certain way that is presented in a manner befitting the overall design of the app. This would then make it possible for me to include the sharing aspect into the app.

I would also like to enhance the app to cover all aspect of news from general news to sports news to entertainment news. I aim to do this in my spare time of the summer months.
I believe I made a good choice of using Apache Cordova as my Framework for this app, however, if I were to start over again I would use Ionic Framework. The reason for this is that I have more experience with Ionic and I prefer to use it as it has a more efficient User Interface when compared to Cordova.

