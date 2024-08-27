import HomePageMain from "./pages/HomePageMain";
import MainLayout from "./PHForm/layout/MainLayout";
import ProtectedRoute from "./PHForm/layout/ProtectedRoute";

function App() {
  return (
    <>
      {/* <HomePageMain />; */}
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    </>
  );
}

export default App;
