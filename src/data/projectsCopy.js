// src/data/projectsCopy.js



export const projectsCopy = {
  en: {
    sectionTitle: "Projects",
    items: [
      {
        id: "p1",
        title: "Personal Portfolio",
        desc: "A responsive portfolio built with React, Vite, Tailwind, and Redux-based i18n system, featuring light/dark themes, a Hire Me modal, and a contact form with fetch integration.",
        tech: ["React", "Vite", "Tailwind", "Redux", "React Query"],
        site: "#",     // sonra kendi linklerinle değiştir
        repo: "https://github.com/Sinanf/sf-portfolio",
        image: {
          light: "/projects/p1-light.png",
          dark: "/projects/p1-dark.png"
        }        
      },
      {
        id: "p2",
        title: "Pizza SPA",
        desc: "A single-page pizza ordering app built with React and Vite. Includes product customization, form handling, and responsive UI.",
        tech: ["React", "Vite", "React Router", "CSS/Tailwind"],
        site: "https://pizza-spa-eta.vercel.app/",
        repo: "https://github.com/Sinanf/pizza-spa",
        image: "/projects/p2.png"
      },
      {
        id: "p3",
        title: "New Project",
        desc: "Coming Soon",
        tech: ["React", "Vite", "Tailwind", "Redux", "React Query"],
        site: "#",
        repo: "#",
        image: "https://content.imageresizer.com/images/memes/elmo-fire-meme-29s5ao.jpg"
      }
    ]
  },

  tr: {
    sectionTitle: "Projeler",
    items: [
      {
        id: "p1",
        title: "Kişisel Portfolyo",
        desc: "React, Vite, Tailwind ve Redux tabanlı çok dilli yapı ile geliştirilen; açık/karanlık tema ve iletişim formu içeren responsive portfolyo projesi.",
        tech: ["React", "Vite", "Tailwind", "Redux", "React Query"],
        site: "https://sf-portfolio-alpha.vercel.app/",
        repo: "https://github.com/Sinanf/sf-portfolio",
        image: {
          light: "/projects/p1-light.png",
          dark: "/projects/p1-dark.png"
        }
      },
      {
        id: "p2",
        title: "Pizza SPA",
        desc: "React ve Vite ile geliştirilmiş tek sayfa pizza sipariş uygulaması. Ürün özelleştirme, form yönetimi ve responsive arayüz içerir.",
        tech: ["React", "Vite", "React Router", "CSS/Tailwind"],
        site: "https://pizza-spa-eta.vercel.app/",
        repo: "https://github.com/Sinanf/pizza-spa",
        image: "/projects/p2.png"
      },
      {
        id: "p3",
        title: "Yeni Proje",
        desc: "Çok Yakında",
        tech: ["Axios", "REST"],
        site: "#",
        repo: "#",
        image: "https://content.imageresizer.com/images/memes/elmo-fire-meme-29s5ao.jpg"
      }
    ]
  }
};
