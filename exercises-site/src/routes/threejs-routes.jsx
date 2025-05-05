import { lazy} from "react";

const StatsPanel = lazy(() => import("../components/Threejs/statsPanel"));
const AxesHelper = lazy(() => import("../components/Threejs/AxesHelper"));
const GridHelper = lazy(() => import("../components/Threejs/gridHelper"));
const Materials = lazy(() => import("../components/Threejs/materials"));

export const threeRoutes = [
  { path: "/threeJs/statsPanel", element: <StatsPanel /> },
  { path: "/threeJs/axesHelper", element: <AxesHelper /> },
  { path: "/threeJs/gridHelper", element: <GridHelper /> },
  { path: "/threeJs/materials", element: <Materials /> }
];