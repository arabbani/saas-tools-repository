import { cn } from "@/lib/css";

interface ExternalLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  url: string;
}

export function ExternalLink({ url, children, className }: ExternalLinkProps) {
  return (
    <a href={url} target="_blank" className={cn("internal-link", className)}>
      {children}
    </a>
  );
}
