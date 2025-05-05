import { lazy } from "react";

const ExerciseOne = lazy(() => import("../components/react-exercises/exerciseOne/exercise1"));

export const reactRoutes= [
  { path: "/react-exercises/exercise1", element: <ExerciseOne />, }
];
