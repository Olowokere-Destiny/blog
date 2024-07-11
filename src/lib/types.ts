type Posts = {
  id: number;
  title: string;
  summary: string;
  publicationDate: string;
  content: string;
};
type PostProp = {
  id: number;
  title: string;
  summary: string;
  publicationDate: string;
};

type SinglePageProps = {
  params: {
    id: string;
  };
};

type NavBarProps = {
  dark: boolean;
  setDark: (val: boolean) => void;
};

type PostsArray = Posts[];

export { type Posts, type PostsArray, type PostProp, type SinglePageProps, type NavBarProps };
