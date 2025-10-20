// src/data/projectsCopy.js

export const projectsCopy = {
  en: {
    sectionTitle: "Projects",
    items: [
      {
        id: "p1",
        title: "Minimal Portfolio",
        desc: "A minimal, responsive portfolio with dark/light mode and i18n.",
        tech: ["React", "Tailwind", "Redux"],
        site: "https://example.com",     // sonra kendi linklerinle değiştir
        repo: "https://github.com/user/repo",
        image: "/projects/p1.jpg"        // public/projects/p1.jpg koyacağız
      },
      {
        id: "p2",
        title: "Todo App",
        desc: "Task management app with filters and persistence.",
        tech: ["React", "LocalStorage"],
        site: "#",
        repo: "#",
        image: "/projects/p2.jpg"
      },
      {
        id: "p3",
        title: "API Demo",
        desc: "Fetch and POST examples against a mock API.",
        tech: ["Axios", "REST"],
        site: "#",
        repo: "#",
        image: "/projects/p3.jpg"
      }
    ]
  },

  tr: {
    sectionTitle: "Projeler",
    items: [
      {
        id: "p1",
        title: "Minimal Portföy",
        desc: "Karanlık/açık tema ve çok dilli destekle minimal, responsive portföy.",
        tech: ["React", "Tailwind", "Redux"],
        site: "https://example.com",
        repo: "https://github.com/user/repo",
        image: "/projects/p1.jpg"
      },
      {
        id: "p2",
        title: "Yapılacaklar Uygulaması",
        desc: "Filtreler ve kalıcılık içeren görev yönetimi uygulaması.",
        tech: ["React", "LocalStorage"],
        site: "#",
        repo: "#",
        image: "/projects/p2.jpg"
      },
      {
        id: "p3",
        title: "API Demosu",
        desc: "Mock API ile veri çekme ve POST örnekleri.",
        tech: ["Axios", "REST"],
        site: "#",
        repo: "#",
        image: "/projects/p3.jpg"
      }
    ]
  }
};
