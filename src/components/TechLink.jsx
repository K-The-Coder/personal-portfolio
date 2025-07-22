export default function TechLink({ href = "", title = "", children }) {
  return (
    <>
      <a href={href} title={title} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </>
  );
}
