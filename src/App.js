import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {AboutPage, CommentPage, HomePage, PostPage, UserPage, NotFoundPage, SinglePostPage, LoginPage} from "./pages";
import {RequireAuth} from "./hooks/RequireAuth";

function App() {
  return (
    <Routes>
        <Route path={`/`} element={<MainLayout/>}>
            <Route index element={<Navigate to={`home`}/>}/>
            <Route path={`home`} element={<HomePage/>}/>
            <Route path={`users`} element={
                <RequireAuth>
                    <UserPage/>
                </RequireAuth>
            }/>
            <Route path={`posts`} element={<PostPage/>}>
                <Route path={`:id`} element={<SinglePostPage/>}/>
            </Route>
            <Route path={`comments`} element={<CommentPage/>}/>
            <Route path={`login`} element={<LoginPage/>}/>
            <Route path={`about`} element={<AboutPage/>}/>
            <Route path={`*`} element={<NotFoundPage/>}/>
        </Route>
    </Routes>
  );
}

export default App;
