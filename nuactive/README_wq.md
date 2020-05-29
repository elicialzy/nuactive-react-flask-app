Herro Eli.

Flow of App:
Home.js to user authenticate -> log in -> App.js containing the other pages

File organisation:

1. Home.js
   - this is the first page
   - need to user authenticate on this page before proceeding to the App.js page
2. App.js
   - so i linked the about, activities, rewards page on the App.js
   - for now these pages are just functions, dk if need to create another js file for them
3. flask backend
   - to run, need to declare python first. i used: python run.py
   - the cors function is to connect frontend to backend, need to install on your python using: pip install -U flask-cors
   - i connected the 'About' page in the app to the backend, u can see this in App.js then scroll to the About function
   - not doing any backend stuff atm
4. auth.js, Callback.js, history.js, Routes.js
   - these are just for the user authentication
5. App.css
   - to style?
   - for now i only added background HAHAH

Things that come with react that i havent touched:
index.html, index.css
