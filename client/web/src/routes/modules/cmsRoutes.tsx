import { Route, Routes } from "react-router-dom";
import ContentManagement from "@/pages/app/cms/ContentManagement";
import PageBuilder from "@/pages/app/cms/PageBuilder";
import MediaLibrary from "@/pages/app/cms/MediaLibrary";

export const CMSRoutes = () => (
  <Routes>
    <Route path="content" element={<ContentManagement />} />
    <Route path="page-builder" element={<PageBuilder />} />
    <Route path="media" element={<MediaLibrary />} />
  </Routes>
);
