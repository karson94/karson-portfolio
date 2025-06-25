import { Flex, Box, Heading, Text, Button, Stack } from "@chakra-ui/react";
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Resume from "./pages/Resume"
import Home from "./pages/Home"

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path ="/" element={<Home />} />
      <Route path ="/resume" element={<Resume />} />
    </Routes>
    </>
  );
}

export default App;
