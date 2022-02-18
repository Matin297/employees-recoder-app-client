import {
  createContext,
  ReactNode,
  useState,
  useMemo,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

type PageTitleContextType = [
  {
    pageTitle: string;
    setPageTitle: Dispatch<SetStateAction<string>>;
  },
  () => void
];

const PageTitleContext = createContext<PageTitleContextType>([
  {
    pageTitle: "",
    setPageTitle: (f) => f,
  },
  () => undefined,
]);

type PageTitleProviderProps = {
  children: ReactNode;
};

function PageTitleProvider({ children }: PageTitleProviderProps) {
  const [pageTitle, setPageTitle] = useState("");
  const value: PageTitleContextType = useMemo(
    () => [
      {
        pageTitle,
        setPageTitle,
      },
      () => setPageTitle(""),
    ],
    [pageTitle, setPageTitle]
  );

  return (
    <PageTitleContext.Provider value={value}>
      {children}
    </PageTitleContext.Provider>
  );
}

export default PageTitleProvider;

export const usePageTitle = () => useContext(PageTitleContext);
