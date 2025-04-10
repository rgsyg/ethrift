export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="px-40 h-full">{children}</div>;
}
