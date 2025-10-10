 # Hero-Apps

Hero-Apps is a modern, fully responsive web application that showcases a curated collection of applications, allowing users to explore, download, and track installed apps. The project emphasizes clean UI/UX design, dynamic interactions, and state persistence using local storage. It’s built with React, Tailwind CSS, and modern frontend best practices.

---

###  Features

## 1. All Applications Page

- Displays all available apps in a responsive grid layout.

- Each app card includes:

- App image & icon

- App title

- Company/Developer name

- Downloads, ratings, and reviews

- Install/Uninstall button

- Supports sorting by downloads (High → Low, Low → High) via a dropdown.

- Fully responsive for mobile, tablet, and desktop.

## 2. App Details Page

- Detailed page for each app containing:

- Large app image with shadow & gradient highlight.

- Title, developer info with gradient text effect.

- App stats: downloads, average rating, total reviews.

- Ratings distribution chart (using recharts) showing star-level breakdown.
 
- Description section for app details.

- Install button with state persistence using localStorage, so installed apps remain marked even after page reloads.

## 3. Installed Apps Page

- Lists apps installed by the user.

- Shows total number of installed apps.

- Allows uninstalling apps.

- Sorts installed apps by downloads.

- Uses smooth loading animations & transitions for better UX.

## 4. Navigation & Layout

- Sticky, responsive navbar with logo & menu.

- Footer with project/company info.

- Loading indicator for page transitions.

- Uses React Router for seamless navigation between Home, Apps, and    Installation  pages.

## 5. Modern UI Design

- Gradient text and buttons to give a fresh look.
 
- Responsive cards, hover effects, and shadow animations.

- Fully responsive layouts using Tailwind CSS.

- Iconography integrated via react-icons for clear visual cues.

## 6. Persistent State

- Installation status is saved in localStorage.

- Even after page reloads or browser refresh, installed apps remain marked as “Installed”.

## 7. Error Handling

- Graceful error pages for 404 / App Not Found.

- Custom illustrations and actionable links to guide users back to home.

---

```
## Tech Stack
#### Layer   - 	Technology
   Frontend	 -   React.js
  Styling    -	Tailwind CSS
  Routing    -	React Router v6
   Icons    - 	react-icons (IoIosApps, GrInstall, FiDownload,     MdOutlineStar,           MdOutlineReviews)
 Charts	  -    Recharts
 State Persistence   -	 LocalStorage
Notifications    - 	react-hot-toast
```

 ---


## How it Works

- On Home, users see the hero banner and a preview of apps.

- On Apps page, all apps are displayed. Users can sort by downloads.

- Clicking on an app navigates to AppDetails, showing stats, description, and install button.

- Installed apps are tracked in Installation page. Users can uninstall apps.

- Loading spinner appears while data is being fetched or during page transitions.