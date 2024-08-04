import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Videos from './Pages/Videos.jsx';
import Gallery from './Pages/Gallery.jsx';
import Profile from './Pages/Profile.jsx';
import ErrorPage from './Pages/404Error.jsx';
import { ThemeProvider } from './components/Elements/DarkModeButton/ThemeProvider.jsx';
import './index.css';
import './assets/css/style.css';
import './assets/javascript/script.js';
import galleryItems from './components/Fragments/GalleryFragments/galleryItems.js';
import videosItems from './components/Fragments/VideosFragments/videosItems.js';

const VideosComponent = ({ componentName }) => {
  const Component = React.lazy(() => import(`./components/Fragments/VideosFragments/VideosItems/${componentName}.jsx`));
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Component />
    </React.Suspense>
  );
};

const GalleryComponent = ({ componentName }) => {
  const Component = React.lazy(() => import(`./components/Fragments/GalleryFragments/GalleryItems/${componentName}.jsx`));
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Component />
    </React.Suspense>
  );
};

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/profile/videos' element={<Videos />} />
            <Route path='/profile/gallery' element={<Gallery />} />
            {galleryItems.map((item, index) => {
              const componentName = item.randomName;
              return (
                <Route
                  key={index}
                  path={`/gallery/${componentName}`}
                  element={<GalleryComponent componentName={componentName} />}
                />
              );
            })}
            {videosItems.map((item, index) => {
              const componentName = item.randomName;
              return (
                <Route
                  key={index}
                  path={`/videos/${componentName}`}
                  element={<VideosComponent componentName={componentName} />}
                />
              );
            })}
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
