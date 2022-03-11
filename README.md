# SLEEPMATE

### Software Used
Our high-fidelity prototype was built using React Native and Expo. Development and testing for the prototype was conducted via Xcode’s iOS simulator. In particular, our application is optimized for iPhone X.

### Operating Instructions
In order to run the application, please do the following.
- Download the application repository either directly from GitHub (linked here) or from the Sleepmate website (linked here).
- Unzip the file and navigate to the unzipped folder via command prompt.
- Run ```npm install``` to install dependencies.
- Run ```expo start```.
- Using a browser, navigate to the indicated port and select the iOS simulator. The application should then run on your computer.

### Hardcoded Elements
- On the “Roomies” page, we hard-coded the various roommate profiles (Derek Chung, Aaron Han, Michelle Xu, Emily Yang, Has No Friends) that can be added or deleted.
  - A list of profiles and their usernames are here:
    - Derek Chung, username: dchung22
    - Aaron Han, username: ahan
    - Michelle Xu, username: mxu
    - Emily Yang, username: eyang
    - Has No Friends, username: pending_friend
    - Not Friend, username: not_friend
  - The profile "Aaron Han" will always be sleeping, regardless of the time.
- On the “Stats” page, we hard-coded the conditions for the data for February 8-9, 9-10, and 10-11. Specifically, the “Sleep Quality” and “Ambient Noise Level” charts are generated at random. The statistics at the bottom are hard-coded.
- On the “Home” (Sleep) page, engaging the Sleep button will take you to 7:59 AM of the following morning, and the 8:00 AM alarm will sound 5 seconds afterwards. The wake-up time (8:00 AM) is hard-coded.
- On the “Notifs” page, we hard-coded 3 pre-existing messages (2 user messages from Derek Chung and Michelle Xu, respectively, and 1 system-side message from Sleepmate). The search bar is hard-coded to display only Derek Chung’s message no matter what is typed as a query; sending a message will result in the hard-coded personal reply: “Got it. Thanks for lmk!”. If the search bar is empty, any sent message will result in the hard-coded general reply: “Hi!”.
- On the “Profile” page, we hard-coded Tristan W. as the user profile (including the name, username, profile picture, and date joined).

### Limitations
- For the “Roomies” page, no roommates can be added or deleted besides the 6 sample roommates that exist when you first activate the app. As these contacts do not reflect actual user accounts, you can simulate the users accepting friend requests by clicking on the contact pending confirmation, and clicking the “Simulate user accepting request” button.
- For the “Stats” page, only 3 days’ worth of data exist. Because the app cannot actually track your sleep quality and ambient noise, no new data can be generated. The “Select Date” page does not have any actual functionality; clicking on a random date simply snaps you back to the statistics page you were viewing previously.
- For the “Home” (Sleep) page, the Sleep button does not activate any real sleep quality or ambient noise tracking capabilities.
- For the “Notifs” page, no actual notifications can be sent or received, aside from the auto-generated system-side notifications indicating that roommates have been added or deleted from the household.
- For the “Profile” page, no data exists for “Average Bedtime” or “Average Wakeup”. No such data can be generated by the app.
- Since the app is designed to be used across multiple users, a final version would have the option to allow the user to login using a username and password. However, since our app doesn't yet rely on Firebase and there aren't other users, the user will be automatically logged in as Tristan Wang with username tristan_wang_12345 with no ability to log out. If the app were fully functional, there would be a log in screen with various options to create an account, recover a lost password, and sign in using other platforms such as Google and Facebook.
- For the "Profile" page, it is not possible yet to edit details such as name, profile picture, or username. The absence of these features do not contribute to the main tasks, and are obvious tasks that would be added in a real-world development setting.
