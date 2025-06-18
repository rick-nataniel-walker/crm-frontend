export const articles = [
  {
    title: "Title Span",
    author: "Ubaldo Gemusse",
    category: "Escavações",
    tags: "Minas, Escavações",
    date: "2020-12-12",
    status: "Publicado",
  },
  {
    title: "Gestão de Recursos Hídricos em Áreas Mineiras",
    author: "Ubaldo Gemusse",
    category: "Recursos Hídricos",
    tags: "água, mineração, sustentabilidade",
    date: "2024-12-12",
    status: "Publicado",
  },
];

export const stats = [
  {
    id: 1,
    icon: "fas fa-file-alt",
    number: 24,
    label: "Artigos Publicados",
    bgColor: "bg-secondary-light",
    color: "text-secondary",
  },
  {
    id: 2,
    icon: "fas fa-edit",
    number: 5,
    label: "Rascunhos",
    bgColor: "bg-accent-light",
    color: "text-accent",
  },
  {
    id: 3,
    icon: "fas fa-comments",
    number: 42,
    label: "Comentários",
    bgColor: "bg-primary-light",
    color: "text-primary",
  },
  {
    id: 4,
    icon: "fas fa-tags",
    number: 15,
    label: "Tags",
    bgColor: "bg-gray-200",
    color: "text-gray-600",
  },
];

export const article = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  category: "",
  featuredImage: null,
  status: "draft",
  publishDate: "",
  tags: [],
};

export const categories = [
  { id: 1, name: "Geologia Aplicada" },
  { id: 2, name: "Gestão Ambiental" },
  // More categories...
];

export const tags = [
  { id: 1, name: "geologia" },
  { id: 2, name: "mineração" },
  // More tags...
];
