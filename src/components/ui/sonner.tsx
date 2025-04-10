import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "rgb(254 243 199)",
          "--normal-text": "rgb(120 53 15)",
          "--normal-border": "rgb(253 230 138)",
          "--success-bg": "rgb(254 243 199)",
          "--success-text": "rgb(120 53 15)",
          "--success-border": "rgb(253 230 138)",
          "--error-bg": "rgb(254 243 199)",
          "--error-text": "rgb(120 53 15)",
          "--error-border": "rgb(253 230 138)",
          "--toast-font": "var(--font-serif)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
