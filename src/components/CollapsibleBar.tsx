import { createContext, useContext, useState } from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

function createCollapsibleBar() {
  interface CollapsibleBarContextProps {
    isCollapsed: boolean;
    setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  }

  const CollapsibleBarContext = createContext<
    CollapsibleBarContextProps | undefined
  >(undefined);

  const useCollapsibleBarContext = () => {
    const context = useContext(CollapsibleBarContext);
    if (!context) throw new Error("Use inside CollapsibleBarProvider");
    return context;
  };

  interface ProviderProps {
    defaultCollapsed?: boolean;
    children: React.ReactNode;
  }

  const Provider = ({ defaultCollapsed = false, children }: ProviderProps) => {
    const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

    return (
      <CollapsibleBarContext.Provider value={{ isCollapsed, setIsCollapsed }}>
        {children}
      </CollapsibleBarContext.Provider>
    );
  };

  interface AsideProps extends React.ComponentProps<"aside"> {
    collapsedWidth?: string;
    UnCollapsedWidth?: string;
  }

  const Aside = ({
    className,
    collapsedWidth = "w-16",
    UnCollapsedWidth = "w-52",
    children,
    ...props
  }: AsideProps) => {
    const { isCollapsed } = useCollapsibleBarContext();
    return (
      <aside
        className={cn(
          "overflow-hidden transition-[width]  duration-600 ease-in-out",
          className,
          isCollapsed ? collapsedWidth : UnCollapsedWidth
        )}
        {...props}
      >
        {children}
      </aside>
    );
  };

  const Trigger = ({
    children,
    asChild,
  }: {
    children: React.ReactNode;
    asChild?: boolean;
  }) => {
    const { setIsCollapsed } = useCollapsibleBarContext();
    const Comp = asChild ? Slot : "div";
    return <Comp onClick={() => setIsCollapsed((p) => !p)}>{children}</Comp>;
  };

  return { Provider, Aside, Trigger, useCollapsibleBarContext };
}

export default createCollapsibleBar;
