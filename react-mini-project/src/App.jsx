import './App.css'
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import Fingerprint from '@mui/icons-material/Fingerprint';


import WeatherApp from './WeatherApp';

export default function App() {
  return (
    <div>
      <WeatherApp/>
    </div>
  );
}



//example of Material UI

// let handleClick = () => {
//   console.log("Button is clicked!");
// }
// return (
//   <>
//   <h2>Material UI!</h2>
//   <Button onClick={handleClick}variant="text">Text</Button>
//   <Button variant="contained" disableElevation>
//   Disable elevation
//   </Button>
//   <IconButton aria-label="fingerprint" color="secondary">
//       <Fingerprint />
//   </IconButton>
//   </>