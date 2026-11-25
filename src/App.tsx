import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HomeTemplate } from "./components/templates/HomeTemplate";
import { SectionTemplate } from "./components/templates/SectionTemplate";
import { ProfileHeader } from "./components/organisms/ProfileHeader";
import { Navigation } from "./components/organisms/Navigation";
import { Loader } from "./components/atoms/Loader";
import {
  AboutView,
  SkillsView,
  WorkView,
  ProjectsView,
} from "./components/organisms/views";
import { portfolioData } from "./data/config";

type ViewId = "home" | "about" | "work" | "projects" | "skills";

type SectionDetail = {
  title: string;
  parentLabel: string;
};

const sectionTitles: Record<Exclude<ViewId, "home">, string> = {
  about: "About",
  work: "Work",
  projects: "Projects",
  skills: "Skills",
};

function App() {
  const [loading, setLoading] = useState(true);
  const [activeView, setActiveView] = useState<ViewId>("home");
  const [sectionDetail, setSectionDetail] = useState<SectionDetail | null>(
    null,
  );
  const clearDetailRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const resetDetail = useCallback(() => {
    clearDetailRef.current = null;
    setSectionDetail(null);
  }, []);

  const handleNavigate = (viewId: string) => {
    resetDetail();
    setActiveView(viewId as ViewId);
  };

  const handleBack = () => {
    if (sectionDetail && clearDetailRef.current) {
      clearDetailRef.current();
      resetDetail();
      return;
    }
    setActiveView("home");
  };

  const handleHome = () => {
    resetDetail();
    setActiveView("home");
  };

  const handleDetailChange = useCallback(
    (
      detail: {
        title: string;
        parentLabel: string;
        clear: () => void;
      } | null,
    ) => {
      if (!detail) {
        resetDetail();
        return;
      }
      clearDetailRef.current = detail.clear;
      setSectionDetail({
        title: detail.title,
        parentLabel: detail.parentLabel,
      });
    },
    [resetDetail],
  );

  const renderContent = () => {
    switch (activeView) {
      case "work":
        return <WorkView onDetailChange={handleDetailChange} />;
      case "projects":
        return <ProjectsView onDetailChange={handleDetailChange} />;
      case "skills":
        return <SkillsView />;
      case "about":
        return <AboutView />;
      default:
        return null;
    }
  };

  const sectionTitle =
    sectionDetail?.title ??
    (activeView !== "home" ? sectionTitles[activeView] : "");
  const backLabel = sectionDetail ? sectionDetail.parentLabel : "Home";

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <ProfileHeader
            profile={portfolioData.profile}
            variant={activeView === "home" ? "hero" : "footer"}
            onHomeClick={activeView !== "home" ? handleHome : undefined}
          >
            {activeView === "home" && (
              <Navigation
                activeView={activeView}
                onNavigate={handleNavigate}
              />
            )}
          </ProfileHeader>

          <AnimatePresence mode="wait">
            {activeView === "home" && <HomeTemplate key="home" />}

            {activeView !== "home" && (
              <SectionTemplate
                key="section"
                title={sectionTitle}
                backLabel={backLabel}
                onBack={handleBack}
              >
                {renderContent()}
              </SectionTemplate>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
}

export default App;
