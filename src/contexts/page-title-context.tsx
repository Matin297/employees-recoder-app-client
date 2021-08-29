import { 
    createContext, 
    ReactNode, 
    useState, 
    useMemo, 
    useContext, 
    Dispatch, 
    SetStateAction 
} from 'react';

interface PageTitleContextInterface {
    title: string;
    setTitle: Dispatch<SetStateAction<string>>;
}

const PageTitleContext = createContext({
    title: '',
    setTitle: () => {} 
} as PageTitleContextInterface);

type PageTitleProviderProps = {
    children: ReactNode
}

function PageTitleProvider({ children }: PageTitleProviderProps) {
    const [title, setTitle] = useState('');
    const value = useMemo(() => ({
        title,
        setTitle
    }), [title, setTitle]);

    return (<PageTitleContext.Provider value={value}>{children}</PageTitleContext.Provider>)
}

export default PageTitleProvider;

export const usePageTitle = () => useContext(PageTitleContext);
